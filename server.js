const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT

// --------------------------------- Middleware --------------------------------- //
const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// BodyParser
app.use(bodyParser.json());

// ----------------------------------- Routes ----------------------------------- //