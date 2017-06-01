import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import UserType from './user';
import EmployeeType from './employee';
import EmployeeInputType from './employeeInput';
import { nodeField } from '../node';
import { getEmployees } from '../resolvers/employee';
import db from '../database';

/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    // Add your own root fields here
    viewer: {
      type: UserType,
      resolve: (_, _args, context) => db.getViewer({}, context),
    },
    allEmployees: {
      type: new GraphQLList(EmployeeType),
      description: 'Query Employees',
      _args: {
        filter: { type: EmployeeInputType },
        first: { type: GraphQLInt },
        offset: { type: GraphQLInt },
      },
      resolve: (_, _args) => getEmployees(_args),
    },
  }),
});

export default QueryType;
