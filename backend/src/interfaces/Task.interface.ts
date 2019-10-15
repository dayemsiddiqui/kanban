export interface Task {
    id: string;
    status: string;
    description: string;
    label: string;
}

export interface GetTaskQueryParams {
    status?: string;
}
