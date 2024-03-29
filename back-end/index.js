const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());


const userRoutes = require("./server/routes/api/user");
app.use('/api/user', userRoutes);

const applicationsRoutes = require("./server/routes/api/applications");
app.use('/api/applications', applicationsRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));