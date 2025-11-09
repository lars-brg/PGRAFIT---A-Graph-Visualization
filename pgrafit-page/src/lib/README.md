# 🔧 Utilitários e Lógica de Negócios (`src/lib`)

Este diretório contém funções auxiliares, lógica de negócios e abstrações para serviços externos. O objetivo é manter os componentes (em `src/components`) limpos e focados apenas na renderização.

**Conteúdo Principal:**

- **Conexão com a API:** Funções para fazer requisições HTTP ao `api/` (backend Python).
  - Exemplo: `api-client.ts`
- **Funções de Formatação:** Funções para manipular ou formatar dados do grafo (ex: formatar valores, calcular densidade, etc.).
- **Configurações:** Constantes ou configurações que são compartilhadas por toda a aplicação.