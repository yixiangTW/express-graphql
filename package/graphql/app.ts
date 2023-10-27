import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema'

import context from './context'
const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

// 创建一个 GraphQL 中间件
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true, // 在浏览器中使用 GraphiQL 工具进行查询
    context: context
  })
);

app.listen(3000, () => {
  console.log('GraphQL server is running on http://localhost:3000/graphql');
});