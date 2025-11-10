// src/components/app/graphSettings.ts
import { Attributes } from "graphology-types";

export const sigmaSettings = {
  defaultNodeType: "circle",
  defaultEdgeType: "arrow",
  renderEdgeLabels: true,

  nodeReducer: (node: string, data: Attributes) => {
    const newData = { ...data };
    if (newData.highlighted) {
      newData.color = "#b91ec7ff";
      newData.label = newData.originalLabel ?? newData.label;
    } else if (newData.dimmed) {
      newData.color = "#D3D3D3";
      newData.size = (data.size ?? 8) * 0.7;
      newData.label = "";
    } else {
      newData.color = newData.originalColor ?? newData.color;
      newData.label = newData.originalLabel ?? newData.label;
    }
    return newData;
  },

  edgeReducer: (edge: string, data: Attributes) => {
    const newData = { ...data };
    if (newData.dimmed) {
      newData.color = "#E0E0E0";
      newData.label = "";
    } else {
      newData.color = newData.originalColor ?? "#888";
      newData.label = newData.originalLabel ?? newData.label;
    }
    return newData;
  },
};
