// src/components/app/GraphSearchWithFocus.tsx
"use client";

import { FC, useCallback } from "react";
import { useSigma } from "@react-sigma/core";
import { GraphSearch, GraphSearchOption } from "@react-sigma/graph-search";

export const GraphSearchWithFocus: FC<{
  selectedNode: string | null;
  setSelectedNode: (id: string | null) => void;
}> = ({ selectedNode, setSelectedNode }) => {
  const sigma = useSigma();

  const onChange = useCallback(
    (option: GraphSearchOption | null) => {
      if (option?.type === "nodes") {
        setSelectedNode(option.id);
        const nodePos = sigma.getNodeDisplayData(option.id);
        if (nodePos) {
          sigma.getCamera().animate(
            { x: nodePos.x, y: nodePos.y, ratio: 0.5 },
            { duration: 600 }
          );
        }
      } else {
        setSelectedNode(null);
      }
    },
    [sigma, setSelectedNode]
  );

  const postSearchResult = useCallback((options: GraphSearchOption[]): GraphSearchOption[] => {
    return options.length <= 10
      ? options
      : [
          ...options.slice(0, 10),
          {
            type: "message",
            message: (
              <span className="text-center text-muted">
                And {options.length - 10} others
              </span>
            ),
          },
        ];
  }, []);

  return (
    <GraphSearch
      type="nodes"
      value={selectedNode ? { type: "nodes", id: selectedNode } : null}
      onChange={onChange}
      postSearchResult={postSearchResult}
    />
  );
};
