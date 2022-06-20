const mqtt = require("mqtt");
var client = mqtt.connect("mqtt://broker.hivemq.com");
// const client = mqtt.connect(`mqtt://localhost:${PORT}`)

client.on("connect", function() {
    console.log("Client subscribed ");
    client.subscribe("publish/connected");
});

client.on("message", function(topic, message) {
    // console.log("Topic ", topic)
    switch (topic) {
        case 'publish/connected':
            return handleConnected(message)

        case 'publish/state':
            return handlePublishState(message);
        default:
            console.log('No handler for topic %s', topic)
            break;
    }

});

function handleConnected(message) {
    console.log(message.toString())
        // console.log('Publish connected status %s', message)
}

function handlePublishState(message) {
    console.log('Publish state update to %s', message)
}