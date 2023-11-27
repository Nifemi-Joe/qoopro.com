import StoreUtils from "@/util/baseUtils/StoreUtils";
import BaseNotification from "@/components/notification/BaseNotification";
import TeamService from "@/service/TeamService";
import TeamRequest from "@/model/request/TeamRequest";

export const state = {
    loading: false,
    team: {},
    teams: []
};

export const getters = {

};

export const mutations = {
    updateLoading(state, payload) {
        state.loading = payload
    },
    updateTeam(state, payload){
        state.team = payload
    },
    updateTeams(state, payload){
        state.teams = payload
    }
};

export const actions = {
    readTeamById(){
        StoreUtils.commit(StoreUtils.mutations.team.updateLoading, true)
        return TeamService.callReadByIdApi(TeamRequest.readById).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
            let responseData = response.data;
            console.log(responseData.data);
            if (responseData.responseCode === "00"){
            StoreUtils.commit(StoreUtils.mutations.team.updateTeam, responseData.data);
            }else {
                BaseNotification.fireToast("error", responseData.responseMessage).then()
            }

        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
        })
    },
    updateTeam(){
        StoreUtils.commit(StoreUtils.mutations.team.updateLoading, true)
        return TeamService.callUpdateTakApi(TeamRequest.update).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                BaseNotification.fireToast("success", responseData.responseMessage).then()
                return responseData
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
                return responseData
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
        })
    },
    createTeam(){
        StoreUtils.commit(StoreUtils.mutations.team.updateLoading, true)
        return TeamService.callCreateTeamApi(TeamRequest.create).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                BaseNotification.fireToast("success", responseData.responseMessage).then()
                StoreUtils.dispatch("team/readTeam")
                return responseData
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
                return responseData
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
        })
    },
    readTeam(){
        StoreUtils.commit(StoreUtils.mutations.team.updateLoading, true)
        return TeamService.callReadTeamApi(TeamRequest.read).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                StoreUtils.commit(StoreUtils.mutations.team.updateTeams, responseData.data)
            }else{
                StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
        })
    },
    addUserToTeam(){
        StoreUtils.commit(StoreUtils.mutations.team.updateLoading, true)
        return TeamService.callAddUserToTeamApi(TeamRequest.addUser).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                BaseNotification.fireToast("success", responseData.responseMessage).then(

                )
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
        })
    },
    removeUserTeam(){
        StoreUtils.commit(StoreUtils.mutations.team.updateLoading, true)
        return TeamService.callRemoveUserToTeamApi(TeamRequest.removeUser).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
            console.log(response.data)
            let responseData = response.data;
            if (responseData.responseCode === "00"){
                BaseNotification.fireToast("success", responseData.responseMessage).then(

                )
            }else{
                BaseNotification.fireToast("error", responseData.responseMessage).then()
                StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
            }
        }).catch(error=>{
            BaseNotification.fireToast("error", error).then()
            StoreUtils.commit(StoreUtils.mutations.team.updateLoading, false)
        })
    },

};