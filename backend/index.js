const express = require('express');
const bodyParser = require("body-parser"); 
const {createTodo, updateTodo} = require('./type');
const { todo } = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(express.json());

//create todo
app.get("/post",async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg : "Please send valid inputs"
        });
        return;
    }

    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    });
    res.json({
        msg : "Todo created",
    })
})

//getting all the todo
app.post("/post",async (req,res)=>{
    const allTodo = await todo.find({});
    if(!allTodo){
        res.json({
            msg : "Error occcured in getting all todo"
        })
    }else{
        res.json({
            todos : allTodo
        })
        }
})

//update todo
app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
      completed: true  
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
})
