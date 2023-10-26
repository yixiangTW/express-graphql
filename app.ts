const express = require('express');
const { graphqlHTTP } = require('express-graphql');
import schema from './schema'

const app = express();

// 创建一个 GraphQL 中间件
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true, // 在浏览器中使用 GraphiQL 工具进行查询
  })
);

app.listen(3000, () => {
  console.log('GraphQL server is running on http://localhost:3000/graphql');
});