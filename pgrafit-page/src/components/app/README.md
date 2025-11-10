# 🧭 Diretório de Páginas (`src/app/`)

Este diretório segue o modelo de roteamento do Next.js (App Router) e contém os arquivos de nível superior que definem as rotas e a estrutura da aplicação.

## Conteúdo

| Arquivo | Descrição |
| :--- | :--- |
| `page.tsx` | **Página Principal (Landing Page).** Este arquivo é a raiz (`/`) da aplicação. Ele é responsável por montar o layout geral da página, importando e organizando as grandes **Seções** da interface (como a `GraphSection`, a seção "Hero", "About", etc.) para compor a vista final. |

## Estrutura da Página

O `page.tsx` atua como um container, onde as seções complexas são importadas de `src/components/` e dispostas na ordem desejada:

```tsx
// Exemplo de como page.tsx usa os componentes:
import { Header } from '@/components/layout/Header';
import GraphSection from '@/components/graph/GraphSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* A seção principal do aplicativo é importada aqui */}
        <GraphSection />
        {/* Outras seções da Landing Page ficariam aqui: */}
        {/* <HeroSection /> */}
        {/* <AboutUsSection /> */}
      </main>
      <Footer />
    </>
  );
}