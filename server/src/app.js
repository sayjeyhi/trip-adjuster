const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

const app = express();

app.use(cors());

const db = {
  teachers: [],
};

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  // rootValue: root,
}));

app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.log('server connected');
});
