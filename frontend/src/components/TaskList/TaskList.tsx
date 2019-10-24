import React from 'react';
import { Task as TaskItem } from '../../interfaces/Task.interface';
import Task from '../Task/Task';
import './TaskList.css';

interface TaskListProps {
  loading?: boolean;
  tasks: TaskItem[];
  title: string;
  onPinTask: () => void;
  onArchiveTask: () => void;
}

const TaskList: React.FC<TaskListProps> = ({
  loading,
  tasks,
  title,
  onPinTask,
  onArchiveTask
}) => {
  const events = {
    onPinTask,
    onArchiveTask
  };

  if (loading) {
    return (
      <div>
        <strong>{title.toUpperCase()}</strong>
        <ul className="uk-list task-list">
          <p>Loading</p>
        </ul>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div>
        <strong>{title.toUpperCase()}</strong>
        <ul className="uk-list task-list">
          <p>Empty</p>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <strong>{title.toUpperCase()}</strong>
      <ul className="uk-list task-list">
        {tasks.map(task => (
          <li key={task.id}>
            <Task key={task.id} task={task} {...events} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
