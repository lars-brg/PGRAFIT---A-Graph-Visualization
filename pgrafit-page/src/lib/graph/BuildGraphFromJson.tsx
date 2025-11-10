// src/lib/buildGraphFromJson.ts
import { MultiDirectedGraph } from "graphology";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const buildGraphFromJson = (data: any): MultiDirectedGraph => {
  const g = new MultiDirectedGraph();
  const nodeSet = new Set<string>();

  const columnX = [0, 100, 200, 300];
  const columnYCounter = [0, 0, 0, 0];
  const SPACING_Y = [40, 15, 30, 10];

  const addNode = (id: string, column: number, color: string) => {
    if (!nodeSet.has(id)) {
      const y = -columnYCounter[column] * SPACING_Y[column];
      g.addNode(id, {
        label: id,
        originalLabel: id,
        x: columnX[column],
        y,
        size: 10,
        color,
        originalColor: color,
        highlighted: false,
        dimmed: false,
        type: "circle",
      });
      nodeSet.add(id);
      columnYCounter[column]++;
    }
  };

  // 1️⃣ Sensor → Feature
  const sensorFeatures = data.KnowledgeRepresentation.edgeSensorFeature.EdgeSensorFeature;
  for (const item of sensorFeatures) {
    const sensorId = item.vSensor.typeSensor;
    const featureName = item.vFeature.featureName.name;
    const featureId = `${featureName}_${sensorId}`;
    addNode(sensorId, 0, "#1f77b4");
    addNode(featureId, 1, "#ff7f0e");
    g.addEdge(sensorId, featureId, { label: "", size: 1, type: "arrow" });
  }

  // 2️⃣ Feature → Model
  const featureModels = data.KnowledgeRepresentation.edgeFeaturesModel.EdgeFeatureModel;
  for (const item of featureModels) {
    const featureName = item.vFeature.featureName.name;
    const sensorId = item.vFeature.featureName.idSensor;
    const featureId = `${featureName}_${sensorId}`;
    const modelId = item.vModel.modelName;
    addNode(featureId, 1, "#ff7f0e");
    addNode(modelId, 2, "#2ca02c");
    g.addEdge(featureId, modelId, { label: "", size: 1, type: "arrow" });
  }

  // 3️⃣ Model → FinalStatus
  const modelStatuses = data.KnowledgeRepresentation.edgeModelsFinalStatus.EdgeModelsFinalStatus;
  for (const item of modelStatuses) {
    const modelId = item.vModel.modelName;
    const finalStatusId = item.vFinalStatus.finalStatus;
    const probability = item.probability;
    addNode(modelId, 2, "#2ca02c");
    addNode(finalStatusId, 3, "#d62728");
    g.addEdge(modelId, finalStatusId, { label: probability, size: 1.5, type: "arrow" });
  }

  return g;
};
