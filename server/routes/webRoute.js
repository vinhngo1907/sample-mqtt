const router = require("express").Router();
const Post = require("../models/Post");

//MQTT
// const mqtt = require('mqtt');
// const client = mqtt.connect('mqtt://broker.mqttdashboard.com');
// client.on("connect", function() {
//     console.log("Client subscribed ");
//     client.subscribe("sensor/update");
// });

// client.on("message", function(topic, message) {
//     if (topic === "sensor/update") {
//         let newMess = JSON.parse(message.toString());
//         const newPost = new Post({
//             ...newMess
//         });
//         newPost.save(function(err, result) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('Data is saved to MongoDB', result)
//             }
//         });
//     }
//     client.end();
// })

router.get("/", (req, res) => res.send("<h1>Hello Coders</h1>"))
router.get("/api/posts", function(req, res) {
    Post.find()
        .then(posts => res.json({ msg: "Get success", posts }))
        .catch(err => {
            console.log(err);
            return res.status(500).json({ msg: err.message })
        })
})

router.delete("/api/posts/:id", (req, res) => {
    Post.findOneAndDelete({ _id: req.params.id }).then(result => {
        res.json({ msg: "Delete post successfully", result })
    }).catch(err => {
        console.log(err);
        return res.status(500).json({ msg: err.message })
    })
})
router.get("/control", (req, res) => {
    var rl = req.query.RL;
    var val = req.query.VAL;
    console.log("Check route", rl, val)
        //Tạo chuỗi dữ liệu
    var cmd_str = "RL" + rl + val;

    //Publish đến thiết bị
    client.publish('relay/command', cmd_str, function(err) {
        if (err) {
            // res.send("FAILED");
            console.log(err)
            return res.status(500).json({ msg: "FAILED" })
        } else {
            res.json({ success: true, msg: "OK" });
        }
    });
});

module.exports = router;