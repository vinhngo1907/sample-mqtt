// MQTT publisher
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker.hivemq.com')
    // const PORT = process.env.PORT
    // const client = mqtt.connect(`mqtt://localhost:${PORT}`)

client.on("connect", function() {
    // var random = Math.random();

    // client.publish("publish/connected", "Random value: " + random.toString());
    // client.publish("publish/connected", "Random value: " + "Hello world");

    setInterval(function() {

        var random = Math.random() * 50;
        if (random < 30) {

            // var newMess = { title: 'publish/connected', random }
            client.publish("publish/connected", random.toString(), () => {
                console.log("Value sent: " + random)
            });
        }

    }), 50000;

});

// added to end of garage.js
function sendStateUpdate(state = 'new state') {
    console.log('sending state %s', state)
    client.publish('publish/state', state)
}