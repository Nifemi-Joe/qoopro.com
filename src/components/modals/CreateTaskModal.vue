<template>
  <div>
    <div class="create-task-modal">
      <div class="create-task-modal_component">
        <div class="create-task-modal_content-wrapper">
          <div class="task-modal-heading">
            <img src="../../assets/images/layers.svg" loading="lazy" alt="">
            <div class="body-medium text-color-gray500" v-if="!subtask">Create Task</div>
            <div class="body-medium text-color-gray500" v-else>Create SubTask</div>
          </div>
          <div class="login-modal2_form-block w-form">
            <form id="wf-form-Log-in-Form-2" name="wf-form-Log-in-Form-2" data-name="Log in Form 2" method="get" class="login-modal2_form" data-wf-page-id="64d3a6f732558478d55540a4" data-wf-element-id="8f22acb3-a1f5-4513-6384-7657b25831d9">
              <input type="text" class="task-modal-input w-input" maxlength="256" name="task-name-2" data-name="Task Name 2" :placeholder="subtask ? 'Enter a subtask name' : 'Enter a task name'" id="task-name-2" v-model="model.taskName">
              <textarea type="text" class="task-modal-input w-input" name="Task-description-2" data-name="Task Description 2" :placeholder="subtask ? 'Enter a subtask description (optional)' : 'Enter a task description (optional)'" id="Task-description-2" v-model="model.taskDescription"></textarea>
              <div id="w-node-_8f22acb3-a1f5-4513-6384-7657b25831dd-b25831d1" class="dropdown-block">
                <a data-hover="false" data-delay="200" data-w-id="8f22acb3-a1f5-4513-6384-7657b25831de" class="dropdown2_component w-dropdown" @click="makePriorityTrue">
                  <div class="dropdown2_toggle-2 w-dropdown-toggle">
                    <div class="body-xsmall text-color-gray600">{{selectedPriority}}</div>
                    <div class="dropdown2_dropdown-icon-2 w-embed">
                      <svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <nav class="dropdown2_dropdown-list-2 w-dropdown-list" :class="{'w--open' : priority}">
                    <a href="#" class="task-dropdown-item w-inline-block" @click="selectedPriority = 'High'">
                      <div class="priority-item high">
                        <div class="priority-dot high"></div>
                        <div class="body-xsmall">High</div>
                      </div>
                    </a>
                    <a href="#" class="task-dropdown-item w-inline-block" @click="selectedPriority = 'Medium'">
                      <div class="priority-item medium">
                        <div class="priority-dot medium"></div>
                        <div class="body-xsmall">Medium</div>
                      </div>
                    </a>
                    <a href="#" class="task-dropdown-item w-inline-block" @click="selectedPriority = 'Normal'">
                      <div class="priority-item normal">
                        <div class="priority-dot normal"></div>
                        <div class="body-xsmall">Normal</div>
                      </div>
                    </a>
                    <a href="#" class="task-dropdown-item w-inline-block" @click="selectedPriority = 'Low'">
                      <div class="priority-item text-color-gray900">
                        <div class="priority-dot"></div>
                        <div class="body-xsmall">Low</div>
                      </div>
                    </a>
                  </nav>
                </a>
                <a data-hover="false" data-delay="200" data-w-id="8f22acb3-a1f5-4513-6384-7657b25831f8" class="dropdown2_component w-dropdown" @click="makeStatusTrue">
                  <div class="dropdown2_toggle-2 w-dropdown-toggle">
                    <div class="body-xsmall text-color-gray600">{{selectedStatus}}</div>
                    <div class="dropdown2_dropdown-icon-2 w-embed">
                      <svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor">

                        </path>
                      </svg>
                    </div>
                  </div>
                  <nav class="dropdown2_dropdown-list-2 w-dropdown-list" :class="{'w--open' : status}">
                    <a href="#" class="task-dropdown-item w-inline-block" @click="selectedStatus = 'Backlog'">
                      <div class="status-item"><img src="../../assets/images/Hexagon.svg" loading="lazy" alt="">
                        <div>Backlog</div>
                      </div>
                    </a>
                    <a href="#" class="task-dropdown-item w-inline-block" @click="selectedStatus = 'Planned'">
                      <div class="status-item"><img src="../../assets/images/Hexagon.svg" loading="lazy" alt="">
                        <div>Planned</div>
                      </div>
                    </a>
                    <a href="#" class="task-dropdown-item w-inline-block" @click="selectedStatus = 'In Progress'">
                      <div class="status-item"><img src="../../assets/images/Hexagon.svg" loading="lazy" alt="">
                        <div>In Progress</div>
                      </div>
                    </a>
                    <a href="#" class="task-dropdown-item w-inline-block" @click="selectedStatus = 'Paused'">
                      <div class="status-item"><img src="../../assets/images/Hexagon.svg" loading="lazy" alt="">
                        <div>Paused</div>
                      </div>
                    </a>
                    <a href="#" class="task-dropdown-item w-inline-block" @click="selectedStatus = 'Completed'">
                      <div class="status-item"><img src="../../assets/images/Hexagon.svg" loading="lazy" alt="">
                        <div>Completed</div>
                      </div>
                    </a>
                    <a href="#" class="task-dropdown-item w-inline-block" @click="selectedStatus = 'Canceled'">
                      <div class="status-item"><img src="../../assets/images/Hexagon.svg" loading="lazy" alt="">
                        <div>Canceled</div>
                      </div>
                    </a>
                  </nav>
                </a>
                <a data-hover="false" data-delay="200" data-w-id="8f22acb3-a1f5-4513-6384-7657b258321c" class="dropdown2_component w-dropdown" @click="makeProjectTrue" v-if="!subtask">
                  <div class="dropdown2_toggle-2 w-dropdown-toggle">
                    <div class="body-xsmall text-color-gray600">{{selectedProject.projectName}}</div>
                    <div class="dropdown2_dropdown-icon-2 w-embed">
                      <svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <nav class="dropdown2_dropdown-list-2 w-dropdown-list" :class="{'w--open' : project}">
                    <a class="task-dropdown-item w-inline-block" @click="selectedProject = project; model.projectId = project.projectId" v-for="project in projects" :key="project.projectId">
                      <div class="status-item"><img src="../../assets/images/project-image.svg" loading="lazy" alt="">
                        <div>{{project.projectName}}</div>
                      </div>
                    </a>
                  </nav>
                </a>
                <a data-hover="false" data-delay="200" data-w-id="8f22acb3-a1f5-4513-6384-7657b2583269" class="dropdown2_component w-dropdown" @click="makeTagTrue" v-if="!subtask">
                  <div class="dropdown2_toggle-2 w-dropdown-toggle">
                    <div class="body-xsmall text-color-gray600">{{selectedTag.teamName}}</div>
                    <div class="dropdown2_dropdown-icon-2 w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                    </svg></div>
                  </div>
                  <nav class="dropdown2_dropdown-list-2 w-dropdown-list" :class="{'w--open' : tag}">
                    <a class="task-dropdown-item w-inline-block" @click="selectedTag = team" v-for="(team, index) in teams" :key="index">
                      <div class="priority-item">
                        <div class="priority-dot"></div>
                        <div class="body-xsmall">{{team.teamName}}</div>
                      </div>
                    </a>
                  </nav>
                </a>
                <input class="dropdown2_toggle-2 w-inline-block" placeholder="Due Date" type="text" onfocus="(this.type='date')"  style="width: 120px; font-size: 12px" v-model="model.taskDueDate">

                <!--              <a href="#" class="dropdown2_toggle-2 w-inline-block"><img src="../../assets/images/calendar.svg" loading="lazy" alt="">-->
                <!--                <div class="body-xsmall text-color-gray600">Target Date</div>-->
                <!--              </a>-->
                <label class="dropdown2_toggle-2 w-inline-block" style="cursor: pointer">
                  <input type="file" id="file" @change="uploadFile('file')" style="display: none">
                  <img src="../../assets/images/folder-plus.svg" loading="lazy" alt="">
                  <div class="body-xsmall text-color-gray600" v-if="!showLoader && fileName === ''">Add Attachment</div>
                  <div class="body-xsmall text-color-gray600" v-else-if="!showLoader && fileName !== ''">{{ fileName }}</div>
                  <div class="body-xsmall text-color-gray600" v-else>Uploading...</div>
                </label>
              </div>

            </form>
            <div id="w-node-_8f22acb3-a1f5-4513-6384-7657b258328f-b25831d1" class="button-group task-modal">
              <a data-w-id="8f22acb3-a1f5-4513-6384-7657b2583291" href="#" class="button w-button" v-if="!loading || !subtasksss.loading" @click="createTask"><span v-if="!subtask">Create Task</span><span v-else>Create SubTask</span></a>
              <base-buttons v-else/>
            </div>
          </div>
        </div>
        <a @click="closeNewModal('.create-task-modal_component')" data-w-id="8f22acb3-a1f5-4513-6384-7657b2583299" href="#" class="login-modal2_close-button w-inline-block">
          <div class="icon-embed-small hide-mobile-landscape w-embed"><svg width="100%" height="100%" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.056 23.5004L23.5004 24.056C23.1935 24.3628 22.696 24.3628 22.3892 24.056L16 17.6668L9.61078 24.056C9.30394 24.3628 8.80645 24.3628 8.49961 24.056L7.94403 23.5004C7.63719 23.1936 7.63719 22.6961 7.94403 22.3892L14.3332 16L7.94403 9.61081C7.63719 9.30397 7.63719 8.80648 7.94403 8.49964L8.49961 7.94406C8.80645 7.63721 9.30394 7.63721 9.61078 7.94406L16 14.3333L22.3892 7.94404C22.6961 7.6372 23.1935 7.6372 23.5004 7.94404L24.056 8.49963C24.3628 8.80647 24.3628 9.30395 24.056 9.61079L17.6667 16L24.056 22.3892C24.3628 22.6961 24.3628 23.1936 24.056 23.5004Z" fill="currentColor"></path>
          </svg></div><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031623afe4aee7e_icon_close-modal.svg" loading="lazy" alt="" class="show-mobile-landscape">
        </a>
        <div data-w-id="8f22acb3-a1f5-4513-6384-7657b258329c" class="modal_background-overlay"></div>
      </div>

    </div>
  </div>
</template>

<script>
import RouterUtils from "@/util/baseUtils/RouterUtils";
import TaskRequest from "@/model/request/TaskRequest";
import {mapState} from "vuex";
import BaseButtons from "@/components/buttons/BaseButtons.vue";
import StoreUtils from "@/util/baseUtils/StoreUtils";
import BaseNotification from "@/components/notification/BaseNotification";
import S3Request from "@/model/request/S3Request";
import SubTaskRequest from "@/model/request/SubTaskRequest";

export default {
  name: "CreateTaskModal",
  components: {BaseButtons},
  data(){
    return{
      tasks: ['Phoenix Baker', 'Olivia Rhye', 'Lana Steiner', 'Demi Wilkinson', 'Candice Wu', 'Natali Craig', 'Drew Cano'],
      model: TaskRequest.create,
      priority: false,
      status: false,
      project: false,
      fileName: "",
      task: false,
      tag: false,
      showLoader: false,
      startDate: false,
      targetDate: false,
      addAttachment: false,
      selectedPriority: "Select Priority",
      selectedStatus: "Select Status",
      selectedProject: {
        projectName: "Select Project"
      },
      selectedTask: "Select Task",
      selectedTag: {
        teamName: "Select Team"
      },
      url: "",
      base64: "",
      uploadmodel: S3Request.uploadBase64,
      subtaskmodel: SubTaskRequest.create
    }
  },
  props:{
    closeModal: Function,
    subtask: Boolean
  },
  computed:{
    myRoutes(){
      return RouterUtils.routes;
    },
    ...mapState({
      loading: state => state.task.loading,
      userInfo: state => state.auth.userInfo,
      projects: state => state.project.projects,
      teams: state => state.teams.teams,
      sbucket: state => state.sbucket,
      taskss: state => state.task.task,
      subtasksss: state => state.subtask
    })
  },
  methods:{
    uploadFile(id) {
      let input = document.getElementById(id)
      console.log(input)
      let files = input.files;
      console.log(files)
      this.fileName = files[0].name;
      let size = files[0].size / 1000000;
      console.log(size);
      if (size > 5) {
        BaseNotification.fireToast("error", "File size must not be more than 5mb, please try with a reduced file size").then()
        return;
      }
      const reader = new FileReader();
      try {
        reader.onload = (e) => {
          this.base64 = e.target.result;
          this.uploadOfficerImage();
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      } catch (e) {
        console.warn(e.message);
      }
    },
    async uploadOfficerImage() {
      this.showLoader = true;
      this.uploadmodel.username = `${
          this.userInfo.data.customerFirstName + this.userInfo.data.customerLastName
      }_${Date.now()}`;
      this.uploadmodel.base64 = this.base64;
      await this.$store.dispatch(
          "sbucket/uploadEncodedFile",
          this.uploadmodel,
          { root: true }
      );
      this.url = this.sbucket.url;
      console.log(this.url)
      this.showLoader = false;
    },
    async createTask(){
      //
      if(this.subtask){
        this.subtaskmodel.subTaskName = this.model.taskName;
        this.subtaskmodel.subTaskDescription = this.model.taskDescription;
        this.subtaskmodel.subTaskParentTaskId = this.taskss.taskId;
        this.subtaskmodel.subTaskDueDate = this.model.taskDueDate;
        this.subtaskmodel.subTaskStatus = "ACTIVE";
        await StoreUtils.dispatch(StoreUtils.actions.subtask.createSubTask, this.subtaskmodel).then((res) => {
          if (res.responseCode === "00"){
            this.model = {}
            this.closeNewModal(".create-task-modal_component")
          }
        })
      }
      else{
        this.model.taskPriority = this.selectedPriority.toUpperCase();
        this.model.taskStatus = this.selectedStatus.toUpperCase();
        await StoreUtils.dispatch("task/createTask", this.model).then((res) => {
          if (res.responseCode === "00"){
            this.model = {}
            this.closeNewModal(".create-task-modal_component")
          }
        })
      }

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
    makePriorityTrue(){
      this.priority = !this.priority;
      this.tag = false;
      this.status = false;
      this.project = false;
      this.task = false;
      this.startDate = false;
      this.targetDate = false;
      this.addAttachment = false;
    },
    makeTagTrue(){
      this.priority = false;
      this.tag = !this.tag;
      this.status = false;
      this.project = false;
      this.task = false;
      this.startDate = false;
      this.targetDate = false;
      this.addAttachment = false;
    },
    makeStatusTrue(){
      this.priority = false;
      this.tag = false;
      this.status = !this.status;
      this.project = false;
      this.task = false;
      this.startDate = false;
      this.targetDate = false;
      this.addAttachment = false;
    },
    makeProjectTrue(){
      this.priority = false;
      this.tag = false;
      this.status = false;
      this.project = !this.project;
      this.task = false;
      this.startDate = false;
      this.targetDate = false;
      this.addAttachment = false;
    },
    makeTaskTrue(){
      this.priority = false;
      this.tag = false;
      this.status = false;
      this.project = false;
      this.task = !this.task;
      this.startDate = false;
      this.targetDate = false;
      this.addAttachment = false;
    },
    makeStartDateTrue(){
      this.priority = false;
      this.tag = false;
      this.status = false;
      this.project = false;
      this.task = false;
      this.startDate = !this.startDate;
      this.targetDate = false;
      this.addAttachment = false;
    },
    makeTargetDateTrue(){
      this.priority = false;
      this.tag = false;
      this.status = false;
      this.project = false;
      this.task = false;
      this.startDate = false;
      this.targetDate = !this.targetDate;
      this.addAttachment = false;
    },
    makeAddAttachmenrTrue(){
      this.priority = false;
      this.tag = false;
      this.status = false;
      this.project = false;
      this.task = false;
      this.startDate = false;
      this.targetDate = false;
      this.addAttachment = !this.addAttachment;
    }
  }

}
</script>

<style scoped>

</style>