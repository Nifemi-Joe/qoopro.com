class TaskRequest {
    static readById = {
        customerId: null
    }

    static update = {
        taskId: null,
        taskName: null,
        taskDescription: null,
        taskStatus: null
    }

    static read = {

    }

    static create = {
        taskName: null,
        taskDescription: null,
        // taskSubTask: null
    }

    static addUser = {
        taskId: null,
        customerIds: []
    }

    static removeUser = {
        taskId: null,
        customerIds: []
    }

}

export default TaskRequest;