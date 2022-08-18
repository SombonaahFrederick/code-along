// import React, { useState, useEffect } from "react";

// import { v4 as uuid } from "uuid";

// import TaskItem from "./TaskItem";
// import background from "../assets/img/lsw4.jpg";

// function TaskManager() {
//   const [tasks, setTasks] = useState(() => {
//     const tasks = localStorage.getItem("tasks");
//     if (!tasks) return [];
//     return JSON.parse(tasks);
//   });
//   const [input, setInput] = useState([]);
//   // const [tasks, setTasks] = useState(["Learn HTML", "Learn CSS"]);
//   // const [input, setInput] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log("Form Submitted")
//     if (input === "") return;

//     const newTask = {
//       id: uuid(),
//       text: input,
//       completed: true,
//     };

//     setTasks([newTask, ...tasks]);
//     setInput("");
//   };

//   const handleDelete = (id) => {
//     const newTasks = tasks.filter((task) => task.id !== id);
//     setTasks(newTasks);
//   };

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   return (
//     <div className="relative h-screen w-full bg-slate-800">
//       <img src={background} alt="./" />
//       <div className="h-screen bg-blue-600  flex justify-center items-center">
//         <div className="max-w-xl w-full max-h-96 bg-white p-8 rounded-lg z-10">
//           <form
//             onSubmit={handleSubmit}
//             className="space-x-10 flex [w-20rem] mb-5"
//           >
//             <input
//               type="text"
//               className="border-2 border-green-400 p-2 rounded-md outline-none w-10/12"
//               onChange={(e) => setInput(e.target.value)}
//               value={input}
//             />

//             <button
//               type="submit"
//               className="bg-blue-600 text-white-lg py-2 px-7 round-md"
//               disabled={input === ""}
//             >
//               Add
//             </button>
//           </form>

//           <div className="space-y-2 overflow-y-auto h-56">
//             {tasks.map((task) => (
//               <TaskItem key={task.id} task={task} handleDelete={handleDelete} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TaskManager;
