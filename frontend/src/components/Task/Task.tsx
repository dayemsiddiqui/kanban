import React, { useState } from 'react';
import './Task.css';
import { Task as TaskItem } from '../../interfaces/Task.interface';
import { Draggable } from 'react-beautiful-dnd';

interface TaskProps {
  task: TaskItem;
  index: number;
  onArchiveTask: () => void;
  onPinTask: () => void;
  onDeleteTask: (task: TaskItem) => void;
}

const Task: React.FC<TaskProps> = ({
  task,
  index,
  onArchiveTask,
  onPinTask,
  onDeleteTask
}) => {
  const [displayIcon, setDisplayIcon] = useState(false);
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
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
      )}
    </Draggable>
  );
};

export default Task;
