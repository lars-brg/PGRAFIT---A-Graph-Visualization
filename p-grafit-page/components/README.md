# /components

Esta pasta armazena todos os componentes React reutilizáveis que compõem a aplicação, excluindo as páginas de roteamento (`/app`).

## Organização Interna

Os componentes devem ser organizados em subpastas de acordo com sua função:

* **`/components/layout`:** Componentes estruturais usados no layout de página (ex: `Header`, `Footer`, `Sidebar`).
* **`/components/sections`:** Componentes de alto nível que representam grandes blocos de conteúdo na página (ex: `HeroSection`, `GrafoSection`, `FeaturesList`).
* **`/components/ui`:** Componentes de interface de usuário básicos e atômicos (ex: `Button`, `Card`, `Input`, `LoadingSpinner`).

## Regras
1.  **Reutilização:** Priorize a criação de componentes genéricos (em `/ui`) que possam ser reutilizados em diferentes seções e layouts.
2.  **Naming:** Componentes devem ser nomeados com `PascalCase` (ex: `MyComponent.tsx`).
3.  **Client/Server:** Use a diretiva `"use client";` apenas nos arquivos que realmente precisam de interatividade (hooks de estado, listeners de clique, etc.).