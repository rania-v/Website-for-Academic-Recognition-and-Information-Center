const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());


const posts = require('./server/routes/api/posts');

app.use('/api/posts', posts);

const userRoutes = require("./server/routes/api/user");
app.use('/api/user', userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));