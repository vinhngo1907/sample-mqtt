const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");
// const client = mqtt.connect(`mqtt://localhost:${PORT}`)

client.on("connect", function() {
    console.log("Client subscribed ");
    client.subscribe("publish/connected");
    client.subscribe("publis/state");
    client.subscribe("sensor/update");
    client.subscribe("reply/command");
});

client.on("message", function(topic, message) {
    switch (topic) {
        case 'publish/connected':
            console.log('Publish connected status %s', message)
            break;
        case 'publish/state':
            console.log('Publish state update to %s', message)
            break;
        case 'relay/command':
            console.log('Reply command %s', message);
            break;
        case 'sensor/update':
            console.log('Sensor connected update %s', JSON.parse(message.toString()))
            break;
        default:
            console.log('No handler for topic %s', topic)
            break;
    }

});