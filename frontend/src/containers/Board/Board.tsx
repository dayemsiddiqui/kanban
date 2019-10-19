import React from 'react';
import TaskList from '../../components/TaskList/TaskList';
import { Task, TaskStatus } from '../../interfaces/Task.interface';

import './Board.css';

const tasks: Task[] = [
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING },
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING },
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING },
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING },
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING },
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING },
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING },
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING },
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING }
];

const Board: React.FC = () => {
  return (
    <>
      <div className="uk-column-1-4 uk-padding board">
        <TaskList
          title="Waiting"
          tasks={tasks}
          onPinTask={() => {}}
          onArchiveTask={() => {}}
        ></TaskList>
        <TaskList
          title="In Progress"
          tasks={tasks}
          onPinTask={() => {}}
          onArchiveTask={() => {}}
        ></TaskList>
        <TaskList
          title="In Review"
          tasks={tasks}
          onPinTask={() => {}}
          onArchiveTask={() => {}}
        ></TaskList>
        <TaskList
          title="Done"
          tasks={tasks}
          onPinTask={() => {}}
          onArchiveTask={() => {}}
        ></TaskList>
      </div>
    </>
  );
};

export default Board;
