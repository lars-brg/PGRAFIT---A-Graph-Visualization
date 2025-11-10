import { FC, useEffect, useState } from "react";
import { useSigma, useRegisterEvents } from "@react-sigma/core";

const SelectableNodes: FC = () => {
  const sigma = useSigma();
  const graph = sigma.getGraph();
  const registerEvents = useRegisterEvents();

  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  // registra eventos
  useEffect(() => {
    registerEvents({
      clickNode: ({ node }) => {
        // desmarca o nó anterior
        if (selectedNode) {
          graph.setNodeAttribute(selectedNode, "highlighted", false);
        }
        // marca o novo
        setSelectedNode(node);
        graph.setNodeAttribute(node, "highlighted", true);
      },
      clickStage: () => {
        // clique fora → limpa seleção
        if (selectedNode) {
          graph.setNodeAttribute(selectedNode, "highlighted", false);
          setSelectedNode(null);
        }
      },
    });
  }, [registerEvents, graph, selectedNode]);

  return null; // componente só controla estado/eventos
};

export default SelectableNodes;
