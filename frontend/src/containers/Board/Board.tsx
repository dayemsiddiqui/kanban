import React from 'react';
import TaskList from '../../components/TaskList/TaskList';
import './Board.css';
import { Row, Col, Container } from 'reactstrap';
import useFetchTasks from '../../hooks/useFetchTasks';
import useObserveTaskStore from '../../hooks/useObserveTaskStore';

const Board: React.FC = () => {
  useFetchTasks();
  const { snapshot } = useObserveTaskStore();
  return (
    <Container fluid>
      <Row>
        <Col className="task-list-container" sm="3">
          <TaskList
            title="Waiting"
            tasks={snapshot.waiting}
            onPinTask={() => {}}
            onArchiveTask={() => {}}
          ></TaskList>
        </Col>
        <Col className="task-list-container" sm="3">
          <TaskList
            title="In Progress"
            tasks={snapshot.inprogress}
            onPinTask={() => {}}
            onArchiveTask={() => {}}
          ></TaskList>
        </Col>

        <Col className="task-list-container" sm="3">
          <TaskList
            title="In Review"
            tasks={snapshot.inreview}
            onPinTask={() => {}}
            onArchiveTask={() => {}}
          ></TaskList>
        </Col>

        <Col className="task-list-container" sm="3">
          <TaskList
            title="Done"
            tasks={snapshot.done}
            onPinTask={() => {}}
            onArchiveTask={() => {}}
          ></TaskList>
        </Col>
      </Row>
    </Container>
  );
};

export default Board;
