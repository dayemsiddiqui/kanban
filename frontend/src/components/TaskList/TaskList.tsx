import React from 'react';
import { Task as TaskItem } from '../../interfaces/Task.interface';
import Task from '../Task/Task';
import { List } from 'semantic-ui-react';
import './TaskList.css';

interface TaskListProps {
  loading?: boolean;
  tasks: TaskItem[];
  onPinTask: () => void;
  onArchiveTask: () => void;
}

const TaskList: React.FC<TaskListProps> = ({
  loading,
  tasks,
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
    return <div className="list-items">empty</div>;
  }

  return (
    <List verticalAlign="middle" className="task-list">
      <List.Header>
        <div className="task-list-header">Not Started</div>
      </List.Header>
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </List>
  );
};

export default TaskList;
