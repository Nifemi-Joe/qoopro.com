import StoreUtils from "@/util/baseUtils/StoreUtils";
import BaseNotification from "@/components/notification/BaseNotification";
import ProjectService from "@/service/ProjectService";
import ProjectRequest from "@/model/request/ProjectRequest";
import router from "@/router";

export const state = {
    loading: false,
    project: {},
    projects: []
};

export const getters = {

};

export const mutations = {
    updateLoading(state, payload) {
        state.loading = payload
    },
    updateProject(state, payload){
        state.project = payload
    },
    updateProjects(state, payload){
        state.projects = payload
    }
};

export const actions = {
    readProjectId(){
        StoreUtils.commit(StoreUtils.mutations.project.updateLoading, true)
        return ProjectService.callReadByIdApi(ProjectRequest.readById).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
            let responseData = response.data;
            console.log(responseData.data);
            if (responseData.responseCode === "00"){
            StoreUtils.commit(StoreUtils.mutations.project.updateProject, responseData.data);
            }else {
                BaseNotification.fireToast("error", responseData.responseMessage).then()
            }

        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
        })
    },
    readProjectByTeamId(){
        StoreUtils.commit(StoreUtils.mutations.project.updateLoading, true)
        return ProjectService.callReadByTeamIdApi(ProjectRequest.readByTeamId).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
            let responseData = response.data;
            console.log(responseData.data);
            if (responseData.responseCode === "00"){
                StoreUtils.commit(StoreUtils.mutations.project.updateProjects, responseData.data);
            }else {
                BaseNotification.fireToast("error", responseData.responseMessage).then()
            }

        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
        })
    },
    readTaskByProjectId(){
        StoreUtils.commit(StoreUtils.mutations.project.updateLoading, true)
        return ProjectService.callTaskProjectApi(ProjectRequest.readById).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
            let responseData = response.data;
            console.log(responseData.data);
            if (responseData.responseCode === "00"){
                StoreUtils.commit(StoreUtils.mutations.task.updateTasks, responseData.data);
            }

        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
        })
    },
    updateProject(){
        StoreUtils.commit(StoreUtils.mutations.project.updateLoading, true)
        return ProjectService.callUpdateTakApi(ProjectRequest.update).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                StoreUtils.dispatch(StoreUtils.actions.project.readProject)
                return responseData
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false);
                return responseData
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
        })
    },
    createProject(){
        StoreUtils.commit(StoreUtils.mutations.project.updateLoading, true)
        return ProjectService.callCreateProjectApi(ProjectRequest.create).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                StoreUtils.commit(StoreUtils.mutations.project.updateProject, responseData);

                // BaseNotification.fireToast("success", responseData.responseMessage).then()
                StoreUtils.dispatch("project/readProject")
                setTimeout(() => {
                    StoreUtils.commit(StoreUtils.mutations.project.updateProject , {responseCode: "100"})
                    router.push("/projects")
                },2000)
                return responseData
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
        })
    },
    readProject(){
        StoreUtils.commit(StoreUtils.mutations.project.updateLoading, true)
        return ProjectService.callReadProjectApi(ProjectRequest.read).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                StoreUtils.commit(StoreUtils.mutations.project.updateProjects, responseData.data)
            }else{
                StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
        })
    },
    addUserToProject(){
        StoreUtils.commit(StoreUtils.mutations.project.updateLoading, true)
        return ProjectService.callAddUserToProjectApi(ProjectRequest.addUser).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                BaseNotification.fireToast("success", responseData.responseMessage).then(

                )
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
        })
    },
    removeUserProject(){
        StoreUtils.commit(StoreUtils.mutations.project.updateLoading, true)
        return ProjectService.callRemoveUserToProjectApi(ProjectRequest.removeUser).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                BaseNotification.fireToast("success", responseData.responseMessage).then(

                )
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.project.updateLoading, false)
        })
    },

};