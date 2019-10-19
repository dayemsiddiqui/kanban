import React from 'react';
import { List, Card } from 'semantic-ui-react';
import './Task.css';
import { Task as TaskItem } from '../../interfaces/Task.interface';

interface TaskProps {
  task: TaskItem;
  onArchiveTask: () => void;
  onPinTask: () => void;
}

const Task: React.FC<TaskProps> = ({
  task: { id, label, status },
  onArchiveTask,
  onPinTask
}) => {
  return (
    <List.Item class="task-item">
      <List.Content>
        <Card className="task-card-item">
          <Card.Content>
            <Card.Header>{label}</Card.Header>
          </Card.Content>
        </Card>
      </List.Content>
    </List.Item>
  );
};

export default Task;
