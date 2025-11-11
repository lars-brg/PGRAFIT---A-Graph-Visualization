"use client";
import GraphUploader from "../graph/GraphUploader";

export default function Graph_Section() {
  return (
    <section className="bg-gray-100 text-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">P-GRAFIT</h2>

        <p className="mb-4 text-justify">
          Esta ferramenta foi desenvolvida para transformar a complexidade dos
          grafos de classificação em uma representação visual clara e intuitiva,
          facilitando a interpretação das relações entre dados de sensores e
          situações de risco à saúde em aplicações IoHT. Ao carregar seu
          arquivo, você terá acesso a um grafo interativo dividido em quatro
          etapas:
        </p>

        {/* Fluxo ilustrativo */}
         <div className="flex flex-wrap justify-center items-center gap-4 mb-6 text-sm">
          <div className="flex items-center justify-center bg-[#1f77b4] text-white font-semibold w-20 h-20 rounded-full">
            Sensor
          </div>
          <span className="text-gray-500 text-xl">→</span>
          <div className="flex items-center justify-center bg-[#ff7f0e] text-white font-semibold w-20 h-20 rounded-full">
            Features
          </div>
          <span className="text-gray-500 text-xl">→</span>
          <div className="flex items-center justify-center bg-[#2ca02c] text-white font-semibold w-20 h-20 rounded-full">
            Model
          </div>
          <span className="text-gray-500 text-xl">→</span>
          <div className="flex items-center justify-center bg-[#d62728] text-white font-semibold w-20 h-20 rounded-full text-center leading-tight">
            Final<br />Status
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-2 font-semibold">A visualização permite:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Identificar o caminho que leva a um resultado de saúde (e.g., Queda
              ou Normal Walking).
            </li>
            <li>
              Observar a probabilidade associada a cada evento final.
            </li>
            <li>
              Isolar nós e suas conexões para uma análise detalhada.
            </li>
          </ul>
        </div>

        <p className="mb-10">
          Para começar, insira seu arquivo no botão abaixo. A plataforma aceita
          arquivos no formato <strong>XML</strong> ou <strong>JSON</strong>{" "}
          contendo o modelo do seu grafo de classificação.
        </p>

        {/* Componente do grafo */}
        <GraphUploader />
      </div>
    </section>
  );
}
