---
title: Documentação
description:
  "Documentação do site"
image:
  url: "/images/content/pages/contato.jpg"
  alt: "Palma Produções - Documentação"
  width: 1200
  height: 628
---

<Titulo />

<Resumo>
O objetivo dessa página é documentar como criar novas páginas e novos items do portfólio para o site.
</Resumo>

<Toc>
- Introdução
- Páginas
- Posts
- Portfólio
- Depoimentos
- Parcerias
- Serviços
- Sócias
- Markdown
- Mídia
- Componentes
</Toc>

## Introdução

Bem vindo ao site da Palma Produções! Aqui você encontrará a documentação necessária para editar e criar novas páginas, posts, items do portfólio, depoimentos, parcerias, serviços e informações sobre as sócias.

A primeira coisa que você precisa saber, para editar o site, é que todo o conteúdo do site é escrito em markdown. Markdown é uma linguagem de marcação que permite escrever conteúdo de forma simples e rápida. Se você não conhece markdown, não se preocupe, é muito fácil de aprender. Você pode encontrar um guia rápido sobre markdown [aqui](#markdown).

Os arquivos que devem ser editados, para alterar o conteúdo do site, estãolocalizados nas seguintes pastas:

- `public/content` - Contém as páginas, itens de portfólio, depoimentos, parcerias, serviços, posts e informações sobre as sócias.
- `public/images` - Contém as imagens do site.
- `public/locales` - Contém os arquivos de tradução do site.
- `public/videos` - Contém os vídeos do site.

Agora que você já sabe onde encontrar os arquivos que devem ser editados, vamos ver como editar cada tipo de conteúdo.

## Acessando o código do site

Para editar o site, você deve acessar o código do site. O código do site está localizado no [GitHub](https://github.com/palmaproducoes/site-palma-producoes). Basta logar no github, com a conta da Palma Produções, e acessar o repositório do site.

Existe duas maneiras de editar o site:

1. Editando os arquivos diretamente no GitHub
2. Editando os arquivos no github.dev, usando o Visual Studio Code
3. Clonando o repositório do site e editando os arquivos localmente, com qualquer editor de texto, de preferência o VSCode.

Vejamos cada uma delas:

### Editando os arquivos diretamente no GitHub

Para editar os arquivos diretamente no GitHub, basta:

- acessar o [repositório do site](https://github.com/palmaproducoes/site-palma-producoes)
- navegar nas pastas do projeto, até a pasta desejada
- clicar no arquivo que deseja editar
- e clicar no botão `Edit this file` (lápis), localizado no canto superior direito da tela.
- Após fazer as alterações, você deve clicar no botão `Commit changes` e, no diálogo que aparece em seguida, no botão `Commit Changes`. Se desejar, pode deixar uma descrição de qual foi a alteração.

Pronto! Você acabou de editar um arquivo do site. BAsta esperar que ele automaticamente será atualizado no site.

### Editando os arquivos no github.dev, usando o Visual Studio Code

Para editar os arquivos no github.dev, usando o Visual Studio Code, basta:

- acessar o [editor do site](https://github.dev/palmaproducoes/site-palma-producoes)
- navegar nas pastas do projeto, até a pasta desejada
- clicar no arquivo que deseja editar e fazer as alterações desejadas
- Selecionar, no canto esquerdo, a opção `Controle de Código-fonte`
- No painel à esquerda, selecionar as mudanças a serem feitas, clicando no botão +, ao lado do arquivo que deseja alterar (ou clicando no botão +, ao lado do nome da pasta, para adicionar todos os arquivos da pasta)
- Os arquivos escolhidos apareceção acima, na área "Staged Changes" (Mudanças em espera).
- Adicione uma mensagem de commit, no campo "Message" (Mensagem), acima
- Clique no botão "Commit" (Commitar)

Pronto. Você acabou de editar um arquivo do site. Basta aguardar que ele automaticamente será atualizado no site.

### Clonando o repositório do site e editando os arquivos localmente

Esse processo é mais complexo e não é recomendado para quem não tem experiência com git. Se você deseja clonar o repositório do site e editar os arquivos localmente, você deve:

- Instalar o [git](https://git-scm.com/)
- Clonar o repositório do site, usando o comando `git clone
- Editar os arquivos desejados, com qualquer editor de texto, de preferência o VSCode
- Fazer o commit das alterações, usando o comando `git commit`
- Fazer o push das alterações, usando o comando `git push`
- Pronto. Você acabou de editar um arquivo do site. Basta aguardar que ele automaticamente será atualizado no site.

## Páginas

- Localização: `public/content/pages`
- Idiomas: Português (pt) e Inglês (en)

Para adicionar ou editar páginas do site, você deve editar os arquivos localizados na pasta `public/content/pages`. Cada página do site é representada por um arquivo markdown. Por exemplo, a página `Quem Somos` é representada pelo arquivo `quem-somos.md`. O conteúdo de cada página é escrito em markdown.

Dentro da pasta `public/content/pages`, você encontrará 2 diretórios: `pt` e `en`. O diretório `pt` contém as páginas em português e o diretório `en` contém as páginas em inglês. Cada página do site deve ter uma versão em português e uma versão em inglês.

Para editar uma página, você deve acessar acessar o arquivo da página que deseja editar e fazer as alterações desejadas, usando algum dos métodos descritos [acima](#acessando-o-código-do-site).

### Estrutura de um arquivo de página

Uma página tem a seguinte estrutura:

```markdown
---
title: Título da página
description: Descrição da página
image:
  url: "/images/content/pages/nome-da-pagina.jpg"
  alt: "Palma Produções - Título da página"
  width: 1200
  height: 628
---

# Título da página

Texto da página
```

A primeira parte do arquivo é um cabeçalho, que contém as informações da página.

- `title` - Título da página
- `description` - Descrição da página. Deve ser uma frase curta, que descreve o conteúdo da página. O tamanho recomendado é entre 50 e 160 caracteres.
- `image` - Imagem padrão da página, ou seja, é a imagem que aparecxe no topo da página. Deve conter as seguintes informações:
  - `url` - URL da imagem, de preferência, deve ser uma imagem localizada na pasta `public/images/content/pages`
  - `alt` - Texto alternativo da imagem, ou seja, uma descrição da imagem, para pessoas com deficiência visual
  - `width` - Largura da imagem (tamanho recomendado: 1200px)
  - `height` - Altura da imagem (tamanho recomendado: 628px)

A segunda parte do arquivo é o conteúdo da página, escrito em markdown. Portanto, você pode usar markdown e os componentes disponíveis para escrever o conteúdo da página.

Para mais informações sobre como usar markdown, veja [aqui](#markdown).

Para mais informações sobre os componentes disponíveis, veja [aqui](#componentes).

### Como criar novas páginas

Para criar uma nova página, você deve criar um novo arquivo na pasta `public/content/pages/pt`.

O nome do arquivo deve ser o nome da página, em kebab case, seguido da extensão `.md`. Por exemplo, para criar a página `Contato`, você deve criar o arquivo `contato.md`.

> **Atenção**: O nome do arquivo deve ser em kebab case, ou seja, todas as letras minúsculas, separadas por hífen.
>
> Correto:
>
> - `quem-somos.md`
> - `contato.md`
> - `servicos.md`
>
> Incorreto:
>
> - `QuemSomos.md`
> - `Contato.md`
> - `Serviços.md`

Após criar o arquivo, você deve adicionar o cabeçalho do arquivo, com as informações da página, e o conteúdo da página, escrito em markdown.

Copie e cole o seguinte código no arquivo:

```markdown
---
title: Título da página
description: Descrição da página
image:
  url: "/images/content/pages/nome-da-pagina.jpg"
  alt: "Palma Produções - Título da página"
  width: 1200
  height: 628
---

# Título da página

Texto da página
```

Agora, basta editar as informações da página e o conteúdo da página, conforme necessário.

Após editar o arquivo em português, você deve criar um arquivo com o mesmo nome, na pasta `public/content/pages/en`, e adicionar a versão em inglês da página.

Para facilitar a tradução, você pode copiar o conteúdo do arquivo em português e colar no arquivo em inglês. Depois, basta traduzir o conteúdo da página.

Para auxiliar na tradução, você pode usar o [Chat GPT](https://chat.openai.com//), que é um modelo de linguagem de inteligência artificial, que pode ajudar a traduzir o conteúdo da página.

Para isso, use o seguinte prompt:

```text
Traduza o texto a seguir para o inglês:

Texto a ser traduzido
```



### Como adicionar páginas ao menu

## Posts

### Como editar posts

### Como criar novos posts

## Portfólio

### Como editar items do portfólio

### Como criar novos items do portfólio

## Depoimentos

### Como editar depoimentos

### Como criar novos depoimentos

## Parcerias

### Como editar parcerias

### Como criar novas parcerias

## Serviços

### Como editar serviços

## Sócias

### Como editar dados das sócias

## Markdown

### Como usar markdown

### Onde encontrar ajuda sobre markdown

## Mídia

### Como adicionar imagens

## Componentes

### Como usar componentes

### Lista de componentes
#### Documentação do Componente BotaoCompartilhar

##### Descrição

O componente `BotaoCompartilhar` é como um botão mágico que permite que você compartilhe a página atual que você está visualizando em nosso site com outras pessoas. Ele é representado por um ícone de compartilhamento que, quando clicado, abre opções para compartilhar a página em diferentes plataformas de mídia social ou por e-mail.

##### Como usar

Para usar o `BotaoCompartilhar`, você não precisa fornecer nenhuma informação. O botão já sabe qual é a página atual que você está visualizando e irá compartilhá-la quando for clicado.

##### Exemplo de uso

Aqui está um exemplo de como o `BotaoCompartilhar` pode ser usado em um arquivo MDX:

```mdx
<BotaoCompartilhar />
```

Neste exemplo, estamos criando um `BotaoCompartilhar` que, quando clicado, compartilha a página atual.
