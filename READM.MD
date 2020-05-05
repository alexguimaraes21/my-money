# Configurando o projeto para ser executado na máquina de desenvolvimento

### Dependências

- Node.js >= 10
- npm >= 5

### Instalando Dependências na máquina de desenvolvimento

#### Instalando o Node.js
Seguir o procedimento indicado no próprio Site do Node JS

[Node JS](https://nodejs.org/en/download/package-manager/)

Depois de instalado, basta digitar no Shell o comando:

```shell script
$ node -v
v13.14.0
```

#### Instalando o NPM
Quando o Node JS é instalado pelos pacotes disponibilizados pelos repositórios deles, o NPM já vem instalado como 
dependencia.

Depois de instalado, basta executar o comando abaixo para saber a versão instalada:

```shell script
$ npm -v
6.14.4
```

### Baixando as Dependências da Aplicação
Após baixar a aplicação do repositório do GIT, precisaremos baixar as dependências para podermos assim, desenvolver.

Para baixar as dependências, utilizaremos o comando **npm** na raiz da aplicação como no exemplo abaixo.

```shell script
$ npm i -E
```

O comando acima, demorará alguns segundos para baixar todas as aplicações e salvá-las na pasta **node_modules** da 
aplicação.

#### Executando a aplicação no ambiente de Desenvolvimento
Depois de baixarmos as dependências com o comando acima, iniciaremos a aplicação e assim, o desenvolvimento.
Para iniciarmos a aplicação, no console texto executaremos o seguinte comando:

```shell script
$ npm run dev
```

O Comando acima, irá compilar a aplicação e disponibilizá-la na porta 8080. Caso seja necessário alterar a porta,
visualize o passo: ***Alterando a porta padrão de execução da Aplicação***.

#### Alterando a porta padrão de execução da Aplicação
Para alterar a porta padrão da aplicação, precisaremos editar o arquivo **webpack.config.js** que encontra-se na raiz
da aplicação.

Para a aplicação para ser executada na porta 5000 por exemplo, alteraremos as linhas abaixo:
```javascript
devServer: {
    port: 8080,
    contentBase: './public',
}
```

Para o conteúdo abaixo:
```javascript
devServer: {
    port: 5000,
    contentBase: './public',
}
```


