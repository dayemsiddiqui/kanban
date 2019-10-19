import React from 'react';
import './Task.css';
import { Task as TaskItem } from '../../interfaces/Task.interface';

interface TaskProps {
  task: TaskItem;
  onArchiveTask: () => void;
  onPinTask: () => void;
}

const Task: React.FC<TaskProps> = ({
  task: { id, label, status },
  onArchiveTask,
  onPinTask
}) => {
  return (
    <div className="uk-card uk-card-default uk-card-hover uk-card-body task-item">
      <p className="task-label">{label}</p>
    </div>
  );
};

export default Task;
