<script>
  import TaskRequest from "@/model/request/TaskRequest";
  import ProjectRequest from "@/model/request/ProjectRequest";
  import TeamRequest from "@/model/request/TeamRequest";
  import CustomerRequest from "@/model/request/CustomerRequest";
  import {mapState} from "vuex";
  import SubTaskRequest from "@/model/request/SubTaskRequest";
  import StoreUtils from "@/util/baseUtils/StoreUtils";
  import BaseButtons from "@/components/buttons/BaseButtons.vue";
  import SuccessModal from "@/components/modals/SuccessModal.vue";
  import RouterUtils from "@/util/baseUtils/RouterUtils";

  export default {
    name: "ConfirmDeleteModal",
    components: {SuccessModal, BaseButtons},
    data() {
      return {
        taskUpdateModel: TaskRequest.update,
        projectUpdateModel:  ProjectRequest.update,
        teamUpdateModel: TeamRequest.update,
        customerUpdateModel: CustomerRequest.update,
        isLoading: false,
        subtaskUpdateModel: SubTaskRequest.update
      }
    },
    computed: {
      ...mapState(["task", "teams", "subtask", "project", "customer"]),
      myRoutes(){
        return RouterUtils.routes
      },
      getRoutes() {
        let myRoutes = RouterUtils.routes;
        if (this.module === "task"){
          myRoutes = RouterUtils.routes.dashboard.task.path;
        }
        else if (this.module === "team"){
          myRoutes = RouterUtils.routes.dashboard.team.path;
        }
        else if (this.module === "subtask"){
          myRoutes = RouterUtils.routes.dashboard.singleTask.path + `${this.teams.team.teamId}`;
        }
        else if (this.module === "project"){
          myRoutes = RouterUtils.routes.dashboard.projects.path;
        }
        else {
          myRoutes = RouterUtils.routes.dashboard.settings.path;
        }
        return myRoutes;
      }
    },
    methods: {
      async deleteItem(){
        this.isLoading = true;
        if (this.module === "task"){
          this.taskUpdateModel.taskId = this.task.task.taskId;
          this.taskUpdateModel.taskStatus = "DELETED";
          await StoreUtils.dispatch(StoreUtils.actions.task.updateTask, this.taskUpdateModel).then((res) => {
            if (res.responseCode === "00"){
              this.openNewModal('.success-modal-component')
            }
          });
        }
        else if (this.module === "project"){
          this.projectUpdateModel.projectId = this.project.project.projectId;
          this.projectUpdateModel.projectStatus = "DELETED";
          await StoreUtils.dispatch(StoreUtils.actions.project.updateProject, this.projectUpdateModel).then((res) => {
            if (res.responseCode === "00"){
              this.openNewModal('.success-modal-component')
            }
          });
        }
        else if (this.module === "team"){
          this.teamUpdateModel.teamId = this.teams.team.teamId;
          this.teamUpdateModel.teamStatus = "DELETED";
          await StoreUtils.dispatch(StoreUtils.actions.team.updateTeam, this.teamUpdateModel).then((res) => {
            if (res.responseCode === "00"){
              this.openNewModal('.success-modal-component')
            }
          });
        }
        else if (this.module === "subtask"){
          this.subtaskUpdateModel.subTaskId = this.subtask.subtask.subTaskId;
          this.subtaskUpdateModel.subTaskStatus = "DELETED";
          await StoreUtils.dispatch(StoreUtils.actions.subtask.updateSubTask, this.subtaskUpdateModel).then((res) => {
            if (res.responseCode === "00"){
              this.openNewModal('.success-modal-component')
            }
          });
        }
        else {
          this.customerUpdateModel.customerId = this.customer.customer.customerId;
          this.customerUpdateModel.customerStatus = "DELETED";
          await StoreUtils.dispatch(StoreUtils.actions.customer.updateSingleCustomer, this.customerUpdateModel).then((res) => {
            if (res.responseCode === "00"){
              this.openNewModal('.success-modal-component')
            }
          });
        }
        this.isLoading = false;
      },
      openNewModal(className){
        document.querySelector(className).style.display = "flex"
        setTimeout(() => {
          document.querySelector(className).style.opacity = 1
        },500  )
      },
      closeNewModal(className){
        document.querySelector(className).style.opacity = 0
        setTimeout(() => {
          document.querySelector(className).style.display = "none"
        },500  )
      },
    },
    props: {
      module: String,

    }
  }
</script>

<template>
  <div class="confirmdelete-modal_component">
    <div class="confirm-delete-modal_content-wrapper">
      <div class="modal-text">
        <h6 class="header-text text-color-gray900">Are you sure you want to delete this {{module}}?</h6>
        <p class="body-small text-color-gray600">If you delete this {{module}} you can't recover it</p>
      </div>
      <div class="button-group">
        <a data-w-id="7d59e0a1-beff-ed50-5d1b-e398d87b1163" href="#" class="button is-alternate w-button" @click="closeNewModal('.confirmdelete-modal_component')">Cancel</a>
        <a href="#" class="button w-button" @click="deleteItem" v-if="!isLoading">Delete</a>
        <base-buttons v-else/>
      </div>
      <a data-w-id="7d59e0a1-beff-ed50-5d1b-e398d87b1167" @click="closeNewModal('.confirmdelete-modal_component')" style="position: absolute; right: 5px; top: 5px" href="#" class="confirm-delete-modal_close-button w-inline-block">
        <div class="icon-embed-small hide-mobile-landscape w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.056 23.5004L23.5004 24.056C23.1935 24.3628 22.696 24.3628 22.3892 24.056L16 17.6668L9.61078 24.056C9.30394 24.3628 8.80645 24.3628 8.49961 24.056L7.94403 23.5004C7.63719 23.1936 7.63719 22.6961 7.94403 22.3892L14.3332 16L7.94403 9.61081C7.63719 9.30397 7.63719 8.80648 7.94403 8.49964L8.49961 7.94406C8.80645 7.63721 9.30394 7.63721 9.61078 7.94406L16 14.3333L22.3892 7.94404C22.6961 7.6372 23.1935 7.6372 23.5004 7.94404L24.056 8.49963C24.3628 8.80647 24.3628 9.30395 24.056 9.61079L17.6667 16L24.056 22.3892C24.3628 22.6961 24.3628 23.1936 24.056 23.5004Z" fill="currentColor"></path>
        </svg></div><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031623afe4aee7e_icon_close-modal.svg" loading="lazy" alt="" class="show-mobile-landscape">
      </a>
    </div>
    <div data-w-id="7d59e0a1-beff-ed50-5d1b-e398d87b116a" class="modal_background-overlay"></div>
    <SuccessModal module="task" :module-path="getRoutes"/>
  </div>
</template>

<style>
.confirmdelete-modal_component {
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: none;
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.confirm-delete-modal_content-wrapper {
  width: 100%;
  height: auto;
  max-height: 80vh;
  max-width: 30rem;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  background-color: var(--white);
  border-radius: 8px;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem;
  display: flex;
  position: relative;
  overflow: scroll;
}

.modal_background-overlay {
  z-index: -1;
  width: 100%;
  height: 100%;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: rgba(53, 56, 73, .77);
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}
.modal-text {
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}
.header-text {
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
}
.text-color-gray900 {
  color: #0d0d12;
}
.body-small {
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.14286;
}
.text-color-gray600 {
  color: #353849;
}
.button-group {
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
}
</style>