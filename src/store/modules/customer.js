import StoreUtils from "@/util/baseUtils/StoreUtils";
import BaseNotification from "@/components/notification/BaseNotification";
import CustomerService from "@/service/CustomerService";
import CustomerRequest from "@/model/request/CustomerRequest";

export const state = {
    loading: false,
    customerDetails: {},
    customers: []
};

export const getters = {

};

export const mutations = {
    updateLoading(state, payload) {
        state.loading = payload
    },
    updateCustomer(state, payload){
        state.customerDetails = payload
    },
    updateCustomers(state, payload){
        state.customers = payload
    }
};

export const actions = {
    readCustomerById(){
        StoreUtils.commit(StoreUtils.mutations.customer.updateLoading, true)
        return CustomerService.callReadByIdApi(CustomerRequest.readById).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.customer.updateLoading, false)
            let responseData = response.data;
            console.log(responseData.data);
            if (responseData.responseCode === "00"){
            StoreUtils.commit(StoreUtils.mutations.customer.updateCustomer, responseData.data);
            }else {
                BaseNotification.fireToast("error", responseData.responseMessage).then()
            }

        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.customer.updateLoading, false)
        })
    },
    updateCustomer(){
        StoreUtils.commit(StoreUtils.mutations.customer.updateLoading, true)
        return CustomerService.callUpdateCustomerApi(CustomerRequest.update).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.customer.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                StoreUtils.dispatch(StoreUtils.actions.auth.getUserDetails)
                return responseData
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.customer.updateLoading, false)
                return responseData
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.customer.updateLoading, false)
        })
    },
    readCustomer(){
        StoreUtils.commit(StoreUtils.mutations.customer.updateLoading, true)
        return CustomerService.callReadCustomerApi().then(response=>{
            StoreUtils.commit(StoreUtils.mutations.customer.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                StoreUtils.commit("customer/updateCustomers", responseData.data)
            }else{
                StoreUtils.commit(StoreUtils.mutations.customer.updateLoading, false)
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.customer.updateLoading, false)
        })
    },
};