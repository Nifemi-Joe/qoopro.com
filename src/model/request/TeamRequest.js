class TeamRequest {
    static readById = {
        customerId: null
    }

    static update = {
        teamId: "",
        teamName: "",
        teamDescription: "",
        teamLeader: ""
    }

    static read = {

    }

    static create = {
        teamName: "",
        teamDescription: "",
        teamLeader: ""
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

export default TeamRequest;