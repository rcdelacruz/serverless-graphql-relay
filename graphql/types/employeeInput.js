/* @flow */

import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const EmployeeInputType = new GraphQLObjectType({
  name: 'EmployeeInput',
  description: 'A company Employee',
  fields: () => ({
    email: { type: GraphQLString },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    designation: { type: GraphQLString },
    category: { type: GraphQLString },
  }),
});

export default EmployeeInputType;
