Devernet Server
=========

## Install 

Create `.env` file and copy of `env.template` and write his values.

```
npm install
npm run dev
```

## EndPoints

```gql
type Query {
    user(id: ID!): User
    users: [User]
    brand(id: ID!): Brand
    brands: [Brand]
}

type Mutation {
    create_user(into_user: IntoUser!): User
    update_user(id: ID!, into_user: IntoUser!): User
    delete_user(id: ID!): DataDeleted

    create_brand(into_brand: IntoBrand!): Brand
    update_brand(id: ID!, into_brand: IntoBrand!): Brand
    delete_brand(id: ID!): DataDeleted
}
```

## Sources

* [Typescript: Graphql fix import modules](https://github.com/apollographql/graphql-tag/issues/59)
#### GraphQL for server:
* [GraphQL Import Node](https://github.com/ardatan/graphql-import-node)

#### GraphQL for client:
* [GraphQL Loader](https://apollo-angular.com/docs/recipes/webpack/)
* [How to resolve import for the .graphql file with typescript and webpack - DEV Community](https://dev.to/open-graphql/how-to-resolve-import-for-the-graphql-file-with-typescript-and-webpack-35lf)
