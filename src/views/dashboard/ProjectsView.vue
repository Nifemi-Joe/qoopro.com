<template>
<DashboardLayout>
  <main class="shell4_main-wrapper">
    <div class="page-header">
      <div class="padding-small">
        <div class="container-large">
          <div class="dashboard-header-frame">
            <div class="db-header-text">
              <div class="header-text">
                <p class="heading-large text-color-gray900">Projects</p>
                <p class="body-medium text-color-gray500">The Scrum project aims to develop a new software application that will revolutionize the way users interact with their devices.</p>
              </div>
            </div>
            <div class="db-team-actions">
              <div class="topbar3_form-block w-form">
                <form name="wf-form-Search-3-4" data-name="Search 3" method="get" id="email-form1" class="topbar3_form" data-wf-page-id="64d3fb2f9a6113601ec551ba" data-wf-element-id="686e9b05-89ac-dc0b-1d4f-19ac5f85d099">
                  <div class="topbar3_search">
                    <div id="w-node-_7001c9ad-45f9-23a5-69e4-f45605f4cb35-1ec551ba" class="topbar2_search-desktop">
                      <div class="topbar2_form-block w-form">
                        <form name="wf-form-Search-2-3" data-name="Search 2" method="get" id="email-form" class="topbar2_form" data-wf-page-id="64d3fb2f9a6113601ec551ba" data-wf-element-id="7001c9ad-45f9-23a5-69e4-f45605f4cb37">
                          <div class="topbar2_search"><input v-model="search" type="text" class="form-input-2 is-search-input w-input" maxlength="256" name="field-2" data-name="Field 2" placeholder="Search" id="field-2">
                            <div class="search-icon text-color-gray400 w-embed"><svg width="100%" height="100%" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill="currentColor"></path>
                            </svg></div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="div-block-17">
                <a data-w-id="f306afa8-af5b-a42f-b22c-6c85f31873f2" href="https://veezahrepo.s3.amazonaws.com/Qoopro_800_003_QooproProductDefinition.xlsm" class="button is-secondary is-icon w-inline-block">
                  <div class="w-embed"><svg width="21" height="21" viewbox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 5.25V15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.25 10.5H15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></div>
                  <div>Download WBS</div>
                </a>
                <router-link :to="myRoutes.project.createProject" class="button is-icon w-inline-block">
                  <div class="w-embed"><svg width="21" height="21" viewbox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 5.25V15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.25 10.5H15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></div>
                  <div>Add Project</div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section_shell4-layout">
      <div class="padding-small padding-top-0">
        <div class="container-large">
          <div id="w-node-_5a2fb266-a965-cf6c-7a77-946043c2de34-1ec551ba" class="w-layout-grid shell4-layout_component is-team">
            <div class="grid-list4_list" v-if="project.projects.length > 0">
              <div class="grid-list4_item" v-for="(projects, index) in project.projects" :key="index">
                <div class="margin-bottom margin-small">
                  <div class="grid-list4_content-top">
                    <div class="projectlogoimage">
                      <div class="text-block-11">{{projects.projectName.charAt(0)}}</div>
                    </div>
                    <div class="grid-list4_title-wrapper">
                      <div class="text-weight-semibold">{{projects.projectName}}</div>
                      <div class="grid-list4_date-wrapper">
                        <div class="text-size-small-5">Created: {{getDate(projects.projectCreatedAt)}} {{new Date(projects.projectCreatedAt).toLocaleString('en-us',{month:'short'})}} {{new Date(projects.projectCreatedAt).getFullYear()}}</div>
                      </div>
                    </div>
                    <a data-delay="200" data-hover="false" data-w-id="302bd047-ad96-1601-c856-cdc87012ab48" class="dropdown1_component w-dropdown" @click="show = !show; id = projects.projectId">
                      <div class="dropdown1_toggle w-dropdown-toggle" :class="{'w--open' : show && id === projects.projectId}" id="w-dropdown-toggle-1" aria-controls="w-dropdown-list-1" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                        <div class="button-5 is-tertiary is-small is-icon-only">
                          <div class="icon-embed-xsmall-4 w-embed"><svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_609_6561)">
                              <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10Z" fill="currentColor"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_609_6561">
                                <rect width="24" height="24" fill="currentColor"></rect>
                              </clipPath>
                            </defs>
                          </svg></div>
                        </div>
                      </div>
                      <nav  class="dropdown1_dropdown-list is-right w-dropdown-list" :class="{'w--open' : show && id === projects.projectId}"  id="w-dropdown-list-1" aria-labelledby="w-dropdown-toggle-1" style="transform: translate3d(0px, 3rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; top: 0">
                        <a href="#" class="dropdown1_dropdown-link w-dropdown-link" tabindex="0">Share</a>
                        <a href="#" class="dropdown1_dropdown-link w-dropdown-link" tabindex="0" @click="openNewModal('.confirmdelete-modal_component');">Delete</a>
                      </nav>
                    </a>
                  </div>
                </div>
                <div class="margin-bottom margin-small">
                  <p class="paragraph-2">{{projects.projectDescription}}</p>
                </div>
                <div class="div-block-38" style="margin-top: auto">
                  <div class="image-stack align-left"><img loading="lazy" src="../../assets/images/avatar.jpg" alt="" class="team-img"><img sizes="(max-width: 991px) 32px, 40px" srcset="../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6-p-500.jpeg 500w, ../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6-p-800.jpeg 800w, ../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6-p-1080.jpeg 1080w, ../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6-p-1600.jpeg 1600w, ../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6-p-2000.jpeg 2000w, ../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6.jpeg 3289w" alt="" src="../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6.jpeg" loading="lazy" class="team-img"><img sizes="(max-width: 991px) 32px, 40px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" alt="" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" class="team-img"><img sizes="(max-width: 991px) 32px, 40px" srcset="../../assets/images/fhbj-p-500.jpeg 500w, ../../assets/images/fhbj-p-800.jpeg 800w, ../../assets/images/fhbj.jpeg 1000w" alt="" src="../../assets/images/fhbj.jpeg" loading="lazy" class="team-img">
                    <div class="team-img">+4</div>
                  </div>
                </div>
                <div class="grid-list4_content-bottom">
                  <div class="margin-top margin-medium">
                    <a @click="goToSingleProject(projects)" class="btnsec is-secondary is-small full-width w-button">View Project</a>
                  </div>
                </div>
              </div>
              <router-link :to="myRoutes.project.createProject" class="addnewproject w-inline-block">
                <div class="addproject w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                </svg></div>
                <div>Add a new project</div>
              </router-link>
            </div>
            <div id="w-node-b3dabba4-892a-3241-f4d8-ab3b5084e514-1ec551ba" class="empty-state" v-else><img loading="lazy" src="../../assets/images/ProjectsEmptyState.svg" alt="">
              <p class="body-medium text-align-center text-color-gray600" v-if="project.loading">Loading...</p>
              <p class="body-medium text-align-center text-color-gray600" v-else>There are no new projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <ConfirmDeleteModal module="project"/>
<!--  style="-->
<!--  -webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-->
<!--  -moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-->
<!--  -ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-->
<!--  transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);"-->
</DashboardLayout>
</template>

<script>
import DashboardLayout from "@/layout/DashboardLayout";
import RouterUtils from "@/util/baseUtils/RouterUtils";
import {mapState} from "vuex";
import StoreUtils from "@/util/baseUtils/StoreUtils";
import router from "@/router";
import ProjectRequest from "@/model/request/ProjectRequest";
import TeamRequest from "@/model/request/TeamRequest";
import ConfirmDeleteModal from "@/components/modals/ConfirmDeleteModal.vue";
export default {
  name: "ProjectsView",
  components: {ConfirmDeleteModal, DashboardLayout},
  data(){
    return{
      actions:false,
      id: "",
      show: false,
      model: ProjectRequest.read,
      readmodel: TeamRequest.projectId,
      search: ""
    }
  },
  computed:{
    myRoutes(){
      return RouterUtils.routes
    },
    ...mapState(["auth","project"]),
  },
  methods:{
    goToSingleProject(project){
      this.model.projectId = project.projectId;
      this.readmodel.projectId = project.projectId;
      StoreUtils.commit(StoreUtils.mutations.project.updateProject, project);
      StoreUtils.dispatch(StoreUtils.actions.project.readTaskByProjectId, this.model);
      StoreUtils.dispatch(StoreUtils.actions.team.readTeamByProjectId, this.readmodel);
      router.push(`/project-details/${project.projectId}`)
    },
    getDate(date){
      return new Date(date).getDate();
    },
    openNewModal(className){
      StoreUtils.commit(StoreUtils.mutations.project.updateProject, {projectId: this.id})
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
    toggleActions(){
      this.actions = !this.actions;
    },
    returnFormatedDate(date){
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
        noSeconds= "0"+noSeconds
        noAmPmSeconds = "0"+noAmPmSeconds;
      }

      console.log(newTime); //10:26:00 PM
      console.log(noAmPm); //10:26:00
      console.log(noSeconds); //10:26 PM
      console.log(noAmPmSeconds); //10:26
      return noSeconds
    }
  },
  watch: {
    search(){
      let items = []
      if (this.search !== ""){
        this.project.projects.forEach((project) => {
          if (project.projectName.toLowerCase().includes(this.search.toLowerCase())){
            items.push(project)
          }
        })
        StoreUtils.commit(StoreUtils.mutations.project.updateProjects, items)
      }
      else{
        StoreUtils.dispatch(StoreUtils.actions.project.readProject)
      }
    }
  }

}
</script>

<style scoped>
.grid-list4_item{
  display: flex;
  flex-direction: column;
}
</style>