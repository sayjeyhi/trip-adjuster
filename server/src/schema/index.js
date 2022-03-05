const graphql = require('graphql');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
  NOTIFICATIONS, DESTINATIONS, DISCOUNTS, config, users,
} = require('../data');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLList,
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    token: { type: GraphQLString },
    loggedIn: { type: GraphQLBoolean },
  }),
});

const NotificationType = new GraphQLObjectType({
  name: 'notification',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    time: { type: GraphQLString },
    userId: { type: GraphQLID },
  }),
});

const DiscountType = new GraphQLObjectType({
  name: 'discount',
  fields: () => ({
    id: { type: GraphQLID },
    code: { type: GraphQLString },
    active: { type: GraphQLBoolean },
    discount: { type: GraphQLInt },
    validUntil: { type: GraphQLString },
    locationTitle: { type: GraphQLString },
  }),
});

const DestinationType = new GraphQLObjectType({
  name: 'destination',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    star: { type: GraphQLFloat },
    price: { type: GraphQLFloat },
    destination: { type: GraphQLFloat },
    city: { type: GraphQLString },
    country: { type: GraphQLString },
  }),
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    login: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        /**
         * Check account and verify password
         */
        const currentAdminUser = users.findIndex((user) => user.username === args.username);
        if (
          currentAdminUser === -1
          || !bcrypt.compareSync(args.password, users[currentAdminUser].passwordHash)
        ) {
          return {
            loggedIn: false,
            token: '',
          };
        }

        const token = jwt.sign(
          JSON.parse(JSON.stringify(users[currentAdminUser])),
          config.SECRET,
          { expiresIn: '12h' },
        );

        return {
          ...users[currentAdminUser],
          loggedIn: true,
          token,
        };
      },
    },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(users, { id: args.id });
      },
    },
    destination: {
      type: DestinationType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(DESTINATIONS, { id: args.id });
      },
    },
    discounts: {
      type: new GraphQLList(DiscountType),
      args: {
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt },
        sort: { type: GraphQLString },
        order: { type: GraphQLString },
      },
      resolve(parent, args) {
        return _.slice(DISCOUNTS, [args.offset], [args.limit])
      },
    },
    destinations: {
      type: new GraphQLList(DestinationType),
      resolve() {
        return DESTINATIONS;
      },
    },
    notifications: {
      type: new GraphQLList(NotificationType),
      resolve() {
        return NOTIFICATIONS;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
