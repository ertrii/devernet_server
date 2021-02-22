import 'graphql-import-node'
import { Express } from 'express'
import { ApolloServer, IResolvers } from 'apollo-server-express'
import { Query, Mutation } from './resolvers'
import { DocumentNode } from 'graphql'
import main from './graphql/index.gql'

const resolvers: IResolvers = {
    Query,
    Mutation
}

const typeDefs: Array<DocumentNode> = [main]
for (const fieldname of ['user', 'brand']) {
    typeDefs.push(require(`./graphql/${fieldname}.gql`))
}

export default function apollo(app: Express): ApolloServer {
    const server = new ApolloServer({ typeDefs, resolvers })
    server.applyMiddleware({ app })
    return server
}
