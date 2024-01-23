<script>
import DashboardLayout from "@/layout/DashboardLayout.vue";
import StoreUtils from "@/util/baseUtils/StoreUtils";
import {mapState} from "vuex";
import CreateTaskModal from "@/components/modals/CreateTaskModal.vue";
import TaskDetailsModal from "@/components/modals/TaskDetailsModal.vue";
import TeamRequest from "@/model/request/TeamRequest";
import ProjectRequest from "@/model/request/ProjectRequest";

export default {
  name: "ProjectDetailView",
  components: { TaskDetailsModal, CreateTaskModal, DashboardLayout},
  computed:{
    ...mapState(["project", "task","teams"]),
    calculatePosition(){
      return Math.round(this.allMembers.length/5)
    }
  },
  data(){
    return{
      allMembers: [],
      show: false,
      id: "",
      currentTab: "Tab 1",
      isShowing: false,
      tab: "Task",
      teamModel: TeamRequest.readById,
      model: ProjectRequest.update,
      startCount: 0,
      numberToDisplay: 5
    }
  },
  methods: {
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
    update(){
      this.model.projectId = this.$route.params.id;
      StoreUtils.dispatch(StoreUtils.actions.project.updateProject, this.model)
    }
  },
  mounted() {
    console.log(this.$route.params.id)
    let id = this.$route.params.id;
    this.$store.dispatch("project/readProjectId", {projectId : id})
    this.$store.dispatch("project/readProjectId", {projectId : id})
    StoreUtils.dispatch(StoreUtils.actions.project.readProjectById, {projectId: id});
    if (this.teams.teams.length > 0){
      this.teams.teams.forEach((team) => {
        this.teamModel.teamId = team.teamId;
        StoreUtils.dispatch(StoreUtils.actions.team.readMemebersById, this.teamModel).then((res) => {
          if(res.responseCode === "00" && res.data.length > 0){
            this.allMembers.push(res.data[0])
          }
        })
      })
    }

  },
  watch: {
    teams(){
      if (this.teams.teams.length > 0){
        this.teams.teams.forEach((team) => {
          this.teamModel.teamId = team.teamId;
          StoreUtils.dispatch(StoreUtils.actions.team.readMemebersById, this.teamModel).then((res) => {
            if(res.responseCode === "00"){
              this.allMembers.push(res.data)
            }
          })
        })
      }
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
                <router-link to="/projects" class="breadcrumb-link w-inline-block">
                  <div class="text-size-regular">Projects</div>
                </router-link>
                <div class="breadcrumb-divider w-embed"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="CurrentColor" stroke-width="1.5"></path>
                </svg></div>
                <a href="#" class="breadcrumb-link is-active w-inline-block">
                  <div class="text-size-regular text-weight-medium">{{project.project.projectName}}</div>
                </a>
              </div>
            </div>
          </div>
          <div class="container-large">
            <div class="dashboard-header-frame">
              <div style="display:flex" class="db-team-actions">
                <div class="projectctitlewrapper">
                  <p class="heading-large text-color-gray900">{{project.project.projectName}}</p>
                  <div class="tag-group">
                    <div class="tag-item"><img src="../../assets/images/calendar.svg" loading="lazy" alt="">
<!--                      <div class="body-small text-color-gray400" v-if="project.project.projectDueDate">{{getDate(project.project.projectDueDate)}} {{new Date(project.project.projectDueDate).toLocaleString('en-us',{month:'short'})}} {{new Date(project.project.projectDueDate).getFullYear()}} - {{getTime(project.project.projectDueDate)}}</div>-->
<!--                      <div class="body-small text-color-gray400" v-else>{{getDate(project.project.projectCreatedAt)}} {{new Date(project.project.projectCreatedAt).toLocaleString('en-us',{month:'short'})}} {{new Date(project.project.projectCreatedAt).getFullYear()}} - {{getTime(project.project.projectCreatedAt)}}</div>-->

                    </div>
                    <div class="tag-item"><img src="../../assets/images/tag.svg" loading="lazy" alt="">
                      <div class="body-small text-color-gray400">UX</div>
                    </div>
                    <div class="tag-item">
                      <div class="created-dot"></div>
                      <div class="body-small text-color-gray400">Created By <span class="creator">Cooper</span></div>
                    </div>
                  </div>
                  <p class="body-medium text-color-gray500">{{project.project.projectDescription}}</p>
                </div>
                <div class="div-block-17">
                  <router-link to="/edit-project" data-w-id="f306afa8-af5b-a42f-b22c-6c85f31873f2" href="#" class="button is-secondary is-icon w-inline-block">
                    <div class="w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="21" height="21" preserveaspectratio="xMidYMid meet" viewbox="0 0 24 24">
                      <path fill="currentColor" d="M14 11c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1h9c.55 0 1 .45 1 1zM3 7c0 .55.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm7 8c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1zm8.01-2.13l.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71l-2.12-2.12zm-.71.71l-5.16 5.16c-.09.09-.14.21-.14.35v1.41c0 .28.22.5.5.5h1.41c.13 0 .26-.05.35-.15l5.16-5.16l-2.12-2.11z"></path>
                    </svg></div>
                    <div>Edit</div>
                  </router-link>
                </div>
              </div>
              <div style="display:none" class="project-details-edit">
                <div class="projectctitlewrapper">
                  <div class="form-block-5 w-form">
                    <form id="email-form-4" name="email-form-4" data-name="Email Form 4" method="post" class="project-form-block" data-wf-page-id="6535a29c8dd721745205c0d9" data-wf-element-id="8596f1a5-bd40-c57d-7857-5c668cf48483">
                      <div class="form-input-block"><label for="name-3" class="label-medium">Project name</label><input type="text" class="form-input w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Sample Project name" id="name-3" required=""></div>
                      <div class="form-input-block"><label for="email" class="label-medium">Project details</label><textarea id="field-3" name="field-3" maxlength="5000" data-name="Field 3" placeholder="This scrum project aims to develop a new software application that will revolutionize the way users interact with their devices. This project will involve a team of developers, designers, and project managers who will work together to create a product." required="" class="form-input is-text-area w-input"></textarea></div>
                      <div class="button-group"><input type="submit" value="Cancel" data-wait="Please wait..." data-w-id="8596f1a5-bd40-c57d-7857-5c668cf4848a" class="button is-alternate w-button"><input type="submit" value="Save changes" data-wait="Please wait..." class="button w-button"></div>
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
                <a data-w-tab="Tab 1" class="tab-link w-inline-block w-tab-link" :class="{'w--current' : tab === 'Task'}" @click="tab = 'Task';">
                  <div>Tasks</div>
                </a>
                <a data-w-tab="Tab 2" class="tab-link w-inline-block w-tab-link" :class="{'w--current' : tab === 'Team'}" @click="tab = 'Team';">
                  <div>Team Members</div>
                </a>
              </div>
              <div class="w-tab-content">
                <div data-w-tab="Tab 1" class="w-tab-pane" :class="{'w--tab-active' : tab === 'Task'}">
                  <div>
                    <a data-w-id="f65a24b2-aed2-4752-2bad-1d8a7ef2d1d4" href="#" class="button absolute w-button" @click="openNewModal('.create-task-modal_component')">Add Tasks</a>
                    <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" class="tabs-2 w-tabs">
                      <div class="task-tab-menu w-tab-menu">
                        <a data-w-tab="Tab 1" class="task-tab-button w-inline-block w-tab-link" @click="currentTab = 'Tab 1'" :class="{'w--current' : currentTab === 'Tab 1'}">
                          <div>All Tasks</div>
                        </a>
                        <a data-w-tab="Tab 2" class="task-tab-button w-inline-block w-tab-link" @click="currentTab = 'Tab 2'" :class="{'w--current' : currentTab === 'Tab 2'}">
                          <div>Overdue</div>
                        </a>
                        <a data-w-tab="Tab 3" class="task-tab-button w-inline-block w-tab-link" @click="currentTab = 'Tab 3'" :class="{'w--current' : currentTab === 'Tab 3'}">
                          <div>Ongoing</div>
                        </a>
                        <a data-w-tab="Tab 4" class="task-tab-button w-inline-block w-tab-link" @click="currentTab = 'Tab 4'" :class="{'w--current' : currentTab === 'Tab 4'}">
                          <div>Completed</div>
                        </a>
                      </div>
                      <div class="task-content-pane w-tab-content">
                        <div data-w-tab="Tab 1" class="w-tab-pane" :class="{'w--tab-active' : currentTab === 'Tab 1'}">
                          <div id="w-node-_5f05cba8-8716-e90e-8f2d-62bdf9c8258c-5205c0d9" class="tasks" v-if="task.tasks.length > 0">
                            <div class="task-list-item" v-for="(tasks, index) in task.tasks" :key="index">
                              <div class="task-list-text" @click="openNewModal('.open-task-modal_component')">
                                <div class="form-checkbox-icon"></div>
                                <p class="body-small text-color-gray600">{{tasks.taskName}}</p>
                              </div>
                              <div class="div-block-16">
                                <div class="task-tag is-ongoing">{{tasks.taskStatus}}</div>
                                <div class="task-comments"><img alt="" loading="lazy" src="../../assets/images/ChatDots.svg">
                                  <div>3</div>
                                </div><img alt="" loading="lazy" src="../../assets/images/avatar.jpg" class="user-avatar">
                                <div data-delay="200" data-hover="false" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c8259a" class="dropdown1_component-2 w-dropdown" @click="isShowing = !isShowing; id = tasks.taskId" :class="{'w--open' : isShowing && id === tasks.taskId}">
                                  <div class="more_toggle w-dropdown-toggle" :class="{'w--open' : isShowing && id === tasks.taskId}"><img alt="" loading="lazy" src="../../assets/images/more-horizontal.svg"></div>
                                  <nav class="more_dropdown-list w-dropdown-list" :class="{'w--open' : isShowing && id === tasks.taskId}">
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option One</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Two</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Three</a>
                                  </nav>
                                </div>
                              </div>
                            </div >
                          </div>
                          <div id="w-node-_5f05cba8-8716-e90e-8f2d-62bdf9c8265c-5205c0d9" class="empty-state" v-else><img alt="" loading="lazy" src="../../assets/images/TasksEmptyState.svg">
                            <p class="body-medium text-align-center text-color-gray600">There are no new tasks</p>
                          </div>
                        </div>
                        <div data-w-tab="Tab 2" class="w-tab-pane" :class="{'w--tab-active' : currentTab === 'Tab 2'}">
                          <div class="tasks">
                            <div class="task-list-item">
                              <div class="task-list-text">
                                <div class="form-checkbox-icon"></div>
                                <p class="body-small text-color-gray600">Increase contrast and accessibility dark mode as implemented in design</p>
                              </div>
                              <div class="div-block-16">
                                <div class="task-tag is-overdue">Overdue</div>
                                <div class="task-comments"><img alt="" loading="lazy" src="../../assets/images/ChatDots.svg">
                                  <div>7</div>
                                </div><img alt="" loading="lazy" src="../../assets/images/avatar.jpg" class="user-avatar">
                                <div data-delay="200" data-hover="false" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c8266f" class="dropdown1_component-2 w-dropdown">
                                  <div class="more_toggle w-dropdown-toggle"><img alt="" loading="lazy" src="../../assets/images/more-horizontal.svg"></div>
                                  <nav class="more_dropdown-list w-dropdown-list">
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option One</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Two</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Three</a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                            <div class="task-list-item">
                              <div class="task-list-text">
                                <div class="form-checkbox-icon"></div>
                                <p class="body-small text-color-gray600">Increase contrast and accessibility dark mode as implemented in design</p>
                              </div>
                              <div class="div-block-16">
                                <div class="task-tag is-overdue">Overdue</div>
                                <div class="task-comments"><img alt="" loading="lazy" src="../../assets/images/ChatDots.svg">
                                  <div>3</div>
                                </div><img alt="" loading="lazy" src="../../assets/images/avatar.jpg" class="user-avatar">
                                <div data-delay="200" data-hover="false" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c82686" class="dropdown1_component-2 w-dropdown">
                                  <div class="more_toggle w-dropdown-toggle"><img alt="" loading="lazy" src="../../assets/images/more-horizontal.svg"></div>
                                  <nav class="more_dropdown-list w-dropdown-list">
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option One</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Two</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Three</a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                            <div class="task-list-item">
                              <div class="task-list-text">
                                <div class="form-checkbox-icon"></div>
                                <p class="body-small text-color-gray600">Increase contrast and accessibility dark mode as implemented in design</p>
                              </div>
                              <div class="div-block-16">
                                <div class="task-tag is-overdue">Overdue</div>
                                <div class="task-comments"><img alt="" loading="lazy" src="../../assets/images/ChatDots.svg">
                                  <div>1</div>
                                </div><img alt="" loading="lazy" src="../../assets/images/avatar.jpg" class="user-avatar">
                                <div data-delay="200" data-hover="false" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c8269d" class="dropdown1_component-2 w-dropdown">
                                  <div class="more_toggle w-dropdown-toggle"><img alt="" loading="lazy" src="../../assets/images/more-horizontal.svg"></div>
                                  <nav class="more_dropdown-list w-dropdown-list">
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option One</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Two</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Three</a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                            <div class="task-list-item">
                              <div class="task-list-text">
                                <div class="form-checkbox-icon"></div>
                                <p class="body-small text-color-gray600">Increase contrast and accessibility dark mode as implemented in design</p>
                              </div>
                              <div class="div-block-16">
                                <div class="task-tag is-overdue">Overdue</div>
                                <div class="task-comments"><img alt="" loading="lazy" src="../../assets/images/ChatDots.svg">
                                  <div>9</div>
                                </div><img alt="" loading="lazy" src="../../assets/images/avatar.jpg" class="user-avatar">
                                <div data-delay="200" data-hover="false" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c826b4" class="dropdown1_component-2 w-dropdown">
                                  <div class="more_toggle w-dropdown-toggle"><img alt="" loading="lazy" src="../../assets/images/more-horizontal.svg"></div>
                                  <nav class="more_dropdown-list w-dropdown-list">
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option One</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Two</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Three</a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-w-tab="Tab 3" class="w-tab-pane" :class="{'w--tab-active' : currentTab === 'Tab 3'}">
                          <div class="tasks">
                            <div class="task-list-item">
                              <div class="task-list-text">
                                <div class="form-checkbox-icon"></div>
                                <p class="body-small text-color-gray600">Increase contrast and accessibility dark mode as implemented in design</p>
                              </div>
                              <div class="div-block-16">
                                <div class="task-tag is-ongoing">Ongoing</div>
                                <div class="task-comments"><img alt="" loading="lazy" src="../../assets/images/ChatDots.svg">
                                  <div>3</div>
                                </div><img alt="" loading="lazy" src="../../assets/images/avatar.jpg" class="user-avatar">
                                <div data-delay="200" data-hover="false" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c826cd" class="dropdown1_component-2 w-dropdown">
                                  <div class="more_toggle w-dropdown-toggle"><img alt="" loading="lazy" src="../../assets/images/more-horizontal.svg"></div>
                                  <nav class="more_dropdown-list w-dropdown-list">
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option One</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Two</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Three</a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                            <div class="task-list-item">
                              <div class="task-list-text">
                                <div class="form-checkbox-icon"></div>
                                <p class="body-small text-color-gray600">Increase contrast and accessibility dark mode as implemented in design</p>
                              </div>
                              <div class="div-block-16">
                                <div class="task-tag is-ongoing">Ongoing</div>
                                <div class="task-comments"><img alt="" loading="lazy" src="../../assets/images/ChatDots.svg">
                                  <div>3</div>
                                </div><img alt="" loading="lazy" src="../../assets/images/avatar.jpg" class="user-avatar">
                                <div data-delay="200" data-hover="false" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c826e4" class="dropdown1_component-2 w-dropdown">
                                  <div class="more_toggle w-dropdown-toggle"><img alt="" loading="lazy" src="../../assets/images/more-horizontal.svg"></div>
                                  <nav class="more_dropdown-list w-dropdown-list">
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option One</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Two</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Three</a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                            <div class="task-list-item">
                              <div class="task-list-text">
                                <div class="form-checkbox-icon"></div>
                                <p class="body-small text-color-gray600">Increase contrast and accessibility dark mode as implemented in design</p>
                              </div>
                              <div class="div-block-16">
                                <div class="task-tag is-ongoing">Ongoing</div>
                                <div class="task-comments"><img alt="" loading="lazy" src="../../assets/images/ChatDots.svg">
                                  <div>3</div>
                                </div><img alt="" loading="lazy" src="../../assets/images/avatar.jpg" class="user-avatar">
                                <div data-delay="200" data-hover="false" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c826fb" class="dropdown1_component-2 w-dropdown">
                                  <div class="more_toggle w-dropdown-toggle"><img alt="" loading="lazy" src="../../assets/images/more-horizontal.svg"></div>
                                  <nav class="more_dropdown-list w-dropdown-list">
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option One</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Two</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Three</a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-w-tab="Tab 4" class="w-tab-pane" :class="{'w--tab-active' : currentTab === 'Tab 4'}">
                          <div class="tasks">
                            <div class="task-list-item">
                              <div class="task-list-text">
                                <div class="form-checkbox-icon"></div>
                                <p class="body-small text-color-gray600">Increase contrast and accessibility dark mode as implemented in design</p>
                              </div>
                              <div class="div-block-16">
                                <div class="task-tag is-completed">Completed</div>
                                <div class="task-comments"><img alt="" loading="lazy" src="../../assets/images/ChatDots.svg">
                                  <div>13</div>
                                </div><img alt="" loading="lazy" src="../../assets/images/avatar.jpg" class="user-avatar">
                                <div data-delay="200" data-hover="false" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c82714" class="dropdown1_component-2 w-dropdown">
                                  <div class="more_toggle w-dropdown-toggle"><img alt="" loading="lazy" src="../../assets/images/more-horizontal.svg"></div>
                                  <nav class="more_dropdown-list w-dropdown-list">
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option One</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Two</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Three</a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                            <div class="task-list-item">
                              <div class="task-list-text">
                                <div class="form-checkbox-icon"></div>
                                <p class="body-small text-color-gray600">Increase contrast and accessibility dark mode as implemented in design</p>
                              </div>
                              <div class="div-block-16">
                                <div class="task-tag is-completed">Completed</div>
                                <div class="task-comments"><img alt="" loading="lazy" src="../../assets/images/ChatDots.svg">
                                  <div>30</div>
                                </div><img alt="" loading="lazy" src="../../assets/images/avatar.jpg" class="user-avatar">
                                <div data-delay="200" data-hover="false" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c8272b" class="dropdown1_component-2 w-dropdown">
                                  <div class="more_toggle w-dropdown-toggle"><img alt="" loading="lazy" src="../../assets/images/more-horizontal.svg"></div>
                                  <nav class="more_dropdown-list w-dropdown-list">
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option One</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Two</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Three</a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                            <div class="task-list-item">
                              <div class="task-list-text">
                                <div class="form-checkbox-icon"></div>
                                <p class="body-small text-color-gray600">Increase contrast and accessibility dark mode as implemented in design</p>
                              </div>
                              <div class="div-block-16">
                                <div class="task-tag is-completed">Completed</div>
                                <div class="task-comments"><img alt="" loading="lazy" src="../../assets/images/ChatDots.svg">
                                  <div>6</div>
                                </div><img alt="" loading="lazy" src="../../assets/images/avatar.jpg" class="user-avatar">
                                <div data-delay="200" data-hover="false" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c82742" class="dropdown1_component-2 w-dropdown">
                                  <div class="more_toggle w-dropdown-toggle"><img alt="" loading="lazy" src="../../assets/images/more-horizontal.svg"></div>
                                  <nav class="more_dropdown-list w-dropdown-list">
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option One</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Two</a>
                                    <a href="#" class="dropdown1_dropdown-link-2 w-dropdown-link">Option Three</a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 2" class="w-tab-pane" :class="{'w--tab-active' : tab === 'Team'}">
                  <div class="project-team-grid">
                    <div id="w-node-dea3cef2-5c7e-1f4f-d46e-7caeeb875abe-5205c0d9" class="project-team-title">
                      <h5 class="heading-style-h5 text-color-gray900">Team</h5>
                      <p class="body-medium text-color-gray500">Invite your team members on QooPro to work faster and collaborate easily together.</p>
                      <a data-w-id="fd4b62ee-3cfb-0d92-3e4d-99c3202b74d1" href="#" class="button is-icon w-inline-block">
                        <div class="w-embed"><svg width="21" height="21" viewbox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 5.25V15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M5.25 10.5H15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg></div>
                        <div>Invite Collaborators</div>
                      </a>
                    </div>
                    <div aria-describedby="IDREF" role="table" aria-label="NAME" class="table9_component">
                      <div class="table9_content" v-if="allMembers.length > 0">
                        <div class="table9_header-row">
                          <div role="columnheader" class="table9_column is-header-column">
                            <a fs-cmssort-desc="is-desc" fs-cmssort-element="trigger" fs-cmssort-field="IDENTIFIER" fs-cmssort-asc="is-asc" href="#" class="table9_header-link w-inline-block">
                              <div class="text-weight-semibold">Full Name</div>
                            </a>
                          </div>
                          <div role="columnheader" class="table9_column is-header-column is-width-large">
                            <a fs-cmssort-desc="is-desc" fs-cmssort-element="trigger" fs-cmssort-field="IDENTIFIER" fs-cmssort-asc="is-asc" href="#" class="table9_header-link w-inline-block">
                              <div class="text-weight-semibold">Email</div>
                            </a>
                          </div>
                          <div role="columnheader" class="table9_column is-header-column is-width-medium">
                            <a fs-cmssort-desc="is-desc" fs-cmssort-element="trigger" fs-cmssort-field="IDENTIFIER" fs-cmssort-asc="is-asc" href="#" class="table9_header-link w-inline-block">
                              <div class="text-weight-semibold">Role</div>
                            </a>
                          </div>
                          <div role="columnheader" class="table9_column is-header-column is-width-medium">
                            <a fs-cmssort-desc="is-desc" fs-cmssort-element="trigger" fs-cmssort-field="IDENTIFIER" fs-cmssort-asc="is-asc" href="#" class="table9_header-link w-inline-block">
                              <div class="text-weight-semibold">Added</div>
                            </a>
                          </div>
                          <div class="table9_column-button-wrapper"></div>
                        </div>
                        <div role="rowgroup" class="table9_list-wrapper">
                          <div fs-cmssort-element="list" class="table9_list" v-for="team in allMembers.slice(startCount,numberToDisplay)" :key="team.customerId">
                            <div role="row" class="table9_item">
                              <div role="cell" class="table9_column">
                                <div class="table9_column-content"><img loading="lazy" src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg" alt="" class="table9_image">
                                  <div fs-cmssort-field="IDENTIFIER" class="text-weight-medium">{{team.customerFirstName + " " + team.customerLastName}}</div>
                                </div>
                              </div>
                              <div role="cell" class="table9_column is-width-large">
                                <a fs-cmssort-field="IDENTIFIER" href="#" class="link">{{team.customerEmail}}</a>
                              </div>
                              <div role="cell" class="table9_column is-width-medium">
                                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-block-12">{{team.customerDepartment || "No Department"}}</div>
                              </div>
                              <div role="cell" class="table9_column is-width-medium">
                                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-block-13">{{team.customerCreatedAt}}</div>
                              </div>
                              <div class="table9_column-button-wrapper">
                                <div data-delay="200" data-hover="false" data-w-id="189ea091-954a-9fd3-4ffb-0e1eac099363" class="dropdown1_component w-dropdown">
                                  <div class="dropdown1_toggle w-dropdown-toggle">
                                    <div class="button-5 is-tertiary is-small is-icon-only">
                                      <div class="icon-embed-xsmall-4 w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_609_6561)">
                                          <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10Z" fill="currentColor"></path>
                                        </g>
                                        <defs>
                                          <clippath id="clip0_609_6561">
                                            <rect width="24" height="24" fill="currentColor"></rect>
                                          </clippath>
                                        </defs>
                                      </svg></div>
                                    </div>
                                  </div>
                                  <nav class="dropdown1_dropdown-list is-right w-dropdown-list">
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Remove Team member</a>
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Share</a>
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Delete</a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="table9_pagination" v-if="allMembers.length > 5">
                            <a href="#" class="table9_button is-previous w-inline-block">
                              <div class="w-inline-block">Prev</div>
                            </a>
                            <div class="table9_pagination-page-button-wrapper">
                              <a href="#" fs-cmsload-element="page-button" class="table9_page-button w-inline-block" v-for="count in calculatePosition" :key="count">
                                <div>{{count}}</div>
                              </a>
                              <a href="#" fs-cmsload-element="page-button" class="table9_page-button w-inline-block">
                                <div>2</div>
                              </a>
                              <a href="#" fs-cmsload-element="page-button" class="table9_page-button w-inline-block">
                                <div>3</div>
                              </a>
                              <a href="#" fs-cmsload-element="page-button" class="table9_page-button w-inline-block">
                                <div>4</div>
                              </a>
                              <a href="#" fs-cmsload-element="page-button" class="table9_page-button w-inline-block">
                                <div>5</div>
                              </a>
                            </div>
                            <a href="#" class="table9_button is-next w-inline-block">
                              <div class="w-inline-block">Next</div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div id="w-node-_5f05cba8-8716-e90e-8f2d-62bdf9c8265c-5205c0d9" class="empty-state" v-else><img alt="" loading="lazy" src="../../assets/images/TasksEmptyState.svg">
                        <p class="body-medium text-align-center text-color-gray600">There are no new collaborators</p>
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
    <TaskDetailsModal/>
    <CreateTaskModal :subtask="false"/>
  </DashboardLayout>
</template>

<style scoped>

</style>