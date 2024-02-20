import { useState } from "react"


export function CreateTodo(){

    const [title, setTitle] = useState("");
    const [description , setDescription] = useState("");


    return <div>
        <input style={{
            padding:10,
            margin:10
        }} onChange={function (e){
            const value = e.target.value;
            setTitle(e.target.value);
        }} type="text" placeholder="title" /><br />

        <input style={{
            padding:10,
            margin:10
        }} onChange={(e)=>{
            const value = e.target.value;
            setDescription(e.target.value);
        }} type="text" placeholder="description" /><br />

        <button style={{
            padding:10,
            margin:10
        }} onClick={() => {
            fetch("http://localhost:3000/todo",{
                method : 'POST' ,
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    'Content-type' : 'application/json '
                }
            })
        } } >Add todo</button>
    </div>
}