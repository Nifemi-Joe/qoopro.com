import store from "../../store/store";

class StoreUtils {
    static actions = {
        auth: {
            login: "auth/login",
            initiateEnrollment: "auth/initiateEnrollment",
            completeEnrollment: "auth/completeEnrollment",
            resendOtp: "auth/resendOtp",
            initiatePasswordReset: "auth/initiatePasswordReset",
            completePasswordReset: "auth/completePasswordReset",
            changePassword: "auth/changePassword",
            getUserDetails: "auth/getUserDetails",
            resetPin: "auth/resetPin"
        },
        customer: {
            readSingleCustomer: "customer/readCustomerById",
            updateSingleCustomer: "customer/updateCustomer"
        },
        task: {
            createTask: "task/createTask",
            readTask: "task/readTask",
            readTaskById: "task/readTaskId",
            updateTask: "task/updateTask",
            addUserToTask: "task/addUserToTask",
            removeUserTask: "task/removeUserTask",
        },
        subtask: {
            createSubTask: "subtask/createSubTask",
            readSubTask: "subtask/readSubTask",
            readSubTaskById: "subtask/readSubTaskId",
            updateSubTask: "subtask/updateSubTask",
            addUserToSubTask: "subtask/addUserToSubTask",
            removeUserSubTask: "subtask/removeUserSubTask",
            readSubTaskByTaskId: "subtask/readSubTaskByTaskId"
        },
        project: {
            createProject: "project/createProject",
            readProject: "project/readProject",
            readProjectById: "project/readProjectId",
            readProjectByTeamId: "project/readProjectByTeamId",
            updateProject: "project/updateProject",
            addUserToProject: "project/addUserToProject",
            removeUserProject: "project/removeUserProject",
            readTaskByProjectId: "project/readTaskByProjectId"
        },
        team: {
            createTeam: "teams/createTeam",
            readTeam: "teams/readTeam",
            readMemebersById: "teams/readMemebersById",
            readTeamById: "teams/readTeamById",
            readTeamByProjectId: "teams/readTeamByProjectId",
            updateTeam: "teams/updateTeam",
            addUserToTeam: "teams/addUserToTeam",
            removeUserTeam: "teams/removeUserTeam",
        }
    };

    static mutations = {
        auth: {
            updateLoading: "auth/updateLoading",
            updateUserInfo: "auth/updateUserInfo",
            updateToken: "auth/updateToken"
        },
        customer: {
            updateLoading: "customer/updateLoading",
            updateCustomer: "customer/updateCustomer"
        },
        task: {
            updateLoading: "task/updateLoading",
            updateTask: "task/updateTask",
            updateTasks: "task/updateTasks"
        },
        subtask: {
            updateLoading: "subtask/updateLoading",
            updateSubTask: "subtask/updateSubTask",
            updateSubTasks: "subtask/updateSubTasks"
        },
        project: {
            updateLoading: "project/updateLoading",
            updateProject: "project/updateProject",
            updateProjects: "project/updateProjects"
        },
        team: {
            updateLoading: "teams/updateLoading",
            updateTeam: "teams/updateTeam",
            updateTeams: "teams/updateTeams",
            updateTeamMembers: "teams/updateTeamMembers",
            updateAllTeamMembers: "teams/updateAllTeamMembers"
        }
    };

    static getters = {
        auth: {
            getUserInfo: "auth/getUserInfo",
            getToken: "auth/getToken"
        }
    };

    static dispatch(actionToDispatch, payload) {
        return store.dispatch(actionToDispatch, payload, { root: true });
    }

    static commit(mutationToCommit, payload) {
        return store.commit(mutationToCommit, payload, { root: true });
    }

    static rootGetters(getter, payload) {
        if (payload) {
            return store.getters[getter](payload);
        } else {
            return store.getters[getter];
        }
    }
}

export default StoreUtils;
