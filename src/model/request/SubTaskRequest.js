class SubTaskRequest {
    static readById = {
        subTaskId: null
    }
    static readByTaskId = {
        taskId: null
    }
    static update = {
        subTaskId: null,
        subTaskName: null,
        subTaskDescription: null,
        subTaskStatus: null
    }

    static read = {

    }

    static create = {
        subTaskName: null,
        subTaskDescription: null,
        // subTaskSubSubTask: null
    }

    static addUser = {
        subTaskId: null,
        customerIds: []
    }

    static removeUser = {
        subTaskId: null,
        customerIds: []
    }

}

export default SubTaskRequest;