const express = require('express');
const bodyParser = require("body-parser"); 
const {createTodo, updateTodo} = require('./type');
const { todo } = require('./db');
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//create todo
app.post("/todo",async (req,res)=>{
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
app.get("/todo",async (req,res)=>{
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

    await todo.updateOne({
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
