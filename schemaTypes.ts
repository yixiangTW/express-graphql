import { objectType, queryType, mutationType } from 'nexus'
import data from './data'

const CurrentProject = objectType({
  name: 'CurrentProject',
  definition(t: any) {
    t.string('message'), {
      resolve: () => data.currentProject.message
    },
    t.int('id', {
      resolve: () => data.currentProject.id
    })
  }
})

const QueryProject = queryType({
  definition(t: any) {
    t.field('currentProject', {
      type: 'CurrentProject',
      resolve: () => data.currentProject
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
      resolve: (_: any, args: any) => {
        if(args.message) {
          data.currentProject.message = args.message
        }
        if(args.id) {
          data.currentProject.id = args.id
        }
        return data.currentProject
      }
    })
  }
})

export default [UpdateProject, QueryProject, CurrentProject]