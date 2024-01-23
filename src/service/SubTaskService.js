import client  from "./BaseService";

export default {
    callReadSubTaskApi(payload) {
        return client.apiClient.post("sub-task/read", payload);
    },
    callUpdateSubTaskApi(payload) {
        return client.apiClient.post("sub-task/update", payload);
    },
    callCreateSubTaskApi(payload) {
        return client.apiClient.post("sub-task/create", payload);
    },
    callReadByIdApi(payload) {
        return client.apiClient.post("sub-task/read-by-sub-task-id", payload);
    },
    callReadByTaskIdApi(payload) {
        return client.apiClient.post("sub-task/read-by-task-id", payload);
    },
    callAddUserToSubTaskApi(payload) {
        return client.apiClient.post("sub-task/add-user", payload);
    },
    callRemoveUserToSubTaskApi(payload) {
        return client.apiClient.post("sub-task/remove-user", payload);
    }
}