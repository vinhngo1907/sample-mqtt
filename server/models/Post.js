const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
        type: String,
        enum: ['TO DO', 'DOING', 'DONE']
    }
}, { timestamps: true });

module.exports = mongoose.model("post", PostSchema)