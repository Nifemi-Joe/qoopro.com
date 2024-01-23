import client  from "./BaseService";

export default {
    callReadTeamApi(payload) {
        return client.apiClient.post("team/read", payload);
    },
    callReadMembersApi(payload) {
        return client.apiClient.post("customer/read-by-team-id", payload);
    },
    callUpdateTakApi(payload) {
        return client.apiClient.post("team/update", payload);
    },
    callCreateTeamApi(payload) {
        return client.apiClient.post("team/create", payload);
    },
    callReadByIdApi(payload) {
        return client.apiClient.post("team/read-by-team-id", payload);
    },
    callReadByProjectIdApi(payload) {
        return client.apiClient.post("team/read-by-project-id", payload);
    },
    callAddUserToTeamApi(payload) {
        return client.apiClient.post("team/invite-members", payload);
    },
    callRemoveUserToTeamApi(payload) {
        return client.apiClient.post("team/remove-user", payload);
    }
}