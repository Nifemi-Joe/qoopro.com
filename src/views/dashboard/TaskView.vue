<template>
<DashboardLayout>
  <main class="shell4_main-wrapper">
    <div class="page-header">
      <div class="padding-small">
        <div class="container-large">
          <div class="task-header">
            <div class="db-header-text">
              <div class="header-text">
                <p class="heading-large text-color-gray900">Tasks</p>
                <p class="body-medium text-color-gray500">Hi {{userInfo.customerFirstName}} 👋 Get Started on your Tasks Today!</p>
              </div>
            </div>
            <router-link to="/create-project" v-if="projects.length <= 0" data-w-id="f306afa8-af5b-a42f-b22c-6c85f31873f2" href="#" class="button is-icon w-inline-block">
              <div class="w-embed" style="display: flex"><svg width="21" height="21" viewbox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 5.25V15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M5.25 10.5H15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></div>
              <div>Add Tasks</div>
            </router-link>
            <a v-else @click="openNewModal('.create-task-modal_component')" data-w-id="f306afa8-af5b-a42f-b22c-6c85f31873f2" href="#" class="button is-icon w-inline-block">
              <div class="w-embed" style="display: flex"><svg width="21" height="21" viewbox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 5.25V15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M5.25 10.5H15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></div>
              <div>Add Tasks</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="taskwrapper">
      <div class="div-block-33">
        <div class="container-large">
          <div id="w-node-_5a2fb266-a965-cf6c-7a77-946043c2de34-c8c2e92a" class="w-layout-grid shell4-layout_component">
            <div id="w-node-b3dabba4-892a-3241-f4d8-ab3b5084e431-c8c2e92a" data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" class="tabs-2 w-tabs">
              <div class="task-tab-menu w-tab-menu">
                <a @click="openAllTab" data-w-tab="Tab 1" :class="all ? 'task-tab-button w-inline-block w-tab-link w--current' :'task-tab-button w-inline-block w-tab-link'">
                  <div>All Tasks</div>
                </a>
                <a @click="openOverdueTab" data-w-tab="Tab 2" :class="overdue ? 'task-tab-button w-inline-block w-tab-link w--current' :'task-tab-button w-inline-block w-tab-link'">
                  <div>Overdue</div>
                </a>
                <a @click="openOngoingTab" data-w-tab="Tab 3" :class="ongoing ? 'task-tab-button w-inline-block w-tab-link w--current' :'task-tab-button w-inline-block w-tab-link'">
                  <div>Ongoing</div>
                </a>
                <a @click="openCompletedTab" data-w-tab="Tab 4" :class="completed ? 'task-tab-button w-inline-block w-tab-link w--current' :'task-tab-button w-inline-block w-tab-link'">
                  <div>Completed</div>
                </a>
              </div>
              <div class="task-content-pane w-tab-content">
                <div data-w-tab="Tab 1" :class="all ? 'w-tab-pane w--tab-active' : 'w-tab-pane'">
                  <div id="w-node-b3dabba4-892a-3241-f4d8-ab3b5084e444-c8c2e92a" class="tasks" v-if="tasks.tasks.length > 0">
                    <div @click="openNewModal('.open-task-modal_component');goToSingleTask(task)" class="task-list-item" v-for="task in tasks.tasks" :key="task.taskId">
                      <div class="task-list-text">
                        <div class="form-checkbox-icon"></div>
                        <p class="body-small text-color-gray600">{{task.taskName}}</p>
                      </div>
                      <div class="div-block-16">
                        <div class="task-tag is-ongoing">{{task.taskStatus}}</div>
                        <div class="task-comments"><img loading="lazy" src="../../assets/images/ChatDots.svg" alt="">
                          <div>3</div>
                        </div><img loading="lazy" src="../../assets/images/avatar.jpg" alt="" class="user-avatar">
                        <div data-delay="200" data-hover="false" data-w-id="b3dabba4-892a-3241-f4d8-ab3b5084e452" class="dropdown1_component-2 w-dropdown">
                          <div class="more_toggle w-dropdown-toggle">
                            <img loading="lazy" src="../../assets/images/more-horizontal.svg" alt="">
                            <base-buttons v-if="false"/>
                          </div>

                          <nav class="more_dropdown-list w-dropdown-list">
                            <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option One</a>
                            <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Two</a>
                            <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Three</a>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-b3dabba4-892a-3241-f4d8-ab3b5084e514-c8c2e92a" class="empty-state" v-else><img loading="lazy" src="../../assets/images/TasksEmptyState.svg" alt="">
                    <p class="body-medium text-align-center text-color-gray600">There are no new tasks</p>
                  </div>
                </div>
                <div data-w-tab="Tab 2" :class="overdue ? 'w-tab-pane w--tab-active' : 'w-tab-pane'">
                  <div id="w-node-b3dabba4-892a-3241-f4d8-ab3b5084e444-c8c2e92a" class="tasks" v-if="overdueTask.length > 0">
                    <div @click="openNewModal('.open-task-modal_component');goToSingleTask(task)" class="task-list-item" v-for="task in overdueTask" :key="task.taskId">
                      <div class="task-list-text">
                        <div class="form-checkbox-icon"></div>
                        <p class="body-small text-color-gray600">{{task.taskName}}</p>
                      </div>
                      <div class="div-block-16">
                        <div class="task-tag is-ongoing">{{task.taskStatus}}</div>
                        <div class="task-comments"><img loading="lazy" src="../../assets/images/ChatDots.svg" alt="">
                          <div>3</div>
                        </div><img loading="lazy" src="../../assets/images/avatar.jpg" alt="" class="user-avatar">
                        <div data-delay="200" data-hover="false" data-w-id="b3dabba4-892a-3241-f4d8-ab3b5084e452" class="dropdown1_component-2 w-dropdown">
                          <div class="more_toggle w-dropdown-toggle">
                            <img loading="lazy" src="../../assets/images/more-horizontal.svg" alt="">
                            <base-buttons v-if="false"/>
                          </div>

                          <nav class="more_dropdown-list w-dropdown-list">
                            <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option One</a>
                            <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Two</a>
                            <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Three</a>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-b3dabba4-892a-3241-f4d8-ab3b5084e514-c8c2e92a" class="empty-state" v-else><img loading="lazy" src="../../assets/images/TasksEmptyState.svg" alt="">
                    <p class="body-medium text-align-center text-color-gray600">There are no new tasks</p>
                  </div>
                </div>
                <div data-w-tab="Tab 3" :class="ongoing ? 'w-tab-pane w--tab-active' : 'w-tab-pane'">
                  <div id="w-node-b3dabba4-892a-3241-f4d8-ab3b5084e444-c8c2e92a" class="tasks" v-if="ongoingTask.length > 0">
                    <div @click="openNewModal('.open-task-modal_component')" class="task-list-item" v-for="task in ongoingTask" :key="task.taskId">
                      <div class="task-list-text">
                        <div class="form-checkbox-icon"></div>
                        <p class="body-small text-color-gray600">{{task.taskName}}</p>
                      </div>
                      <div class="div-block-16">
                        <div class="task-tag is-ongoing">{{task.taskStatus}}</div>
                        <div class="task-comments"><img loading="lazy" src="../../assets/images/ChatDots.svg" alt="">
                          <div>3</div>
                        </div><img loading="lazy" src="../../assets/images/avatar.jpg" alt="" class="user-avatar">
                        <div data-delay="200" data-hover="false" data-w-id="b3dabba4-892a-3241-f4d8-ab3b5084e452" class="dropdown1_component-2 w-dropdown">
                          <div class="more_toggle w-dropdown-toggle">
                            <img loading="lazy" src="../../assets/images/more-horizontal.svg" alt="">
                            <base-buttons v-if="false"/>
                          </div>

                          <nav class="more_dropdown-list w-dropdown-list">
                            <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option One</a>
                            <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Two</a>
                            <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Three</a>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-b3dabba4-892a-3241-f4d8-ab3b5084e514-c8c2e92a" class="empty-state" v-else><img loading="lazy" src="../../assets/images/TasksEmptyState.svg" alt="">
                    <p class="body-medium text-align-center text-color-gray600">There are no new tasks</p>
                  </div>
                </div>
                <div data-w-tab="Tab 4" :class="completed ? 'w-tab-pane w--tab-active' : 'w-tab-pane'">
                  <div id="w-node-b3dabba4-892a-3241-f4d8-ab3b5084e444-c8c2e92a" class="tasks" v-if="completedTask.length > 0">
                    <div @click="openNewModal('.open-task-modal_component');goToSingleTask(task)" class="task-list-item" v-for="task in completedTask" :key="task.taskId">
                      <div class="task-list-text">
                        <div class="form-checkbox-icon"></div>
                        <p class="body-small text-color-gray600">{{task.taskName}}</p>
                      </div>
                      <div class="div-block-16">
                        <div class="task-tag is-ongoing">{{task.taskStatus}}</div>
                        <div class="task-comments"><img loading="lazy" src="../../assets/images/ChatDots.svg" alt="">
                          <div>3</div>
                        </div><img loading="lazy" src="../../assets/images/avatar.jpg" alt="" class="user-avatar">
                        <div data-delay="200" data-hover="false" data-w-id="b3dabba4-892a-3241-f4d8-ab3b5084e452" class="dropdown1_component-2 w-dropdown">
                          <div class="more_toggle w-dropdown-toggle">
                            <img loading="lazy" src="../../assets/images/more-horizontal.svg" alt="">
                            <base-buttons v-if="false"/>
                          </div>

                          <nav class="more_dropdown-list w-dropdown-list">
                            <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option One</a>
                            <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Two</a>
                            <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Three</a>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-b3dabba4-892a-3241-f4d8-ab3b5084e514-c8c2e92a" class="empty-state" v-else><img loading="lazy" src="../../assets/images/TasksEmptyState.svg" alt="">
                    <p class="body-medium text-align-center text-color-gray600">There are no new tasks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <TaskDetailsModal/>
</DashboardLayout>
</template>

<script>
import DashboardLayout from "@/layout/DashboardLayout";
import TaskDetailsModal from "@/components/modals/TaskDetailsModal";
import {mapState} from "vuex";
import BaseButtons from "@/components/buttons/BaseButtons";
import StoreUtils from "@/util/baseUtils/StoreUtils";
export default {
  name: "TaskView",
  components: {BaseButtons, TaskDetailsModal, DashboardLayout},
  data() {
    return {
      task: false,
      all: true,
      ongoing:false,
      overdue: false,
      completed: false
    }
  },
  computed:{
    StoreUtils() {
      return StoreUtils
    },
    ...mapState({
      userInfo: state => state.auth.userInfo,
      tasks: state => state.task,
      projects: state => state.project.projects,
      customerDetails: state => state.customer.customerDetails
    }),
    ongoingTask(){
      let ongoingTask = [];
      this.tasks.tasks.forEach((task) => {
        if (task.taskStatus === "ONGOING"){
          ongoingTask.push(task)
        }
      })
      return ongoingTask
    },
    overdueTask(){
      let ongoingTask = [];
      this.tasks.tasks.forEach((task) => {
        if (task.taskStatus === "OVERDUE"){
          ongoingTask.push(task)
        }
      })
      return ongoingTask
    },
    completedTask(){
      let ongoingTask = [];
      this.tasks.tasks.forEach((task) => {
        if (task.taskStatus === "COMPLETED"){
          ongoingTask.push(task)
        }
      })
      return ongoingTask
    },
  },
  methods: {
    goToSingleTask(task){
      StoreUtils.commit(StoreUtils.mutations.task.updateTask, task)
      StoreUtils.dispatch(StoreUtils.actions.task.readTaskById, {taskId: task.taskId})
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
    openModal() {
      this.task = true;
    },
    closeModal(){
      this.task = false;
    },
    openAllTab(){
      this.all = true;
      this.ongoing = false;
      this.overdue = false;
      this.completed = false;
    },
    openOngoingTab(){
      this.all = false;
      this.ongoing = true;
      this.overdue = false;
      this.completed = false;
    },
    openOverdueTab(){
      this.all = false;
      this.ongoing = false;
      this.overdue = true;
      this.completed = false;
    },
    openCompletedTab(){
      this.all = false;
      this.ongoing = false;
      this.overdue = false;
      this.completed = true;
    }
  }
}
</script>

<style scoped>

</style>