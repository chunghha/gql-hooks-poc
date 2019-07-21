This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pjoject Setup / Package Installation
```bash
$ yarn create react-app gql-hooks-poc --typescript
$ cd gql-hooks-poc
$ yarn add apollo-boost react-apollo react-apollo-hooks graphql-tag graphql
$ yarn add -D @graphql-codegen/cli
```
## codegen.yml --> generated/graphql.tsx
```bash
$ npx graphql-codegen init
(write query.ts to be used with components)
$ yarn codegen
```
Types in the grapqh.tsx generated are from the schema of GraphQL API used. And, the hooks like  **useByNameQuery** are based from query.ts written for the components so run the codegen script whenever the query changed in the components.

Purpose of this reposity is just to study GraphQL hooks explained [here](https://github.com/treyhuffine/graphql-react-typescript-spacex). And, the country GraphQL API in [this repo](https://github.com/chunghha/gql-poc) is used as it runs at the port 4000 of a local Docker instance.
