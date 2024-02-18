const zod = require('zod')

const createTodo = zod.object({
    title : zod.string(),
    desacription : zod.string(),
});
const updateTodo = zod.object({
    id : zod.String
})

module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}