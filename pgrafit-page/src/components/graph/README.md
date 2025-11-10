# 📊 Componentes de Grafo (`src/components/graph/`)

Este diretório contém os componentes React essenciais para manipular o **upload de arquivos**, processar a conversão de dados (via backend) e renderizar o grafo de forma interativa usando a biblioteca **React Sigma**.

## Arquivos e Responsabilidades

### 1. `GraphSection.tsx` (Componente de Controle e Upload)

Anteriormente chamado de `GraphUploader` na sua lógica de código, este componente atua como o **controlador principal** da visualização:

| Responsabilidade | Detalhe da Lógica |
| :--- | :--- |
| **Lógica de Upload** | Lida com o evento `onChange` do `UploadButton.tsx`. |
| **Conversão XML** | Se o arquivo for `.xml`, faz um `fetch` (requisição **POST**) para o *endpoint* do **Backend Flask** (`http://localhost:5000/convert`) para conversão. |
| **Criação de Blob** | Após a conversão, o JSON retornado é transformado em um `Blob` e uma `URL.createObjectURL` é gerada. |
| **Carregamento Direto** | Se o arquivo for `.json`, ele é carregado diretamente via `URL.createObjectURL`. |
| **Gerenciamento de Estado** | Controla os estados de `loading`, a URL do arquivo (`graphFile`) e a chave (`graphKey`) para forçar a renderização do grafo quando um novo arquivo é carregado. |
| **Revogação de URL** | Usa `URL.revokeObjectURL` para liberar URLs temporárias e evitar *memory leaks*. |

### 2. `GraphGenerator.tsx` (Componente de Renderização Sigma)

Componente encarregado de desenhar o grafo e integrar as funcionalidades de interatividade do Sigma:

| Responsabilidade | Detalhe da Lógica |
| :--- | :--- |
| **Carregamento de Dados** | Usa `useEffect` para carregar o JSON (via `fetch` da URL fornecida por `GraphSection.tsx`) na inicialização. |
| **Montagem do Grafo** | Utiliza a função `buildGraphFromJson` (importada de `src/lib/`) para transformar os dados JSON em um objeto **`MultiDirectedGraph`** compreensível pelo Graphology/Sigma. |
| **Container Sigma** | Envolve todo o conteúdo com `<SigmaContainer>`, fornecendo o objeto `graphData` e as configurações visuais (`sigmaSettings`). |
| **Controles de Interatividade** | Integra os componentes interativos do `src/lib/` e nativos do Sigma, como: **`SelectableNodes`**, **`HighlightNodes`**, **`GraphSearchWithFocus`**, **`ZoomControl`**, **`FullScreenControl`** e **`MiniMap`**. |
| **Dependências** | Importa a maioria dos pacotes relacionados ao grafo e aos estilos CSS (`@react-sigma/core`, `@react-sigma/minimap`). |

---

Com base na importância das funções de biblioteca em ambos os componentes, a documentação do diretório `src/lib/` seria o próximo passo lógico. Quer que eu gere esse `README.md`?