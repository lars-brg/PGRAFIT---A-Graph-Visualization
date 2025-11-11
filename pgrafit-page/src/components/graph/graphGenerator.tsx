"use client";

// React e hooks
import { FC, CSSProperties, useEffect, useState } from "react";

// Graphology e Sigma
import { MultiDirectedGraph } from "graphology";
import {
  SigmaContainer,
  ControlsContainer,
  ZoomControl,
  FullScreenControl,
} from "@react-sigma/core";
import { MiniMap } from "@react-sigma/minimap";

// Configurações e utilitários do projeto
import { sigmaSettings } from "../../lib/graph/GraphSettings";
import { buildGraphFromJson } from "@/lib/graph/BuildGraphFromJson";
import { GraphSearchWithFocus } from "@/lib/graph/GraphSearchWithFocus";
import HighlightNodes from "@/lib/graph/HighlightNodes";
import SelectableNodes from "@/lib/graph/SelectableNodes";

// Estilos (CSS / temas externos)
import "@react-sigma/core/lib/react-sigma.min.css";
import "@react-sigma/core/lib/style.css";
import "@react-sigma/graph-search/lib/style.css";


export const Graph_Generator: FC<{ style: CSSProperties; graphFile: string }> = ({ style, graphFile }) => {
  const [graphData, setGraphData] = useState<MultiDirectedGraph | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(graphFile)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setGraphData(buildGraphFromJson(data));
      })
      .catch((err) => console.error("Erro ao carregar JSON do grafo:", err));
    return () => {
      cancelled = true;
    };
  }, [graphFile]);

  if (!graphData) return <div>Carregando grafo...</div>;

  return (
    <SigmaContainer key={graphFile} style={style} settings={sigmaSettings} graph={graphData}>
      <SelectableNodes />
      <HighlightNodes />

      <ControlsContainer position="bottom-right">
        <ZoomControl />
        <FullScreenControl />
      </ControlsContainer>

      <ControlsContainer position="top-right">
        <GraphSearchWithFocus selectedNode={selectedNode} setSelectedNode={setSelectedNode} />
      </ControlsContainer>

      <ControlsContainer position="bottom-left">
        <MiniMap width="200px" height="200px" />
      </ControlsContainer>
    </SigmaContainer>
  );
};

export default Graph_Generator;