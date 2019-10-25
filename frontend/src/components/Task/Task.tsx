import React, { useState } from 'react';
import './Task.css';
import { Task as TaskItem } from '../../interfaces/Task.interface';

interface TaskProps {
  task: TaskItem;
  onArchiveTask: () => void;
  onPinTask: () => void;
  onDeleteTask: (task: TaskItem) => void;
}

const Task: React.FC<TaskProps> = ({
  task,
  onArchiveTask,
  onPinTask,
  onDeleteTask
}) => {
  const [displayIcon, setDisplayIcon] = useState(false);
  return (
    <div
      className="uk-card uk-card-default uk-card-hover uk-card-body task-item"
      onMouseEnter={() => setDisplayIcon(true)}
      onMouseLeave={() => setDisplayIcon(false)}
    >
      <p className="task-label">
        {task.label}
        {displayIcon && (
          <span className="task-icons">
            <span
              className="uk-margin-small-right"
              uk-icon="close"
              onClick={() => onDeleteTask(task)}
            ></span>
          </span>
        )}
      </p>
    </div>
  );
};

export default Task;
