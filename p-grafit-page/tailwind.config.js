/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Garanta que o Tailwind "enxergue" todos os seus arquivos do Next.js
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}', // Se você tiver componentes aqui
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Para incluir a pasta src se estiver usando
  ],
  theme: {
    extend: {
      // Adicionando suas cores personalizadas aqui:
      colors: {
        'brand-dark': '#2C504B', 
        'brand-light': '#96CFC8',
        'brand-primary': '#3D7A70', // Cor de destaque principal (o triângulo apontava para ela)
        'brand-bg-light': '#DEFAF6', // Fundo bem claro
        'brand-bg-accent': '#BEFFF6', // Fundo de destaque secundário
        'color-gray-ui': '#4F4F4F', //Para o botão no fim
        'white-bg': '#E3E3E3', // Fundo das paginas
      },
      fontFamily: {
        // Fonte para Títulos (Mais expressiva)
        'heading': ['Smooch Sans', 'sans-serif'],
        // Fonte para Corpo do Texto (Mais legível e padrão)
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}