# Trabalho React Native - Fake Store API

Aplicativo mobile desenvolvido em React Native com Expo para a avaliação da disciplina de React Native.

O aplicativo utiliza a **Fake Store API** para autenticação, consulta de produtos, categorias e detalhes dos produtos.

## Integrantes do grupo

| Integrante | RA |
|---|---:|
| Geraldo Konig Scheurer | 1126596 |
| Pedro Henrique Fanton | 1133577 |
| Tainã Metz | 1134314 |

## Tecnologias utilizadas

- React Native
- Expo SDK 57
- React 19
- React Navigation
- Axios
- Fake Store API

## Funcionalidades

- Login utilizando usuários disponibilizados pela Fake Store API.
- Listagem de produtos.
- Filtro de produtos por categoria.
- Visualização dos detalhes de um produto.
- Logout.
- Tela com informações dos integrantes do grupo.
- Formatação dos preços para o padrão brasileiro.

## API utilizada

A aplicação utiliza a Fake Store API:

https://fakestoreapi.com/

A URL base configurada no projeto está em `src/api/api.js`:

```text
https://fakestoreapi.com
```

### Principais endpoints utilizados

- `GET /users` — consulta os usuários disponíveis para validar o login.
- `POST /auth/login` — realiza a autenticação.
- `GET /products` — consulta todos os produtos.
- `GET /products/categories` — consulta as categorias.
- `GET /products/category/{categoria}` — consulta produtos de uma categoria.
- `GET /products/{id}` — consulta os detalhes de um produto.

## Pré-requisitos

Antes de executar o projeto, instale:

1. **Node.js LTS**
2. **Expo Go** no celular Android ou iOS, caso queira executar no dispositivo físico.
3. Git, caso queira clonar ou enviar o projeto para o GitHub.

O projeto pode ser executado também no navegador ou em um emulador compatível com o ambiente Expo.

## Como executar o projeto com Expo

### 1. Baixar/clonar o projeto

Clone o repositório:

```bash
git clone https://github.com/geraldokonig/TrabalhoReactAPI
```

Entre na pasta do projeto:

```bash
cd TrabalhoReactAPI
```

### 2. Instalar as dependências

Execute:

```bash
npm install
```

### 3. Iniciar o Expo

Execute:

```bash
npx expo start
```

O Expo exibirá um QR Code no terminal.

### 4. Executar no celular

Instale o **Expo Go** no celular e escaneie o QR Code exibido pelo Expo.

O computador e o celular devem estar, preferencialmente, conectados à mesma rede Wi-Fi.

Caso o celular não consiga se conectar pela rede local, tente:

```bash
npx expo start --tunnel
```

### 5. Outras formas de execução

Depois de iniciar o Expo:

- Pressione `W` para abrir a aplicação no navegador.
- Pressione `A` para abrir no Android, caso exista um emulador Android configurado.
- Pressione `I` para abrir no iOS em um ambiente compatível.

## Como verificar os usuários disponíveis para login

A aplicação consulta o endpoint:

```text
https://fakestoreapi.com/users
```

Esse endpoint retorna a lista de usuários disponibilizados pela Fake Store API.

Para visualizar os usuários disponíveis:

1. Abra no navegador:
   https://fakestoreapi.com/users
2. Localize os campos `username` e `password`.
3. Utilize esses dados na tela de Login do aplicativo.

### Usuário para teste

O próprio aplicativo já apresenta uma credencial de teste na tela de login:

```text
Usuário: johnd
Senha: m38rmF$
```

Esses dados correspondem a um usuário disponibilizado pela Fake Store API.

> Observação: a Fake Store API é uma API de demonstração/testes. As credenciais disponibilizadas por ela não devem ser tratadas como credenciais reais ou dados privados.

## Fluxo do login

Ao clicar em **ENTRAR**, o aplicativo:

1. Verifica se usuário e senha foram preenchidos.
2. Faz uma requisição `GET /users`.
3. Procura um usuário cujo `username` e `password` correspondam aos dados informados.
4. Se o usuário existir, faz uma requisição `POST /auth/login`.
5. Se a API retornar um token, o usuário é direcionado para a tela de produtos.
6. Caso contrário, uma mensagem de erro é exibida.

A implementação desse fluxo está em:

```text
src/screens/Login.js
```

## Estrutura principal do projeto

```text
TrabalhoReactAPI/
├── assets/
├── src/
│   ├── api/
│   │   └── api.js
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   └── screens/
│       ├── Login.js
│       ├── Home.js
│       ├── ProductDetails.js
│       └── GroupInfo.js
├── App.js
├── app.json
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Navegação do aplicativo

O aplicativo possui as seguintes telas:

### Login

Tela inicial para autenticação do usuário.

### Produtos

Após o login, apresenta os produtos da Fake Store API e permite filtrar por categoria.

### Detalhes do Produto

Ao selecionar um produto, são exibidos:

- imagem;
- categoria;
- nome;
- preço;
- descrição.

### Informações do Grupo

Apresenta os nomes e RAs dos integrantes do grupo.

## Entrega

O código-fonte deste projeto deve estar disponível em um repositório público no GitHub.

De acordo com a atividade, **apenas um integrante do grupo precisa enviar o link do repositório no AVA**.

## Referências

- Expo: https://expo.dev/
- Documentação do Expo: https://docs.expo.dev/
- Fake Store API: https://fakestoreapi.com/
- GitHub: https://github.com/
