const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT

const routes = require('./routes');

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


//Homepage
// app.use('/', routes.viewRoutes);


app.get('/', (req, res)=>{
    res.send('<h1>Homepage</h1>');
});

app.use('/api/v1/auth', routes.auth);
app.use('/api/v1/users', routes.users);
app.use('/api/v1/post', routes.post);

app.listen(PORT, () =>
    console.log(`Server connected at http://localhost:${PORT}`)
);
