import React from 'react';
import ModalComponent from '../../components/ModalComponent/ModalComponent';
import { ModalBody, ModalFooter, Button } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TaskStatus } from '../../interfaces/Task.interface';

interface CreateTaskProps {
  modal: boolean;
  closeModal: () => void;
}

const CreateTask: React.FC<CreateTaskProps> = ({ modal, closeModal }) => {
  return (
    <ModalComponent modal={modal} title="Create Task">
      <ModalBody>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => ({})}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label className="uk-form-label">Task Label:</label>
              <Field className="uk-input" type="text" name="label" />
              <ErrorMessage name="label" component="div" />
              <label className="uk-form-label">Task Description:</label>
              <Field
                component="textarea"
                className="uk-textarea"
                name="description"
              />
              <ErrorMessage name="description" component="div" />
              <label className="uk-form-label">Task Status:</label>
              <Field className="uk-select" component="select" name="status">
                <option value={TaskStatus.WAITING}>Waiting</option>
                <option value={TaskStatus.IN_PROGRESS}>In Progress</option>
                <option value={TaskStatus.IN_REVIEW}>In Review</option>
                <option value={TaskStatus.DONE}>Done</option>
              </Field>
              <ErrorMessage name="status" component="div" />
              <ModalFooter>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={closeModal}
                >
                  Add Task
                </Button>
                <Button onClick={closeModal}>Cancel</Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalBody>
    </ModalComponent>
  );
};

export default CreateTask;
