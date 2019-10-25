import React from 'react';
import { Task as TaskItem } from '../../interfaces/Task.interface';
import Task from '../Task/Task';
import './TaskList.css';
import { observer } from 'mobx-react-lite';
import { Droppable } from 'react-beautiful-dnd';

interface TaskListProps {
  loading?: boolean;
  tasks: TaskItem[];
  title: string;
  onPinTask: () => void;
  onArchiveTask: () => void;
  onDeleteTask: (task: TaskItem) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  loading,
  tasks,
  title,
  onPinTask,
  onArchiveTask,
  onDeleteTask
}) => {
  const events = {
    onPinTask,
    onArchiveTask,
    onDeleteTask
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
      <Droppable droppableId={title}>
        {provided => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="uk-list task-list"
          >
            {tasks.map((task, index) => (
              <li key={task.id}>
                <Task key={task.id} task={task} index={index} {...events} />
              </li>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default observer(TaskList);
