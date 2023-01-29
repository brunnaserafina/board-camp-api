<h1 align="left">Board Camp API ♟️</h1>

###

<p align="left">Esta é uma API (Application Programming Interface) de uma locadora de jogos de tabuleiro. É uma ótima oportunidade para pessoas que querem jogar com seus amigos mas acham muito caro comprá-los.</p>


###

### ⚙️ Funcionalidades

- Listar categorias dos jogos
- Inserir categoria de jogo
- Listar todos os jogos
- Inserir um jogo
- Listar todos clientes
- Inserir um cliente no banco
- Atualizar um cliente no banco
- Listar todos os aluguéis
- Inserir um aluguel
- Apagar aluguel

</br>

### 📄 Documentação da API

##### LISTAR CATEGORIAS:

```http
  GET /categories
```

--
##### INSERIR CATEGORIA:

```http
  POST /categories
```
- Body:

| Parâmetro  | Tipo     | Descrição           |
| :--------- | :------- | :-------------------|
| `name`     | `string` | `Nome da categoria` |

--

##### LISTAR JOGOS:

```http
  GET /games
```
--

##### INSERIR JOGO:

```http
  POST /games
```

- Body:

| Parâmetro     | Tipo     | Descrição                        |
| :------------ | :------- | :--------------------------------|
| `name`        | `string` | `Nome do jogo`                   |
| `image`       | `string` | `Endereço da imagem do jogo`     |
| `stockTotal`  | `number` | `Quantidade de jogos no estoque` |
| `categoryId`  | `number` | `ID da categoria existente`      |
| `pricePerDay` | `number` | `Preço pelo dia locado`          |

--

##### LISTAR CLIENTES:

```http
  GET /customers
```

--

##### INSERIR UM CLIENTE:

```http
  POST /customers
```

- Body:

| Parâmetro     | Tipo     | Descrição                       |
| :------------ | :------- | :-------------------------------|
| `name`        | `string` | `Nome do cliente`               |
| `phone`       | `string` | `Telefone do cliente`           |
| `cpf`         | `string` | `CPF do cliente`                |
| `birthday`    | `string` | `Data de nascimento do cliente` |

--

##### ATUALIZAR UM CLIENTE:

```http
  PUT /customers/:id
```

- Body:

| Parâmetro     | Tipo     | Descrição                       |
| :------------ | :------- | :-------------------------------|
| `name`        | `string` | `Nome do cliente`               |
| `phone`       | `string` | `Telefone do cliente`           |
| `cpf`         | `string` | `CPF do cliente`                |
| `birthday`    | `string` | `Data de nascimento do cliente` |

--

##### LISTAR ALUGUÉIS:

```http
  GET /rentals
```

--

##### INSERIR UM ALUGUÉL:

```http
  PUT /customers/:id
```

- Body:

| Parâmetro     | Tipo     | Descrição                     |
| :------------ | :------- | :-----------------------------|
| `customerId`  | `number` | `ID do cliente`               |
| `gameId`      | `number` | `ID do jogo`                  |
| `daysRented`  | `number` | `Quantidade de dias alugados` |

--

##### APAGAR UM ALUGUÉL:

```http
  DELETE /rentals/${ID_DO_ALUGUEL_QUE_SERÁ_DELETADO}
```

--

</br>

### ▶️ Rodando a aplicação

1. Crie ou selecione uma pasta com o nome de sua preferência
2. Clone este repositório na pasta criada/selecionada:

```bash
  $ git clone https://github.com/brunnaserafina/board-camp-api.git
```
3. Instale suas depêndencias:

```bash
  $ npm i
```
4. Inicie a aplicação na raíz do projeto:

```bash
  $ npx nodemon src/server.js
```

</br>

### 🛠️ Tecnologias utilizadas

 <img align="left" alt="node" height="30px" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
 <img align="left" alt="postgres" height="30px" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
 <img align="left" alt="express" height="30px" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
 <img align="left" alt="cors" height="30px" src="https://img.shields.io/badge/cors-%20-red" />
 <img align="left" alt="dayjs" height="30px" src="https://img.shields.io/badge/day-JS%20-orange" />
 


</br>
</br>

### 🙇🏻‍♀️ Autora

- Feito com ❤️ por [@brunnaserafina](https://www.github.com/brunnaserafina)

