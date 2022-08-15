import React, { useState } from "react";
import TaskItem from "./TaskItem";
import background from "../assets/img/lsw4.jpg";

function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState([]);
    // const [tasks, setTasks] = useState(["Learn HTML", "Learn CSS"]);
    // const [input, setInput] = useState("");

    const handleSubmit = (e) => { 
        e.preventDefault();
        // console.log("Form Submitted")
        if (input === "") return;
        setTasks([input, ...tasks]);
        setInput("");
    };

    const handleDelet = idx => {
        const newTask = tasks.filter( task => task !== idx);
        setTasks(newTask)
    };
   

    return (
    <div className="relative h-screen w-full bg-slate-800">
    <img 
    src={background} alt="./"/>
    <div className="h-screen bg-blue-600  flex justify-center items-center">
        <div className="max-w-xl w-full max-h-96 bg-white p-8 rounded-lg z-10">

            <form 
            onSubmit={handleSubmit}
            className="space-x-10 flex [w-20rem] mb-5">

                <input type="text" 
                className="border-2 border-green-400 p-2 rounded-md outline-none w-10/12"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                />

                <button 
                type="submit"
                className="bg-blue-600 text-white-lg py-2 px-7 round-md"
                disabled={input === ""}
                >
                    Add
                    </button>
                  </form>
           
           <div className="space-y-2 overflow-y-auto h-56">
            {
                tasks.map((task) => (
                    <TaskItem task={task} handleDelet={handleDelet} />
                ))
            }
                 
            </div>
          </div>
        </div>
    </div>
    );
}

export default TaskManager;