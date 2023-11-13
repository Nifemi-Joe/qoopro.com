import client  from "./BaseService";


export default {
    callTransactionCreateApi(payload) {
        return client.apiClient.post("transaction/create", payload);
    },
    callTransactionReadApi() {
        return client.apiClient.post("transaction/read", {});
    },
    callTransactionUpdateApi(payload) {
        return client.apiClient.post("transaction/update", payload);
    },
    callTransactionReadByApi(payload) {
        return client.apiClient.post("transaction/read-by-transaction-id", payload);
    },
    callReadByTransactionCustomerIdApi(payload) {
        return client.apiClient.post("transaction/read-by-customer-id", payload);
    },
    callGetBanksApi() {
        return client.apiClient.post("bankly/get-banks", {});
    },
    callReadAllWalletTransactionApi(payload) {
        return client.apiClient.post("wallet/read-all-wallet-transaction", payload);
    },
};

