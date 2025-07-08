# Refúgio Seguro Frontend

## Contextualização
O Refúgio Seguro é uma plataforma que conecta pessoas em situação de vulnerabilidade a abrigos, ONGs, apoio jurídico e recursos confiáveis. O objetivo é facilitar o acesso a direitos básicos e informações seguras, promovendo acolhimento e proteção para mulheres, pessoas LGBTQIAPN+, refugiados, imigrantes, crianças, idosos e outros grupos marginalizados.

## Tecnologias Utilizadas
- **Next.js**: 13+
- **TypeScript**: 4.9+
- **CSS puro**
- **API Refúgio Seguro**: [https://github.com/FK1FF3R/refugio-seguro](https://github.com/FK1FF3R/refugio-seguro)

## Imagens do Projeto

![Home](./public/preview-home.png)
![Abrigos](./public/preview-abrigos.png)

> Substitua os arquivos acima por prints reais do projeto rodando.

## Passo a Passo para Execução Local

1. **Clone o repositório da API**
   ```bash
   git clone https://github.com/FK1FF3R/refugio-seguro.git
   cd refugio-seguro
   npm install
   npm run dev
   # A API estará disponível em http://localhost:3001
   ```
2. **Clone este repositório (frontend)**
   ```bash
   git clone <URL deste repositório>
   cd refugio-seguro-frontend
   npm install
   ```
3. **Configure o arquivo `.env.local`**
   Crie um arquivo `.env.local` na raiz do frontend com o conteúdo:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```
4. **Rode o frontend**
   ```bash
   npm run dev
   # O frontend estará disponível em http://localhost:3000
   ```

## Link para a API utilizada
- [https://github.com/FK1FF3R/refugio-seguro](https://github.com/FK1FF3R/refugio-seguro)

## Organização de Pastas

```
src/
  app/
    components/
      layout/         # Componentes de layout global (Header, Footer)
      sections/       # Sections principais da página (Abrigos, ONGs, etc)
      ClientSections.tsx # Componente client para animações e controle das sections
    hooks/            # Hooks customizados (ex: useFadeInOnScroll)
    styles/           # CSS modularizado por componente/section
    globals.css       # Estilos globais e variáveis CSS
    layout.tsx        # Layout principal do Next.js
    page.tsx          # Página principal
  services/           # Serviços de API
  types/              # Tipos TypeScript compartilhados
public/
  # Imagens, favicon, SVGs, logo.png
```

## Sobre (About)
- **Site:** (adicione aqui o link caso esteja hospedado)
- **API:** [https://github.com/FK1FF3R/refugio-seguro](https://github.com/FK1FF3R/refugio-seguro)
- **Apresentação LinkedIn:** (adicione aqui o link da postagem de apresentação)
- **Tópicos:** nextjs, typescript, acessibilidade

## 🧑‍💻 Padrões e Boas Práticas
- **Componentização:** Cada section e parte do layout é um componente isolado.
- **Tipagem Forte:** Todas as props e funções são tipadas, sem uso de `any`.
- **Imports Absolutos:** Usando paths do `tsconfig.json` para clareza e manutenção.
- **CSS Modularizado:** Cada componente importa apenas seu CSS correspondente.
- **Hooks Customizados:** Lógica de animação e efeitos em hooks reutilizáveis.
- **Clean Code:** Nomes claros, funções pequenas, sem duplicidade ou código morto.

## 🎨 Estilo e Responsividade
- Paleta de cores definida em variáveis CSS globais.
- Layout responsivo e moderno.
- Animações suaves de entrada nas sections.

## 🎨 Estilo e Responsividade
- Paleta de cores definida em variáveis CSS globais.
- Layout responsivo e moderno.
- Animações suaves de entrada nas sections.

## 🏁 Como Rodar o Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Crie um arquivo `.env.local` com a variável `NEXT_PUBLIC_API_URL` apontando para a API Refugio Seguro.
3. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse em [http://localhost:3000](http://localhost:3000)

## 🤝 Como Contribuir
- Siga o padrão de organização de pastas e tipagem.
- Crie componentes pequenos e reutilizáveis.
- Sempre use imports absolutos.
- Mantenha o código limpo e sem comentários desnecessários.


