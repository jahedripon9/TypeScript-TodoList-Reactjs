import { Box } from "@mui/material";
import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <Box className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </Box>
  );
};

export default TodoTask;