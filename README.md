# Site Palma Produções

Site oficial da [Palma Produções](https://site-palma-producoes.vercel.app) — produtora cultural e socioambiental comprometida com projetos de qualidade e impacto.

## Histórico do projeto

| Evento | Data |
|--------|------|
| Repositório criado no GitHub | 27 de junho de 2023 |
| Associação com a Vercel | 27 de junho de 2023 |

O repositório foi criado em **27 de junho de 2023** com o commit inicial gerado pelo `create-next-app`. Na mesma data, o projeto foi associado à plataforma [Vercel](https://vercel.com), onde é hospedado até hoje em: https://site-palma-producoes.vercel.app

## Tecnologias

- [Next.js 13](https://nextjs.org/) — framework React para produção
- [Contentlayer](https://contentlayer.dev/) — gerenciamento de conteúdo via Markdown/MDX
- [Tailwind CSS](https://tailwindcss.com/) — estilização utilitária
- [Material UI (MUI)](https://mui.com/) — componentes de interface
- [next-i18next](https://github.com/i18next/next-i18next) — internacionalização (PT/EN)
- [React Email](https://react.email/) — templates de e-mail
- [Vercel](https://vercel.com) — hospedagem e deploy contínuo

## Como rodar localmente

1. Clone o repositório e instale as dependências:

```bash
git clone https://github.com/josenaldo/site-palma-producoes.git
cd site-palma-producoes
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento (Contentlayer + Next.js) |
| `npm run build` | Gera o build de produção |
| `npm start` | Inicia o servidor em modo produção |
| `npm run lint` | Executa o ESLint |
| `npm run clean` | Remove os artefatos de build (`.next`, `.contentlayer`) |
| `npm run email` | Inicia o servidor de preview de e-mails |

## Deploy

O projeto é implantado automaticamente na [Vercel](https://vercel.com) a cada push na branch `main`.

URL de produção: **https://site-palma-producoes.vercel.app**

Para mais detalhes sobre deploy com Next.js, veja a [documentação de deployment do Next.js](https://nextjs.org/docs/deployment).
