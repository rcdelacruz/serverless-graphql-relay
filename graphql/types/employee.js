/* @flow */

import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import {
  globalIdField,
} from 'graphql-relay';
import * as graphqlCustom from 'graphql-custom-types';
import { nodeInterface } from '../node';

const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  description: 'A company Employee',
  fields: () => ({
    id: globalIdField('Employee'),
    email: { type: GraphQLString },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    designation: { type: GraphQLString },
    category: { type: GraphQLString },
    created_at: { type: graphqlCustom.GraphQLDateTime },
    update_at: { type: graphqlCustom.GraphQLDateTime },

  }),
  interfaces: [nodeInterface],
});

export default EmployeeType;
