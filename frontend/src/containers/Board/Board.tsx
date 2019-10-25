import React from 'react';
import TaskList from '../../components/TaskList/TaskList';
import './Board.css';
import { Row, Col, Container } from 'reactstrap';
import useFetchTasks from '../../hooks/useFetchTasks';
import { useTaskStore } from '../../hooks/useTaskStore';
import { observer } from 'mobx-react-lite';
import useDeleteTask from '../../hooks/useDeleteTask';
import { DragDropContext } from 'react-beautiful-dnd';

const Board: React.FC = () => {
  const taskStore = useTaskStore();
  useFetchTasks();
  const { deleteTask } = useDeleteTask();
  return (
    <Container fluid>
      <DragDropContext onDragEnd={() => {}}>
        <Row>
          <Col className="task-list-container" sm="3">
            <TaskList
              title="Waiting"
              tasks={taskStore.waiting}
              onDeleteTask={deleteTask}
              onPinTask={() => {}}
              onArchiveTask={() => {}}
            ></TaskList>
          </Col>
          <Col className="task-list-container" sm="3">
            <TaskList
              title="In Progress"
              tasks={taskStore.inprogress}
              onDeleteTask={deleteTask}
              onPinTask={() => {}}
              onArchiveTask={() => {}}
            ></TaskList>
          </Col>

          <Col className="task-list-container" sm="3">
            <TaskList
              title="In Review"
              tasks={taskStore.inreview}
              onDeleteTask={deleteTask}
              onPinTask={() => {}}
              onArchiveTask={() => {}}
            ></TaskList>
          </Col>

          <Col className="task-list-container" sm="3">
            <TaskList
              title="Done"
              tasks={taskStore.done}
              onDeleteTask={deleteTask}
              onPinTask={() => {}}
              onArchiveTask={() => {}}
            ></TaskList>
          </Col>
        </Row>
      </DragDropContext>
    </Container>
  );
};

export default observer(Board);
