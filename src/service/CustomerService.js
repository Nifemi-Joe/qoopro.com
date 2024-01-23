import client  from "./BaseService";

export default {
    callReadByIdApi(payload) {
        return client.apiClient.post("customer/read-by-customer-id", payload);
    },
    callUpdateCustomerApi(payload) {
        return client.apiClient.post("customer/update", payload);
    },
    callReadCustomerApi(payload) {
        return client.apiClient.post("customer/read", payload);
    }

}