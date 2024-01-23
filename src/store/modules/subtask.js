import StoreUtils from "@/util/baseUtils/StoreUtils";
import BaseNotification from "@/components/notification/BaseNotification";
import SubTaskService from "@/service/SubTaskService";
import SubTaskRequest from "@/model/request/SubTaskRequest";

export const state = {
    loading: false,
    subtask: {},
    subtasks: []
};

export const getters = {

};

export const mutations = {
    updateLoading(state, payload) {
        state.loading = payload
    },
    updateSubTask(state, payload){
        state.subtask = payload
    },
    updateSubTasks(state, payload){
        state.subtasks = payload
    }
};

export const actions = {
    readSubTaskId(){
        StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, true)
        return SubTaskService.callReadByIdApi(SubTaskRequest.readById).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
            let responseData = response.data;
            console.log(responseData.data);
            if (responseData.responseCode === "00"){
            StoreUtils.commit(StoreUtils.mutations.subtask.updateSubTask, responseData.data);
            }else {
                BaseNotification.fireToast("error", responseData.responseMessage).then()
            }

        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
        })
    },
    readSubTaskByTaskId(){
        StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, true)
        return SubTaskService.callReadByTaskIdApi(SubTaskRequest.readByTaskId).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
            let responseData = response.data;
            console.log(responseData.data);
            if (responseData.responseCode === "00"){
                StoreUtils.commit(StoreUtils.mutations.subtask.updateSubTasks, responseData.data);
            }else {
                BaseNotification.fireToast("error", responseData.responseMessage).then()
            }

        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
        })
    },
    updateSubTask(){
        StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, true)
        return SubTaskService.callUpdateTakApi(SubTaskRequest.update).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                StoreUtils.dispatch(StoreUtils.actions.subtask.readSubTaskByTaskId)
                return responseData
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
        })
    },
    createSubTask(){
        StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, true)
        return SubTaskService.callCreateSubTaskApi(SubTaskRequest.create).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                BaseNotification.fireToast("success", responseData.responseMessage).then()
                StoreUtils.dispatch("subtask/readSubTask")
                return responseData
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
                return responseData
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
        })
    },
    readSubTask(){
        StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, true)
        return SubTaskService.callReadSubTaskApi(SubTaskRequest.read).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                StoreUtils.commit(StoreUtils.mutations.subtask.updateSubTasks, responseData.data)
            }else{
                StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
        })
    },
    addUserToSubTask(){
        StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, true)
        return SubTaskService.callAddUserToSubTaskApi(SubTaskRequest.addUser).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                BaseNotification.fireToast("success", responseData.responseMessage).then(

                )
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
        })
    },
    removeUserSubTask(){
        StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, true)
        return SubTaskService.callRemoveUserToSubTaskApi(SubTaskRequest.removeUser).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                BaseNotification.fireToast("success", responseData.responseMessage).then(

                )
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.subtask.updateLoading, false)
        })
    },

};