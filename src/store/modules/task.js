import StoreUtils from "@/util/baseUtils/StoreUtils";
import BaseNotification from "@/components/notification/BaseNotification";
import TaskService from "@/service/TaskService";
import TaskRequest from "@/model/request/TaskRequest";

export const state = {
    loading: false,
    task: {},
    tasks: []
};

export const getters = {

};

export const mutations = {
    updateLoading(state, payload) {
        state.loading = payload
    },
    updateTask(state, payload){
        state.task = payload
    },
    updateTasks(state, payload){
        state.tasks = payload
    }
};

export const actions = {
    readTaskId(){
        StoreUtils.commit(StoreUtils.mutations.task.updateLoading, true)
        return TaskService.callReadByIdApi(TaskRequest.readById).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
            let responseData = response.data;
            console.log(responseData.data);
            if (responseData.responseCode === "00"){
            StoreUtils.commit(StoreUtils.mutations.task.updateTask, responseData.data);
            }else {
                BaseNotification.fireToast("error", responseData.responseMessage).then()
            }

        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
        })
    },
    updateTask(){
        StoreUtils.commit(StoreUtils.mutations.task.updateLoading, true)
        return TaskService.callUpdateTakApi(TaskRequest.update).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                BaseNotification.fireToast("success", responseData.responseMessage).then(

                )
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
        })
    },
    createTask(){
        StoreUtils.commit(StoreUtils.mutations.task.updateLoading, true)
        return TaskService.callCreateTaskApi(TaskRequest.create).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                BaseNotification.fireToast("success", responseData.responseMessage).then()
                StoreUtils.dispatch("task/readTask")
                return responseData
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
        })
    },
    readTask(){
        StoreUtils.commit(StoreUtils.mutations.task.updateLoading, true)
        return TaskService.callReadTaskApi(TaskRequest.read).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                StoreUtils.commit(StoreUtils.mutations.task.updateTasks, responseData.data)
            }else{
                StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
        })
    },
    addUserToTask(){
        StoreUtils.commit(StoreUtils.mutations.task.updateLoading, true)
        return TaskService.callAddUserToTaskApi(TaskRequest.addUser).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                BaseNotification.fireToast("success", responseData.responseMessage).then(

                )
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
        })
    },
    removeUserTask(){
        StoreUtils.commit(StoreUtils.mutations.task.updateLoading, true)
        return TaskService.callRemoveUserToTaskApi(TaskRequest.removeUser).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                BaseNotification.fireToast("success", responseData.responseMessage).then(

                )
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.task.updateLoading, false)
        })
    },

};