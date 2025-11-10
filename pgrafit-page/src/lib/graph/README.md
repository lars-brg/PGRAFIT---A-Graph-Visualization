# 🧠 Lógica e Utilitários do Grafo (`src/lib/graph/`)

Este subdiretório contém as funções e módulos responsáveis por configurar, construir e adicionar interatividade ao grafo visualizado pelo React Sigma.

## Arquivos e Funcionalidades

| Arquivo | Responsabilidade | Detalhe |
| :--- | :--- | :--- |
| `BuildGraphFromJson.ts` | **Construção de Dados.** Contém a função central que pega o JSON bruto de entrada (recebido do backend ou carregado) e o mapeia para o formato **`MultiDirectedGraph`** (Nós e Arestas) exigido pelo Graphology/Sigma. |
| `GraphSettings.ts` | **Configuração Visual.** Exporta o objeto `sigmaSettings`, definindo todas as opções de renderização padrão: cores, tamanhos, fontes, tipo de renderizador e comportamentos iniciais do Sigma. |
| `GraphSearchWithFocus.tsx` | **Busca e Foco.** É um componente React que utiliza *hooks* do Sigma para permitir que o usuário **busque um nó por ID/rótulo** e, ao selecioná-lo, a câmera do grafo se **centralize** nesse nó. |
| `SelectableNodes.tsx` | **Interação de Seleção.** Contém a lógica de eventos que lida com o **clique do mouse** sobre um nó. Isso permite que um nó seja marcado como "selecionado" e que informações detalhadas sobre ele possam ser exibidas. |
| `HighlightNodes.tsx` | **Efeito Visual.** Utiliza o estado de seleção para aplicar um efeito visual no grafo. Tipicamente, ele **destaca** o nó selecionado e suas arestas vizinhas, e **"esmaece"** (diminui a opacidade ou cor) o restante do grafo para melhorar a clareza visual. |

## Fluxo de Execução

1.  **Configuração:** O `GraphGenerator.tsx` carrega as configurações de `GraphSettings.ts`.
2.  **Construção:** O JSON é processado por `BuildGraphFromJson.ts` e o objeto `Graphology` resultante é passado para o `<SigmaContainer>`.
3.  **Interatividade:** Os demais arquivos (`GraphSearchWithFocus.tsx`, `SelectableNodes.tsx`, `HighlightNodes.tsx`) são injetados dentro do `<SigmaContainer>` para adicionar comportamento ao grafo renderizado.