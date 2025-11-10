# 📚 Diretório de Bibliotecas e Lógica (`src/lib/`)

Este diretório contém a lógica de negócio e as funções utilitárias do frontend que não são componentes React (embora alguns arquivos possam usar React Hooks para manipular o Sigma). Seu objetivo é manter a lógica complexa e de manipulação de dados **separada dos componentes visuais**.

## Organização Interna

| Diretório/Arquivo | Descrição |
| :--- | :--- |
| `graph/` | **Lógica Essencial do Grafo.** Contém a conversão de dados JSON, as configurações de renderização e as funcionalidades de interatividade (busca, destaque e seleção) que são injetadas no Sigma. **(Detalhado abaixo)** |
| `types/` (Sugerido) | Tipos TypeScript customizados para a aplicação (ex: `GraphData`, `NodeAttributes`, etc.). |
| `utils.ts` | Funções auxiliares gerais que podem ser usadas em qualquer parte do projeto (ex: formatação de strings, cálculos de data, helpers de URL). |