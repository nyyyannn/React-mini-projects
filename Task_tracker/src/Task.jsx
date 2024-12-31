import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const taskName = useRef(null);
  const taskDesc = useRef(null);
  const taskDeadline = useRef(null);

  useEffect(() => {
    const filtered = tasks.filter((task) => {
      if (filter === "All") {
        return true;
      }
      return task.status === filter;
    });
    setFilteredTasks(filtered);
  }, [tasks, filter]);


  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      id: nanoid(),
      name: taskName.current.value,
      desc: taskDesc.current.value,
      deadline: taskDeadline.current.value,
      status: "Pending",
    };
    setTasks((prev) => [...prev, newTask]);
    taskName.current.value="";
    taskDesc.current.value="";
    taskDeadline.current.value="";
  }

  function handleCompletion(id) {
    setTasks((prev) =>
      prev.map((task) =>
      {
        if(task.id===id)
        {
            if(task.status==="Completed")
            {
                return { ...task, status:"Pending" }
            }
            else if(task.status==="Pending")
            {
                return {...task, status:"Completed"}
            }
        }
        else
        {
            return task;
        }
        
      }
      )
    );
  }


  return (
    <div className="task-container">
      <h1 className="task-header">Tasks Tracker</h1>
      {tasks.length > 0 && (
        <div className="task-list">
          <select
            className="filter-select"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          {filteredTasks.map((task) => (
            <div key={task.id} className="task-item">
              <h3 className="task-name">{task.name}</h3>
              <p className="task-desc">{task.desc}</p>
              <p className="task-deadline">Deadline: {task.deadline}</p>
              <p className="task-status">Status: {task.status}</p>
              <button
                className="complete-button"
                onClick={() => handleCompletion(task.id)}
              >
                {task.status==="Completed"?"Mark as pending":"Mark as Completed"}
              </button>
            </div>
          ))}
        </div>
      )}

      <form className="task-form" onSubmit={handleSubmit}>
        <label htmlFor="taskName" className="task-label">
          Task Name:
          <input
            type="text"
            name="taskName"
            className="task-input"
            placeholder="Enter task name"
            ref={taskName}
            required
          />
        </label>
        <br />
        <label htmlFor="taskDesc" className="task-label">
          Task Description:
          <input
            className="task-textarea"
            placeholder="Enter task description"
            name="taskDesc"
            ref={taskDesc}
            required
          />
        </label>
        <br />
        <label htmlFor="taskDeadline" className="task-label">
          Task Deadline:
          <input
            type="date"
            name="taskDeadline"
            className="task-input"
            ref={taskDeadline}
            required
          />
        </label>
        <br />
        <button className="add-task-button">Add Task</button>
      </form>
    </div>
  );
}

export default Task;
