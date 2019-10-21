import React from 'react';
import TaskList from '../../components/TaskList/TaskList';
import './Board.css';
import { observer } from 'mobx-react-lite';
import { useTaskStore } from '../../hooks/useTaskStore';
import { Row, Col, Container } from 'reactstrap';

const Board: React.FC = () => {
  const taskStore = useTaskStore();

  return (
    <Container fluid>
      <Row>
        <Col className="task-list-container" sm="3">
          <TaskList
            title="Waiting"
            tasks={taskStore.waiting}
            onPinTask={() => {}}
            onArchiveTask={() => {}}
          ></TaskList>
        </Col>

        <Col className="task-list-container" sm="3">
          <TaskList
            title="In Progress"
            tasks={taskStore.inprogress}
            onPinTask={() => {}}
            onArchiveTask={() => {}}
          ></TaskList>
        </Col>

        <Col className="task-list-container" sm="3">
          <TaskList
            title="In Review"
            tasks={taskStore.inreview}
            onPinTask={() => {}}
            onArchiveTask={() => {}}
          ></TaskList>
        </Col>

        <Col className="task-list-container" sm="3">
          <TaskList
            title="Done"
            tasks={taskStore.done}
            onPinTask={() => {}}
            onArchiveTask={() => {}}
          ></TaskList>
        </Col>
      </Row>
    </Container>
  );
};

export default observer(Board);
