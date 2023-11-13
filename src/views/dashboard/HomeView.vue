<template>
<DashboardLayout>
  <main class="shell4_main-wrapper">
    <div class="page-header">
      <div class="padding-small">
        <div class="container-large">
          <p class="heading-large text-color-gray900">Home</p>
        </div>
      </div>
    </div>
    <div class="section_shell4-layout">
      <div class="home-wrapper">
        <div class="container-large">
          <div id="w-node-_5a2fb266-a965-cf6c-7a77-946043c2de34-bdd67e75" class="w-layout-grid shell4-layout_component">
            <div id="w-node-_6b267184-ab33-82de-9fc7-24e30663642e-bdd67e75" class="div-block-2">
              <div class="dashboard_greeting">
                <p class="field-label text-color-gray500 text-align-center margin-0">{{formattedDate}}</p>
                <p class="heading-large text-align-center text-color-gray900">Good morning, {{ customerDetails.customerFirstName }}</p>
              </div>
              <div class="div-block">
                <div class="div-block-3 div-block-4 div-block-5 div-block-6 div-block-7">
                  <div data-hover="false" data-delay="200" data-w-id="20d5d306-1412-078f-e8ec-3d18ef241899" class="dropdown1_component w-dropdown">
                    <div class="dropdown1_toggle w-dropdown-toggle">
                      <div>My day</div>
                      <div class="dropdown-icon w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                      </svg></div>
                    </div>
                    <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown1_dropdown-list w-dropdown-list">
                      <a href="#" class="dropdown1_dropdown-link w-dropdown-link">My day</a>
                      <a href="#" class="dropdown1_dropdown-link w-dropdown-link">My week</a>
                      <a href="#" class="dropdown1_dropdown-link w-dropdown-link">My month</a>
                    </nav>
                  </div>
                  <div class="vertical-divider"></div>
                  <p class="paragraph"><span class="tasks-completed">0</span> tasks completed</p>
                </div>
              </div>
            </div>
            <div id="w-node-_5d3bb2c7-5e91-853b-559c-936d39f333ce-bdd67e75" class="setup-section">
              <div class="setup-title-section">
                <h3 class="heading-small text-color-gray900">Setup your QooPro Account</h3>
                <p class="body-small text-color-gray600">We have curated a list of items to get you up and running with your QooPro account⚡️</p>
              </div>
              <div class="setup-item">
                <div class="setup-div"><img src="../../assets/images/addTeam.svg" loading="lazy" alt="" class="image-3">
                  <div class="setup-text">
                    <h3 class="heading-small text-color-gray900">Create Team</h3>
                    <p class="body-small text-color-gray600">Keep work on track. Make it clear who’s doing what by when.</p>
                  </div>
                </div>
                <router-link :to="myRoutes.team.createTeam.path"  data-w-id="38673351-4e20-1e7a-184c-eca8f11d9322" href="#" class="setup-btn w-inline-block">
                  <div class="w-embed">
                    <svg width="20" height="20" viewbox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 4.75V15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.75 10H15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <div class="field-label margin-0">Create new team</div>
                </router-link>
              </div>
              <div class="setup-item">
                <div class="setup-div"><img src="../../assets/images/addProject.svg" loading="lazy" alt="" class="image-3">
                  <div class="setup-text">
                    <h3 class="heading-small text-color-gray900">Add a Project</h3>
                    <p class="body-small text-color-gray600">Keep work on track. Make it clear who’s doing what by when.</p>
                  </div>
                </div>
                <router-link :to="myRoutes.project.createProject.path" class="setup-btn w-inline-block">
                  <div class="w-embed" style="align-self:center;">
                    <svg width="20" height="20" viewbox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 4.75V15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.75 10H15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <div class="field-label margin-0">Create new project</div>
                </router-link>
              </div>
              <div class="setup-item">
                <div class="setup-div"><img src="../../assets/images/createTasks.svg" loading="lazy" alt="" class="image-3">
                  <div class="setup-text">
                    <h3 class="heading-small text-color-gray900">Create Tasks</h3>
                    <p class="body-small text-color-gray600">Keep work on track. Make it clear who’s doing what by when.</p>
                  </div>
                </div>
                <router-link to="/create-project" v-if="projects.length <= 0"  data-w-id="38673351-4e20-1e7a-184c-eca8f11d9322" href="#" class="setup-btn w-inline-block">
                  <div class="w-embed">
                    <svg width="20" height="20" viewbox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 4.75V15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.75 10H15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <div class="field-label margin-0">Add new task</div>
                </router-link>
                <a v-else @click="openNewModal('.create-task-modal_component')"  data-w-id="38673351-4e20-1e7a-184c-eca8f11d9322" href="#" class="setup-btn w-inline-block">
                  <div class="w-embed">
                    <svg width="20" height="20" viewbox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 4.75V15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.75 10H15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <div class="field-label margin-0">Add new task</div>
                </a>
              </div>
            </div>
          </div>
          <div class="padding-vertical padding-medium"></div>
        </div>
      </div>
    </div>
  </main>
  <WhatToCreateModal/>
  <InviteTeamMemberModal/>
  <SuccessModal v-if="success" :close-modal="closeSuccessModal" :module="'task'" :module-path="myRoutes.dashboard.task.path"/>
</DashboardLayout>
</template>

<script>
import DashboardLayout from "@/layout/DashboardLayout";
import RouterUtils from "@/util/baseUtils/RouterUtils";
import InviteTeamMemberModal from "@/components/modals/InviteTeamMemberModal";
// import CreateTaskModal from "@/components/modals/CreateTaskModal";
import SuccessModal from "@/components/modals/SuccessModal";
import {mapState} from "vuex";
import WhatToCreateModal from "@/components/modals/WhatToCreateModal";
export default {
  name: "HomeView",
  components: {WhatToCreateModal, SuccessModal, InviteTeamMemberModal, DashboardLayout},
  data(){
    return{
     invite: false,
      task: false,
      success: false,
      today: new Date()
    }
  },
  computed:{
    myRoutes(){
      return RouterUtils.routes
    },
    formattedDate() {
      const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
      return this.today.toLocaleDateString(undefined, options);
    },
    ...mapState({
      userInfo: state => state.auth.userInfo,
      customerDetails: state => state.customer.customerDetails,
      tasks: state => state.task.tasks,
      projects: state => state.project.projects
    })
  },
  methods:{
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
    openModal(type){
      if(type === 'invite'){
        this.invite = true;
      }
      if(type === 'task'){
        this.task = true;
      }

    },
    closeModal(type){
      if(type === 'invite'){
        this.invite = false;
      }
      if(type === 'task'){
        this.task = false;
      }
    },
    openInviteModal(){
      this.invite = true;
    },
    closeInviteModal(){
      this.invite = false;
    },
    openTaskModal(){
      this.task = true;
    },
    closeTaskModal(){
      this.task = false;
    },
    openSuccessModal(){
      this.success = true;
    },
    closeSuccessModal(){

    }
  }
}
</script>

<style scoped>
.setup-btn .w-embed{
  display: flex;
}
</style>