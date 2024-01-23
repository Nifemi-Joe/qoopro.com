<script>

import DashboardLayout from "@/layout/DashboardLayout.vue";
import StoreUtils from "@/util/baseUtils/StoreUtils";
import {mapState} from "vuex";
import TaskRequest from "@/model/request/TaskRequest";
import store from "@/store/store";
import CreateTaskModal from "@/components/modals/CreateTaskModal.vue";
import TaskDetailsModal from "@/components/modals/TaskDetailsModal.vue";
import SubTaskRequest from "@/model/request/SubTaskRequest";
import BaseButtons from "@/components/buttons/BaseButtons.vue";
import ConfirmDeleteModal from "@/components/modals/ConfirmDeleteModal.vue";
export default {
  name: "TaskDetails",
  components: {ConfirmDeleteModal, BaseButtons, TaskDetailsModal, CreateTaskModal, DashboardLayout},
  data(){
    return {
      model: TaskRequest.readById,
      showStatus: false,
      showPriority: false,
      showEdit: false,
      status: "Select Status",
      priority: "Select Priority",
      subtaskss: false,
      createModel: TaskRequest.update,
      openTask: false,
      tab1: "Task",
      tab2: "all",
      openNav: false,
      readmodel: SubTaskRequest.readById
    }
  },
  computed:{
    StoreUtils() {
      return StoreUtils
    },
    ...mapState({
      userInfo: state => state.auth.userInfo,
      tasks: state => state.task,
      subtask: state => state.subtask.subtasks,
      projects: state => state.project.projects,
      customerDetails: state => state.customer.customerDetails
    }),
    ongoingTask(){
      let ongoingTask = [];
      this.subtask.forEach((task) => {
        if (task.subTaskStatus === "ONGOING" || task.subTaskStatus === "IN PROGRESS" || task.subTaskStatus === "ACTIVE"){
          ongoingTask.push(task)
        }
      })
      return ongoingTask
    },
    overdueTask(){
      let ongoingTask = [];
      this.subtask.forEach((task) => {
        if (task.subTaskStatus === "OVERDUE"){
          ongoingTask.push(task)
        }
      })
      return ongoingTask
    },
    completedTask(){
      let ongoingTask = [];
      this.subtask.forEach((task) => {
        if (task.subTaskStatus === "COMPLETED"){
          ongoingTask.push(task)
        }
      })
      return ongoingTask
    },
  },
  methods: {
    goToSubTask(subtask){
      this.readmodel.subTaskId = subtask.subTaskId;
      StoreUtils.dispatch(StoreUtils.actions.subtask.readSubTaskById, this.readmodel)
      StoreUtils.commit(StoreUtils.mutations.subtask.updateSubTask, subtask);
      this.openNewModal('.open-task-modal_component')
    },
    getTime(date){
      let preDateTime = new Date(date);
      let newTime = preDateTime.toLocaleTimeString('en-US');
      let hour = newTime.split(":")[0];
      let amPm = newTime.split(" ")[1];
      let seconds = newTime.split(":")[2].replace(amPm,'');

      let noAmPm = newTime.replace(amPm,'');
      let noAmPmSeconds = noAmPm.replace(":"+seconds,'');
      let noSeconds = newTime.replace(":"+seconds,' ');

      if(parseInt(hour)<9){
        newTime = "0"+newTime;
        noAmPm = "0"+noAmPm
        noSeconds = "0"+noSeconds
        noAmPmSeconds = "0"+noAmPmSeconds;
      }
      console.log(newTime); //10:26:00 PM
      console.log(noAmPm); //10:26:00
      console.log(noSeconds); //10:26 PM
      console.log(noAmPmSeconds); //10:26
      return noSeconds
    },
    getDate(date){
      return new Date(date).getDate();
    },
    updateTask(){
      this.createModel.taskStatus = this.tasks.task.taskStatus;
      this.createModel.taskId = this.tasks.task.taskId;
      if (this.status !== "Select Status"){
        this.createModel.taskStatus = this.status.toUpperCase();
      }
      if (this.priority !== "Select Priority"){
        this.createModel.taskPriority = this.priority.toUpperCase();
      }
      store.dispatch("task/updateTask", this.createModel)
    },
    openNewModal(className){
      this.openTask = true;

      document.querySelector(className).style.display = "flex";
      setTimeout(() => {
        document.querySelector(className).style.opacity = 1
      },500  )
    },
    closeNewModal(className){
      this.openTask = false;

      document.querySelector(className).style.opacity = 0;
      setTimeout(() => {
        document.querySelector(className).style.display = "none"
      },500  )
    },
  },
  mounted(){
    console.log(this.tasks.task)
    if (!this.tasks.task.taskName){
      this.model.taskId = this.$route.params.id;
      store.dispatch("task/readTaskId", this.model)
    }
  }
}
</script>

<template>
  <DashboardLayout>
    <main class="shell4_main-wrapper">
      <div class="page-header">
        <div class="padding-small">
          <div class="margin-bottom margin-small">
            <div class="container-large">
              <div class="page-header2_breadcrumb">
                <router-link to="/task" class="breadcrumb-link w-inline-block">
                  <div class="text-size-regular">My Tasks</div>
                </router-link>
                <div class="breadcrumb-divider w-embed"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="CurrentColor" stroke-width="1.5"></path>
                </svg></div>
                <a href="#" class="breadcrumb-link is-active w-inline-block">
                  <div class="text-size-regular text-weight-medium">{{tasks.task.taskName}}</div>
                </a>
              </div>
            </div>
          </div>
          <div class="container-large">
            <div class="dashboard-header-frame">
              <div class="db-team-actions">
                <div class="projectctitlewrapper">
                  <p class="heading-large text-color-gray900">{{tasks.task.taskName}}</p>
                  <p class="body-medium text-color-gray500">{{tasks.task.taskDescription}}</p>
                  <div class="tag-group">
<!--                    <div class="tag-item"><img src="../../assets/images/calendar.svg" loading="lazy" alt="">-->
<!--                      <div class="body-small text-color-gray400" v-if="tasks.task.taskDueDate">{{getDate(tasks.task.taskDueDate)}} {{new Date(tasks.task.taskDueDate).toLocaleString('en-us',{month:'short'})}} {{new Date(tasks.task.taskDueDate).getFullYear()}} - {{getTime(tasks.task.taskDueDate)}}</div>-->
<!--                      <div class="body-small text-color-gray400" v-else>{{getDate(tasks.task.taskCreatedAt)}} {{new Date(tasks.task.taskCreatedAt).toLocaleString('en-us',{month:'short'})}} {{new Date(tasks.task.taskCreatedAt).getFullYear()}} - {{getTime(tasks.task.taskCreatedAt)}}</div>-->
<!--                    </div>-->
                    <div class="tag-item"><img src="../../assets/images/tag.svg" loading="lazy" alt="">
                      <div class="body-small text-color-gray400">UX</div>
                    </div>
                    <div class="tag-item">
                      <div class="created-dot"></div>
                      <div class="body-small text-color-gray400">Created By <span class="creator">Cooper</span></div>
                    </div>
                  </div>
                  <div class="task-status">
                    <div style="display: flex; gap: 16px; align-items: center">
                      <a @click="showStatus = !showStatus; showEdit = true" data-hover="false" data-delay="200" data-w-id="16a5bc85-438b-542c-25ee-5d59302f1e1a" class="dropdown2_component w-dropdown" :class="{'w--open' : showStatus}">
                        <div class="dropdown2_toggle-3 w-dropdown-toggle" :class="{'w--open' : showStatus}">
                          <div class="body-xsmall text-color-gray600">{{status}}</div>
                          <div class="dropdown2_dropdown-icon-3 w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'w--open' : showStatus}">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                          </svg></div>
                        </div>
                        <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown2_dropdown-list-3 w-dropdown-list"  :class="{'w--open' : showStatus}">
                          <a href="#" class="status-item-dropdown w-dropdown-link" @click="status = 'In Progress'">In Progress</a>
                          <a href="#" class="status-item-dropdown w-dropdown-link" @click="status = 'Overdue'">Overdue</a>
                          <a href="#" class="status-item-dropdown w-dropdown-link" @click="status = 'Completed'">Completed</a>
                        </nav>
                      </a>
                      <a @click="showPriority = !showPriority; showEdit = true" data-hover="false" data-delay="200" data-w-id="16a5bc85-438b-542c-25ee-5d59302f1e1a" class="dropdown2_component w-dropdown" :class="{'w--open' : showPriority}">
                      <div class="dropdown2_toggle-3 w-dropdown-toggle" :class="{'w--open' : showPriority}">
                        <div class="body-xsmall text-color-gray600">{{priority}}</div>
                        <div class="dropdown2_dropdown-icon-3 w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'w--open' : showPriority}">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                        </svg></div>
                      </div>
                      <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown2_dropdown-list-3 w-dropdown-list"  :class="{'w--open' : showPriority}">
                        <a href="#" class="status-item-dropdown w-dropdown-link" @click="priority = 'High'">High</a>
                        <a href="#" class="status-item-dropdown w-dropdown-link" @click="priority = 'Medium'">Medium</a>
                        <a href="#" class="status-item-dropdown w-dropdown-link" @click="status = 'Normal'">Normal</a>
                        <a href="#" class="status-item-dropdown w-dropdown-link" @click="status = 'Low'">Low</a>
                      </nav>
                    </a>
                    </div>
                    <div style="display: flex; gap: 16px; align-items: center">
                      <div class="task-status-item"><img src="../../assets/images/Hexagon.svg" loading="lazy" alt="">
                        <div class="body-small" v-if="tasks.task.taskStatus === 'ACTIVE' || tasks.task.taskStatus === 'IN PROGRESS' || tasks.task.taskStatus === 'ONGOING'">In Progress</div>
                        <div class="body-small" v-else-if="tasks.task.taskStatus === 'OVERDUE'">Overdue</div>
                        <div class="body-small" v-else>Completed</div>
                      </div>
                      <div class="task-status-item"><img src="../../assets/images/Hexagon.svg" loading="lazy" alt="">
                        <div class="body-small" v-if="tasks.task.taskPriority === 'HIGH'">High</div>
                        <div class="body-small" v-else-if="tasks.task.taskPriority === 'MEDIUM'">Medium</div>
                        <div class="body-small" v-else-if="tasks.task.taskPriority === 'NORMAL'">Normal</div>
                        <div class="body-small" v-else>Low</div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="div-block-17">
                  <a @click="showEdit = !showEdit" data-w-id="f306afa8-af5b-a42f-b22c-6c85f31873f2" href="#" class="button is-secondary is-icon w-inline-block">
                    <div class="w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="21" height="21" preserveaspectratio="xMidYMid meet" viewbox="0 0 24 24">
                      <path fill="currentColor" d="M14 11c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1h9c.55 0 1 .45 1 1zM3 7c0 .55.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm7 8c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1zm8.01-2.13l.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71l-2.12-2.12zm-.71.71l-5.16 5.16c-.09.09-.14.21-.14.35v1.41c0 .28.22.5.5.5h1.41c.13 0 .26-.05.35-.15l5.16-5.16l-2.12-2.11z"></path>
                    </svg></div>
                    <div><span v-if="showStatus || showEdit">Close</span><span v-else>Edit</span></div>
                  </a>
                </div>
              </div>
              <div class="task-details-edit-state" style="display: none" :class="{'edit--open' : showEdit}">
                <div class="projectctitlewrapper">
                  <div class="form-block-5 w-form">
                    <form @submit.prevent="updateTask" id="email-form-4" name="email-form-4" data-name="Email Form 4" method="get" class="project-form-block" data-wf-page-id="653e6fc295e852a1e236790c" data-wf-element-id="8596f1a5-bd40-c57d-7857-5c668cf48483">
                      <div class="form-input-block">
                        <label for="name-3" class="label-medium">Task name</label>
                        <input type="text" class="form-input w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Enter Task name" v-model="createModel.taskName" id="name-3" required="">
                      </div>
                      <div class="form-input-block">
                        <label for="name-3" class="label-medium">Task Description</label>
                        <input type="text" class="form-input w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Enter Task description" v-model="createModel.taskDescription" id="name-3" required="">
                      </div>
                      <input type="submit" v-if="!tasks.loading" value="Save changes" data-wait="Please wait..." data-w-id="8596f1a5-bd40-c57d-7857-5c668cf4848a" class="button w-button">
                      <base-buttons small v-else/>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section_shell4-layout">
        <div class="div-block-40">
          <div class="container-large">
            <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" class="details-tabs w-tabs">
              <div class="project-tabs-menu w-tab-menu">
                <a data-w-tab="Tab 1" class="tab-link w-inline-block w-tab-link" :class="{'w--current' : tab1 === 'Task'}" @click="tab1 = 'Task'">
                  <div>SubTasks</div>
                </a>
                <a data-w-tab="Tab 2" class="tab-link w-inline-block w-tab-link" :class="{'w--current' : tab1 === 'Comment'}" @click="tab1 = 'Comment'">
                  <div>Comments</div>
                </a>
              </div>
              <div class="w-tab-content">
                <div data-w-tab="Tab 1" class="w-tab-pane" :class="{'w--tab-active' : tab1 === 'Task'}">
                  <div>
                    <a href="#" class="button absolute w-button" @click="subtaskss = true;openNewModal('.create-task-modal_component')">Add Subtask</a>
                    <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" class="project-sub-tabs w-tabs">
                      <div class="task-tab-menu w-tab-menu">
                        <a data-w-tab="Tab 1" class="task-tab-button w-inline-block w-tab-link" :class="{'w--current' : tab2 === 'all'}" @click="tab2 = 'all'">
                          <div>All Tasks</div>
                        </a>
                        <a data-w-tab="Tab 2" class="task-tab-button w-inline-block w-tab-link" :class="{'w--current' : tab2 === 'overdue'}" @click="tab2 = 'overdue'">
                          <div>Overdue</div>
                        </a>
                        <a data-w-tab="Tab 3" class="task-tab-button w-inline-block w-tab-link" :class="{'w--current' : tab2 === 'ongoing'}" @click="tab2 = 'ongoing'">
                          <div>Ongoing</div>
                        </a>
                        <a data-w-tab="Tab 4" class="task-tab-button w-inline-block w-tab-link" :class="{'w--current' : tab2 === 'completed'}" @click="tab2 = 'completed'">
                          <div>Completed</div>
                        </a>
                      </div>
                      <div class="task-content-pane w-tab-content">
                        <div data-w-tab="Tab 1" class="w-tab-pane" :class="{'w--tab-active' : tab2 === 'all'}">
                          <div id="w-node-_5f05cba8-8716-e90e-8f2d-62bdf9c8258c-e236790c" class="tasks" v-if="subtask.length > 0">
                            <div class="task-list-item" v-for="(subtasks, index) in subtask" :key="index">
                              <div class="task-list-text"  @click="goToSubTask(subtasks)">
                                <div class="form-checkbox-icon"></div>
                                <p class="body-small text-color-gray600">{{subtasks.subTaskName}}</p>
                              </div>
                              <div class="div-block-16">
                                <div class="task-tag is-ongoing">{{subtasks.subTaskStatus}}</div>
                                <div class="task-comments"><img loading="lazy" src="../../assets/images/ChatDots.svg" alt="">
                                  <div>3</div>
                                </div><img loading="lazy" src="../../assets/images/avatar.jpg" alt="" class="user-avatar">
                                <div data-delay="200" data-hover="false" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c8259a" class="dropdown1_component-2 w-dropdown" :class="{'w--open' : openNav}" @click="openNav = !openNav">
                                  <div class="more_toggle w-dropdown-toggle" :class="{'w--open' : openNav}"><img loading="lazy" src="../../assets/images/more-horizontal.svg" alt=""></div>
                                  <nav class="more_dropdown-list w-dropdown-list" :class="{'w--open' : openNav}">
                                    <a href="#" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c8259e" class="dropdown1_dropdown-link-2 w-dropdown-link" @click="openNewModal('.open-task-modal_component')">View Subtask</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link" @click="openNewModal('.confirmdelete-modal_component')">Delete Subtask</a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_5f05cba8-8716-e90e-8f2d-62bdf9c8265c-e236790c" class="empty-state" v-else><img loading="lazy" src="../../assets/images/TasksEmptyState.svg" alt="" class="empty-state-image">
                            <p class="body-medium text-align-center text-color-gray600">There are no subtasks</p>
                          </div>
                        </div>
                        <div data-w-tab="Tab 2" class="w-tab-pane" :class="{'w--tab-active' : tab2 === 'overdue'}">
                          <div id="w-node-_5f05cba8-8716-e90e-8f2d-62bdf9c8258c-e236790c" class="tasks" v-if="overdueTask.length > 0">
                            <div class="task-list-item" v-for="(subtasks, index) in overdueTask" :key="index">
                              <div class="task-list-text" @click="goToSubTask(subtasks)">
                                <div class="form-checkbox-icon"></div>
                                <p class="body-small text-color-gray600">{{subtasks.subTaskName}}</p>
                              </div>
                              <div class="div-block-16">
                                <div class="task-tag is-ongoing">{{subtasks.subTaskStatus}}</div>
                                <div class="task-comments"><img loading="lazy" src="../../assets/images/ChatDots.svg" alt="">
                                  <div>3</div>
                                </div><img loading="lazy" src="../../assets/images/avatar.jpg" alt="" class="user-avatar">
                                <div data-delay="200" data-hover="false" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c8259a" class="dropdown1_component-2 w-dropdown" :class="{'w--open' : openNav}" @click="openNav = !openNav">
                                  <div class="more_toggle w-dropdown-toggle" :class="{'w--open' : openNav}"><img loading="lazy" src="../../assets/images/more-horizontal.svg" alt=""></div>
                                  <nav class="more_dropdown-list w-dropdown-list" :class="{'w--open' : openNav}">
                                    <a href="#" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c8259e" class="dropdown1_dropdown-link-2 w-dropdown-link">View Subtask</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link" @click="openNewModal('.confirmdelete-modal_component')">Delete Subtask</a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_5f05cba8-8716-e90e-8f2d-62bdf9c8265c-e236790c" class="empty-state" v-else><img loading="lazy" src="../../assets/images/TasksEmptyState.svg" alt="" class="empty-state-image">
                            <p class="body-medium text-align-center text-color-gray600" @click="openNewModal('.confirmdelete-modal_component')">There are no subtasks</p>
                          </div>
                        </div>
                        <div data-w-tab="Tab 3" class="w-tab-pane" :class="{'w--tab-active' : tab2 === 'ongoing'}">
                          <div id="w-node-_5f05cba8-8716-e90e-8f2d-62bdf9c8258c-e236790c" class="tasks" v-if="ongoingTask.length > 0">
                            <div class="task-list-item" v-for="(subtasks, index) in ongoingTask" :key="index">
                              <div class="task-list-text" @click="goToSubTask(subtasks)">
                                <div class="form-checkbox-icon"></div>
                                <p class="body-small text-color-gray600">{{subtasks.subTaskName}}</p>
                              </div>
                              <div class="div-block-16">
                                <div class="task-tag is-ongoing">{{subtasks.subTaskStatus}}</div>
                                <div class="task-comments"><img loading="lazy" src="../../assets/images/ChatDots.svg" alt="">
                                  <div>3</div>
                                </div><img loading="lazy" src="../../assets/images/avatar.jpg" alt="" class="user-avatar">
                                <div data-delay="200" data-hover="false" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c8259a" class="dropdown1_component-2 w-dropdown" :class="{'w--open' : openNav}" @click="openNav = !openNav">
                                  <div class="more_toggle w-dropdown-toggle" :class="{'w--open' : openNav}"><img loading="lazy" src="../../assets/images/more-horizontal.svg" alt=""></div>
                                  <nav class="more_dropdown-list w-dropdown-list" :class="{'w--open' : openNav}">
                                    <a href="#" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c8259e" class="dropdown1_dropdown-link-2 w-dropdown-link">View Subtask</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link" @click="openNewModal('.confirmdelete-modal_component')">Delete Subtask</a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_5f05cba8-8716-e90e-8f2d-62bdf9c8265c-e236790c" class="empty-state" v-else><img loading="lazy" src="../../assets/images/TasksEmptyState.svg" alt="" class="empty-state-image">
                            <p class="body-medium text-align-center text-color-gray600">There are no subtasks</p>
                          </div>
                        </div>
                        <div data-w-tab="Tab 4" class="w-tab-pane" :class="{'w--tab-active' : tab2 === 'completed'}">
                          <div id="w-node-_5f05cba8-8716-e90e-8f2d-62bdf9c8258c-e236790c" class="tasks" v-if="completedTask.length > 0">
                            <div class="task-list-item" v-for="(subtasks, index) in completedTask" :key="index">
                              <div class="task-list-text" @click="goToSubTask(subtasks)">
                                <div class="form-checkbox-icon"></div>
                                <p class="body-small text-color-gray600">{{subtasks.subTaskName}}</p>
                              </div>
                              <div class="div-block-16">
                                <div class="task-tag is-ongoing">{{subtasks.subTaskStatus}}</div>
                                <div class="task-comments"><img loading="lazy" src="../../assets/images/ChatDots.svg" alt="">
                                  <div>3</div>
                                </div><img loading="lazy" src="../../assets/images/avatar.jpg" alt="" class="user-avatar">
                                <div data-delay="200" data-hover="false" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c8259a" class="dropdown1_component-2 w-dropdown" :class="{'w--open' : openNav}" @click="openNav = !openNav">
                                  <div class="more_toggle w-dropdown-toggle" :class="{'w--open' : openNav}"><img loading="lazy" src="../../assets/images/more-horizontal.svg" alt=""></div>
                                  <nav class="more_dropdown-list w-dropdown-list" :class="{'w--open' : openNav}">
                                    <a href="#" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c8259e" class="dropdown1_dropdown-link-2 w-dropdown-link">View Subtask</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link" @click="openNewModal('.confirmdelete-modal_component')">Delete Subtask</a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_5f05cba8-8716-e90e-8f2d-62bdf9c8265c-e236790c" class="empty-state" v-else><img loading="lazy" src="../../assets/images/TasksEmptyState.svg" alt="" class="empty-state-image">
                            <p class="body-medium text-align-center text-color-gray600">There are no subtasks</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 2" class="w-tab-pane" :class="{'w--tab-active' : tab1 === 'Comment'}">
                  <div class="comment-section">
                    <div class="comments-group">
                      <div class="comment-item"><img sizes="30px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" alt="" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" class="comment-image">
                        <div class="comment-text">
                          <p class="body-small text-color-gray600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                          <div class="comment-details">
                            <div class="body-small text-color-gray600">By Sydney Cooper</div>
                            <div class="body-small text-color-gray400">10 mins ago</div>
                          </div>
                        </div>
                      </div>
                      <div class="comment-item"><img loading="lazy" src="../../assets/images/avatar.jpg" alt="" class="comment-image">
                        <div class="comment-text">
                          <p class="body-small text-color-gray600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
                          <div class="comment-details">
                            <div class="body-small text-color-gray600">By Sydney Cooper</div>
                            <div class="body-small text-color-gray400">10 mins ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="add-comment"><img sizes="30px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" alt="" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" class="comment-image">
                      <div class="form-block-3 w-form">
                        <form id="email-form-3" name="email-form-3" data-name="Email Form 3" method="get" class="comment-form" data-wf-page-id="653e6fc295e852a1e236790c" data-wf-element-id="c7ee3730-31ea-06d1-18cb-b76e874da2f3"><input type="text" class="text-field w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Write your message" id="name-2">
                          <a href="#" class="button w-button">Send</a>
                        </form>
                        <div class="w-form-done">
                          <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div class="w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                        <img src="../../assets/images/avatar.jpg" height="347" width="340"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <CreateTaskModal :subtask="subtaskss" v-if="openTask"></CreateTaskModal>
    <ConfirmDeleteModal module="subtask"/>
    <TaskDetailsModal/>
  </DashboardLayout>
</template>

<style scoped>
.edit--open{
  display: block !important;
}
.dropdown2_dropdown-list-3.w--open {
  transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) !important;
  opacity: 1;
  transform-style: preserve-3d !important;
}
</style>