import client  from "./BaseService";

export default {
    callReadTeamApi(payload) {
        return client.apiClient.post("team/read", payload);
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
    callAddUserToTeamApi(payload) {
        return client.apiClient.post("team/add-user", payload);
    },
    callRemoveUserToTeamApi(payload) {
        return client.apiClient.post("team/remove-user", payload);
    }
}