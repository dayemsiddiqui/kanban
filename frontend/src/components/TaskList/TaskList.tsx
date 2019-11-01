import React from 'react';
import { Task as TaskItem, TaskStatus } from '../../interfaces/Task.interface';
import Task from '../Task/Task';
import './TaskList.css';
import { observer } from 'mobx-react-lite';
import { Droppable } from 'react-beautiful-dnd';

interface TaskListProps {
  loading?: boolean;
  tasks: TaskItem[];
  title: string;
  columnType: TaskStatus;
  onPinTask: () => void;
  onArchiveTask: () => void;
  onDeleteTask: (task: TaskItem) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  loading,
  tasks,
  columnType,
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
  let showEmpty = true;
  if (tasks && tasks.length === 0) {
    showEmpty = true;
  } else {
    showEmpty = false;
  }

  return (
    <div>
      <strong>{title.toUpperCase()}</strong>
      <Droppable droppableId={columnType}>
        {provided => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="uk-list task-list"
          >
            {!showEmpty &&
              tasks.map((task, index) => (
                <li key={task.id}>
                  <Task key={task.id} task={task} index={index} {...events} />
                </li>
              ))}
            {provided.placeholder}
            {loading && <p>Loading</p>}
            {showEmpty && (
              <div>
                <img src="/images/empty-list.png" alt="No Items Found" />
              </div>
            )}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default observer(TaskList);
