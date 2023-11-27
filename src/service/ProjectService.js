import client  from "./BaseService";

export default {
    callReadProjectApi(payload) {
        return client.apiClient.post("project/read", payload);
    },
    callUpdateTakApi(payload) {
        return client.apiClient.post("project/update", payload);
    },
    callCreateProjectApi(payload) {
        return client.apiClient.post("project/create", payload);
    },
    callReadByIdApi(payload) {
        return client.apiClient.post("project/read-by-id", payload);
    },
    callReadByTeamIdApi(payload) {
        return client.apiClient.post("project/read-by-team-id", payload);
    },
    callAddUserToProjectApi(payload) {
        return client.apiClient.post("project/add-user", payload);
    },
    callRemoveUserToProjectApi(payload) {
        return client.apiClient.post("project/remove-user", payload);
    }
}