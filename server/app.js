require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const mqtt = require("mqtt");
const webRoute = require("./routes/webRoute");

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

// connectDB();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

// socket - mqtt
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const client = mqtt.connect('mqtt://broker.mqttdashboard.com');

io.on("connection", (socket) => {
    socket.on("joinSocket", (data) => {
        socket.join(data.topic);
        console.log(`User with ID: ${socket.id} joined with topic: ${data.topic}`);
        client.subscribe(data.topic);
    })

    client.addListener('message', function(topic, payload) {
        console.log(payload.toString())
        io.sockets.in(topic).emit('mqttData', JSON.parse(payload.toString()));
    });

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    })
})

//Routes
app.use("/", webRoute)

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log(`Server connectesd on port ${PORT}`))