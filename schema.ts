const  { makeSchema } = require('nexus')

import schemaTypes from "./schemaTypes"

const schema = makeSchema({
  types: schemaTypes,
  outputs: {
    schema: __dirname + '/schema.graphql', // 输出 GraphQL Schema 文件
    typegen: __dirname + '/nexus.ts', // 输出 TypeScript 类型定义
  },
})

export default schema