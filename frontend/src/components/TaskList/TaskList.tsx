import React from 'react';
import { Task as TaskItem } from '../../interfaces/Task.interface';
import Task from '../Task/Task';
import { List } from 'semantic-ui-react';
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
    <>
      <h3>{title}</h3>
      <ul className="uk-list task-list">
        {tasks.map(task => (
          <li>
            <Task key={task.id} task={task} {...events} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
