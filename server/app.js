const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
var cors = require('cors')


const app = express();

app.use(cors());


const db = {
    teachers: [],
};

// var root = {
//     addTeacher: ({ id, name }) => {
//         db.teachers.push({ id, name })
//     },
// };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    // rootValue: root,
}));

app.listen(4000, () => {
    console.log("server connected");
})