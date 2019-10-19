import React from 'react';
import Task from './Task';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TaskStatus } from '../../interfaces/Task.interface';

export const task = {
  id: '1',
  label: 'Test Task',
  status: TaskStatus.WAITING,
  description: 'Test description'
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

storiesOf('Task', module)
  .add('default', () => <Task task={task} {...actions} />)
  .add('pinned', () => (
    <Task task={{ ...task, status: TaskStatus.WAITING }} {...actions} />
  ))
  .add('archived', () => (
    <Task task={{ ...task, status: TaskStatus.WAITING }} {...actions} />
  ));
