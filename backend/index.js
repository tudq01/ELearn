const cookieSession = require("cookie-session");
const cookieParser = require('cookie-parser');
const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const testRoute = require("./routes/testRoutes")
const userRoute = require('./routes/userRoutes');
const resultRoute = require('./routes/resultRoutes');
const questionRoute = require('./routes/questionRoutes');
const commentRoute = require("./routes/commentRoutes");
dotenv.config();
connectDB();
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cookieParser());
app.use(function (req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());
/*
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);  */
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json())
app.use("/auth", authRoute);
app.use('/api/test', testRoute);
app.use('/api/users', userRoute);
app.use('/api/questions',questionRoute)
app.use('/api/comments',commentRoute)
app.use('/api/results', resultRoute)
app.use('/api/refreshToken',userRoute)











app.listen("5000", () => {
  console.log("Server is running!");
});
