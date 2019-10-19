import React from 'react';
import { storiesOf } from '@storybook/react';

import TaskList from './TaskList';
import { task, actions } from '../Task/Task.stories';
import { Task } from '../../interfaces/Task.interface';

export const defaultTasks: Task[] = [
  { ...task, id: '1', label: 'Task 1' },
  { ...task, id: '2', label: 'Task 2' },
  { ...task, id: '3', label: 'Task 3' },
  { ...task, id: '4', label: 'Task 4' },
  { ...task, id: '5', label: 'Task 5' },
  { ...task, id: '6', label: 'Task 6' }
];

export const withPinnedTasks: Task[] = [
  ...defaultTasks.slice(0, 5),
  {
    id: '6',
    label: 'Task 6 (pinned)',
    status: 'TASK_PINNED',
    description: 'Test description'
  }
];

storiesOf('TaskList', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default', () => <TaskList tasks={defaultTasks} {...actions} />)
  .add('withPinnedTasks', () => (
    <TaskList tasks={withPinnedTasks} {...actions} />
  ))
  .add('loading', () => <TaskList loading tasks={[]} {...actions} />)
  .add('empty', () => <TaskList tasks={[]} {...actions} />);
