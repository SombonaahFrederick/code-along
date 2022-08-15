import React from "react";
import {TrashIcon} from "@heroicons/react/outline";

function TaskItem( { task, handleDelet}) {
   return (
           <div className="flex items-center bg-teal-100 p-2 border-2 border-gray-300 rounded-md">
           <div className="flex-1">{task}</div>
           <button className="gb-blue-900 p-2 rounded-md"
            onClick={() => handleDelet(task)}
            >
               <TrashIcon height={24}  color="red" />
           </button>
       </div>
   );
   }

   export default TaskItem;