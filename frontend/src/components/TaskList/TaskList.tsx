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
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        empty
        <hr className="uk-divider-vertical"></hr>
      </div>
    );
  }

  return (
    <div className="task-list-container">
      <strong>{title.toUpperCase()}</strong>
      <ul className="uk-list task-list">
        {tasks.map(task => (
          <li>
            <Task key={task.id} task={task} {...events} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
