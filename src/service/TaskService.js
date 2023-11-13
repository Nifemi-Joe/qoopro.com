import client  from "./BaseService";

export default {
    callReadTaskApi(payload) {
        return client.apiClient.post("task/read", payload);
    },
    callUpdateTakApi(payload) {
        return client.apiClient.post("task/update", payload);
    },
    callCreateTaskApi(payload) {
        return client.apiClient.post("task/create", payload);
    },
    callReadByIdApi(payload) {
        return client.apiClient.post("task/read-by-id", payload);
    },
    callAddUserToTaskApi(payload) {
        return client.apiClient.post("task/add-user", payload);
    },
    callRemoveUserToTaskApi(payload) {
        return client.apiClient.post("task/remove-user", payload);
    }
}