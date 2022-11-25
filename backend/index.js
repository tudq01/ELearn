const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const testRoute = require("./routes/testRoutes");
const userRoute = require("./routes/userRoutes");
const resultRoute = require("./routes/resultRoutes");
const questionRoute = require("./routes/questionRoutes");
const commentRoute = require("./routes/commentRoutes");
const courseRoute = require("./routes/courseRoutes");
const flashcardRoute = require("./routes/flashcardRoutes")
const postsRoute = require("./routes/postsRoutes");
const Comment = require("./models/commentModel");
const connectDB = require("./config/db");
dotenv.config();
connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cookieParser());
app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
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

app.use(express.json());
app.use("/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/users", userRoute);
app.use("/api/refreshToken", userRoute);
app.use("/api/questions", questionRoute);
app.use("/api/flashcard", flashcardRoute);
app.use("/api/posts", postsRoute);
app.use("/api/results", resultRoute);

app.use("/api/comments", commentRoute);

app.use("/api/courses", courseRoute);

const http = require("http").createServer(app);
const io = require("socket.io")(http);

// Soketio
let users = [];

io.on("connection", (socket) => {
  console.log(socket.id + " connected.");

  socket.on("joinRoom", (testId) => {
    const user = { userId: socket.id, room: testId };

    const check = users.every((user) => user.userId !== socket.id);

    if (check) {
      users.push(user);
      socket.join(user.room);
    } else {
      users.map((user) => {
        if (user.userId === socket.id) {
          if (user.room !== testId) {
            socket.leave(user.room);
            socket.join(testId);
            user.room = testId;
          }
        }
      });
    }

    // console.log(users)
    // console.log(socket.adapter.rooms)
  });

  socket.on("createComment", async (msg) => {
    const { testId, commentText, username, createdAt, send,str,commentId } = msg;

    //commentid la testid cua room   
    //testid la id cua comment

    const newComment = new Comment({
      username,
      commentText,
      createdAt,
      testId: commentId,
    });

    if (send === "replyComment") {
      const {
        username,
        commentText,
        createdAt,
        testId: commentId,
      } = newComment;
      // console.log(newComment)
          console.log(commentId);
          console.log(str[0])
    const comment = await Comment.findById(commentId);
   console.log(comment);
    
      
      if (comment) {
    
        
       
        comment.childComments.push(newComment);
          await comment.save();  
     
        
        io.to(commentId).emit("sendReplyCommentToClient", comment);
      }
    } else {
      await newComment.save();
      io.to(newComment.commentId).emit("sendCommentToClient", newComment);
    }
  });

  socket.on("disconnect", () => {
    // console.log(socket.id + ' disconnected.')
    users = users.filter((user) => user.userId !== socket.id);
  });
});

http.listen("5000", () => {
  console.log("Server is running!");
});
