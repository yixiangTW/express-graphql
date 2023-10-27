import { objectType, queryType, mutationType } from 'nexus'

const CurrentProject = objectType({
  name: 'CurrentProject',
  definition(t: any) {
    t.string('message'), {
      resolve: (source, args, ctx) => ctx.currentProject.message
    },
    t.int('id', {
      resolve: (source, args, ctx) => ctx.currentProject.id
    })
  }
})

const QueryProject = queryType({
  definition(t: any) {
    t.field('currentProject', {
      type: 'CurrentProject',
      resolve: (source, args, ctx) => ctx.currentProject
    })
  }
})

const UpdateProject = mutationType({
  definition(t: any) {
    t.field('updateProject', {
      type: 'CurrentProject',
      args: {
        message: 'String',
        id: 'Int'
      },
      resolve: (source, args, ctx) => {
        const { message, id} = args;
        return ctx.currentProject.update(id, message)
      }
    })
  }
})

export default [UpdateProject, QueryProject, CurrentProject]