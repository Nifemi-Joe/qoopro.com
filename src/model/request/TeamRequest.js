class TeamRequest {
    static readById = {
        teamId: null
    }

    static projectId = {
        projectId: null
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
        teamId: null,
        teamMemberEmails: []
    }

    static removeUser = {
        taskId: null,
        customerIds: []
    }

}

export default TeamRequest;