import React from 'react';
import TaskList from '../../components/TaskList/TaskList';
import './Board.css';
import { Row, Col, Container } from 'reactstrap';
import useFetchTasks from '../../hooks/useFetchTasks';
import { useTaskStore } from '../../hooks/useTaskStore';
import { observer } from 'mobx-react-lite';
import useDeleteTask from '../../hooks/useDeleteTask';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { TaskStatus } from '../../interfaces/Task.interface';
import useMoveTask from '../../hooks/useMoveTask';

const Board: React.FC = () => {
  const taskStore = useTaskStore();
  const { moveTask } = useMoveTask();
  useFetchTasks();
  const { deleteTask } = useDeleteTask();
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const fromListType = result.source.droppableId as TaskStatus;
    const fromIndex = result.source.index;
    const toListType = result.destination.droppableId as TaskStatus;
    const toIndex = result.destination.index;
    moveTask(fromListType, toListType, fromIndex, toIndex);
  };
  return (
    <Container fluid>
      <DragDropContext onDragEnd={onDragEnd}>
        <Row>
          <Col className="task-list-container" sm="3">
            <TaskList
              title="Waiting"
              columnType={TaskStatus.WAITING}
              tasks={taskStore.waiting}
              onDeleteTask={deleteTask}
              onPinTask={() => {}}
              onArchiveTask={() => {}}
            ></TaskList>
          </Col>
          <Col className="task-list-container" sm="3">
            <TaskList
              title="In Progress"
              columnType={TaskStatus.IN_PROGRESS}
              tasks={taskStore.inprogress}
              onDeleteTask={deleteTask}
              onPinTask={() => {}}
              onArchiveTask={() => {}}
            ></TaskList>
          </Col>

          <Col className="task-list-container" sm="3">
            <TaskList
              title="In Review"
              columnType={TaskStatus.IN_REVIEW}
              tasks={taskStore.inreview}
              onDeleteTask={deleteTask}
              onPinTask={() => {}}
              onArchiveTask={() => {}}
            ></TaskList>
          </Col>

          <Col className="task-list-container" sm="3">
            <TaskList
              title="Done"
              columnType={TaskStatus.DONE}
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
