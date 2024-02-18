const mongoose = require('mongoose');
const { boolean } = require('zod');

mongoose.connect('mongodb+srv://admin:wm99Vt0MKblWycBF@cluster0.yktrtu5.mongodb.net/to-do-App')

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}