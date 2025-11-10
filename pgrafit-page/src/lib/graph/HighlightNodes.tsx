// HighlightNodes.tsx
import { FC, useEffect, useState } from "react";
import { useSigma } from "@react-sigma/core";

const HighlightNodes: FC = () => {
  const sigma = useSigma();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const handleEnterNode = (payload: { node: string }) => {
      setHoveredNode(payload.node);
    };

    const handleLeaveNode = () => {
      setHoveredNode(null);
    };

    sigma.on("enterNode", handleEnterNode);
    sigma.on("leaveNode", handleLeaveNode);

    return () => {
      sigma.off("enterNode", handleEnterNode);
      sigma.off("leaveNode", handleLeaveNode);
    };
  }, [sigma]);

  useEffect(() => {
    const graph = sigma.getGraph();
    if (graph.order === 0) return;

    // Primeiro, resetamos o estado de 'highlighted', 'dimmed' e visibilidade de label
    graph.forEachNode((node) => {
      graph.setNodeAttribute(node, "highlighted", false);
      graph.setNodeAttribute(node, "dimmed", false);
      // O label será controlado pelo dimmer nos reducers, então não precisa de uma flag separada aqui
      // mas vamos garantir que o originalLabel é mantido nos dados do nó se quisermos esconde-lo temporariamente
    });
    graph.forEachEdge((edge) => {
      graph.setEdgeAttribute(edge, "dimmed", false);
    });

    if (hoveredNode) {
      const connectedNodes = new Set<string>();
      const visitedNodes = new Set<string>();

      const findReachableNodes = (startNode: string) => {
        const queue: string[] = [startNode];
        visitedNodes.add(startNode);
        connectedNodes.add(startNode);

        while (queue.length > 0) {
          const currentNode = queue.shift()!;
          graph.forEachOutNeighbor(currentNode, (neighbor) => {
            if (!visitedNodes.has(neighbor)) {
              visitedNodes.add(neighbor);
              connectedNodes.add(neighbor);
              queue.push(neighbor);
            }
          });
        }
      };

      const findNodesReaching = (startNode: string) => {
        const queue: string[] = [startNode];
        // Não precisamos limpar visitedNodes aqui se queremos acumular todos os nós conectados.
        // A busca BFS/DFS é robusta o suficiente para não re-visitar nós já marcados.
        visitedNodes.add(startNode);
        connectedNodes.add(startNode);

        while (queue.length > 0) {
          const currentNode = queue.shift()!;
          graph.forEachInNeighbor(currentNode, (neighbor) => {
            if (!visitedNodes.has(neighbor)) {
              visitedNodes.add(neighbor);
              connectedNodes.add(neighbor);
              queue.push(neighbor);
            }
          });
        }
      };

      // Inicia a busca a partir do hoveredNode em ambas as direções
      // Para garantir que todas as ramificações sejam exploradas, você pode reiniciar visitedNodes
      // ou ser mais explícito na união. Para este caso, vamos garantir que o hoveredNode
      // é o ponto de partida de ambas as buscas independentes que populam 'connectedNodes'.
      // A ordem da busca não importa muito para a abrangência final de 'connectedNodes'.
      findReachableNodes(hoveredNode);
      // Agora, para pegar os que chegam ao hoveredNode:
      // Criar um novo Set para a busca reversa para não interferir na busca para frente,
      // ou limpar e re-usar 'visitedNodes' para a nova travessia.
      const visitedNodesReverse = new Set<string>(); // Use um novo set para a busca reversa
      const queueReverse: string[] = [hoveredNode];
      visitedNodesReverse.add(hoveredNode);
      connectedNodes.add(hoveredNode); // Garante que o hoveredNode está sempre no set

      while (queueReverse.length > 0) {
        const currentNode = queueReverse.shift()!;
        graph.forEachInNeighbor(currentNode, (neighbor) => {
          if (!visitedNodesReverse.has(neighbor)) {
            visitedNodesReverse.add(neighbor);
            connectedNodes.add(neighbor);
            queueReverse.push(neighbor);
          }
        });
      }


      // Aplica as propriedades 'highlighted' e 'dimmed'
      graph.forEachNode((node) => {
        if (node === hoveredNode) {
          graph.setNodeAttribute(node, "highlighted", true);
          graph.setNodeAttribute(node, "dimmed", false); // Não dimmed
        } else if (connectedNodes.has(node)) {
          graph.setNodeAttribute(node, "highlighted", false); // Não é o hovered
          graph.setNodeAttribute(node, "dimmed", false); // Não dimmed
        } else {
          graph.setNodeAttribute(node, "highlighted", false);
          graph.setNodeAttribute(node, "dimmed", true); // Dimmed
        }
      });

      graph.forEachEdge((edge) => {
        const source = graph.source(edge);
        const target = graph.target(edge);
        if (connectedNodes.has(source) && connectedNodes.has(target)) {
          graph.setEdgeAttribute(edge, "dimmed", false);
        } else {
          graph.setEdgeAttribute(edge, "dimmed", true);
        }
      });
    }

    sigma.refresh();
  }, [hoveredNode, sigma]);

  return null;
};

export default HighlightNodes;