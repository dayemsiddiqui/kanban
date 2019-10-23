export interface Task {
  id: string;
  label: string;
  description: string;
  status: TaskStatus;
  archieved: boolean;
  pinned: boolean;
}

export enum TaskStatus {
  WAITING = 'WAITING',
  IN_PROGRESS = 'IN_PROGRESS',
  IN_REVIEW = 'IN_REVIEW',
  DONE = 'DONE'
}
