import 'graphql-import-node'
import { Express } from 'express'
import { ApolloServer, IResolvers } from 'apollo-server-express'
import { Query, Mutation } from './resolvers'
import { DocumentNode } from 'graphql'

const resolvers: IResolvers = {
    Query,
    Mutation
}
const filename_graphql: string[] = [
    'index',
    'user',
    'brand',
    'product',
    'antenna',
    'service',
    'instalation',
    'client',
    'service_payment',
    'sale',
    'notice'
]

const typeDefs: Array<DocumentNode> = []
for (const fieldname of filename_graphql) {
    typeDefs.push(require(`./graphql/${fieldname}.gql`))
}

export default function apollo(app: Express): ApolloServer {
    const server = new ApolloServer({ typeDefs, resolvers })
    server.applyMiddleware({ app })
    return server
}
