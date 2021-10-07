# SOLID - Node API

API implementada utilizando o TypeScript, buscando implementar ao máximo todas as sugestões do SOLID

### O que é o S.O.L.I.D?

O S.O.L.I.D é um acrônimo que representa cinco princípios da programação orientada a objetos e design de código teorizados pelo nosso querido Uncle Bob (Robert C. Martin) por volta do ano 2000. O autor Michael Feathers foi responsável pela criação do acrônimo:

[S]ingle Responsibility Principle (Princípio da Responsabilidade Única)

[O]pen/Closed Principle (Princípio do Aberto/Fechado)

[L]iskov Substitution Principle (Princípio da Substituição de Liskov)

[I]nterface Segregation Principle (Princípio da Segregação de Interfaces)

[D]ependency Inversion Principle (Princípio da Inversão de Dependências)

[Referência](https://mari-azevedo.medium.com/princ%C3%ADpios-s-o-l-i-d-o-que-s%C3%A3o-e-porque-projetos-devem-utiliz%C3%A1-los-bf496b82b299)

## Instalação

Para rodar o projeto inicialmente foram usados os seguinte comandos.

```bash
npm init -y
npx tsc --init
```

## Pacotes instalados

### Dependências de desenvolvimento

```bash
npm i express typescript ts-node-dev @types/cors -D
```

### Dependências de produçao

```bash
npm i uuidv4 cors
```

## Para rodar

Scrip configurado para o start

```bash
tsnd --transpile-only --respawn --ignore-watch node_modules src/server.ts
```

Use:

```bash
npm start
```

## Para Transpilar o código TS para JS

Scrip configurado para o compilar o código em TypeScrip para JavaScript

```bash
npx tsc
```

Use:

```bash
npm run transpile
```

## Rotas da API

### Rota GET

```
/
```

Retorna todos os usuários cadastrados no servidor

### Rota POST

Use:

```bash
/user
```

Espera receber um JSON conforme o modelo

```json
{
  "name": "Nome do usuário",
  "email": "email@email.com",
  "password": "pass.123.pass"
}
```
