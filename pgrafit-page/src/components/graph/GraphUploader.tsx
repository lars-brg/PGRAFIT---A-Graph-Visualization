"use client";
import React, { useState, ChangeEvent } from "react";
import Graph_Generator from "@/components/graph/graphGenerator";
import UploadButton from "@/components/ui/UploadButton";

const GraphUploader: React.FC = () => {
  const [graphFile, setGraphFile] = useState("/arquivo_base.json");
  const [graphKey, setGraphKey] = useState(() => Date.now());
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileExtension = file.name.split(".").pop()?.toLowerCase();

    // 🧹 Libera URLs antigas
    if (graphFile.startsWith("blob:")) {
      try {
        URL.revokeObjectURL(graphFile);
      } catch (e) {
        console.warn("Erro ao revogar URL antiga:", e);
      }
    }

    // 🧠 XML → backend → JSON
    if (fileExtension === "xml") {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://localhost:5000/convert", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        setLoading(false);

        if (response.ok && data.json_content) {
          const blob = new Blob([data.json_content], { type: "application/json" });
          const jsonUrl = URL.createObjectURL(blob);

          setGraphFile(jsonUrl);
          setGraphKey(Date.now());
        } else {
          alert("Erro na conversão: " + (data.error || "Resposta inválida."));
        }
      } catch (err) {
        setLoading(false);
        console.error(err);
        alert("Erro ao conectar com o servidor Python.");
      }
    }
    // 📄 JSON → direto
    else if (fileExtension === "json") {
      const fileUrl = URL.createObjectURL(file);
      setGraphFile(fileUrl);
      setGraphKey(Date.now());
    } else {
      alert("Por favor, envie um arquivo JSON ou XML.");
    }
  };

  return (
    <div>
      <Graph_Generator
        key={graphKey}
        graphFile={graphFile}
        style={{
          width: "70%",
          height: "600px",
          backgroundColor: "#f3f3f3",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          margin: "auto",
        }}
      />

      <UploadButton
        loading={loading}
        onChange={handleFileChange}
        label="Escolher Arquivo JSON/XML"
      />
    </div>
  );
};

export default GraphUploader;
