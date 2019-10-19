import React from 'react';
import Task from './Task';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export const task = {
  id: '1',
  label: 'Test Task',
  status: 'TASK_INBOX',
  description: 'Test description',
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

storiesOf('Task', module)
  .add('default', () => <Task task={task} {...actions} />)
  .add('pinned', () => (
    <Task task={{ ...task, status: 'TASK_PINNED' }} {...actions} />
  ))
  .add('archived', () => (
    <Task task={{ ...task, status: 'TASK_ARCHIVED' }} {...actions} />
  ));
