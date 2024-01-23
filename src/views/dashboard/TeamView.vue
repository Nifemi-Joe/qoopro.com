<template>
<DashboardLayout>
  <main class="shell4_main-wrapper">
    <div class="page-header">
      <div class="padding-small">
        <div class="container-large">
          <div class="dashboard-header-frame">
            <div class="db-header-text">
              <div class="header-text">
                <p class="heading-large text-color-gray900">Team</p>
                <p class="body-medium text-color-gray500">The Scrum project aims to develop a new software application that will revolutionize the way users interact with their devices.</p>
              </div>
            </div>
            <div class="db-team-actions">
              <div class="topbar3_form-block w-form">
                <form name="wf-form-Search-3-4" data-name="Search 3" method="get" id="email-form" class="topbar3_form" data-wf-page-id="64d3a6f732558478d55540a4" data-wf-element-id="686e9b05-89ac-dc0b-1d4f-19ac5f85d099">
                  <div class="topbar3_search"><input v-model="search" type="text" class="form-input-4 is-search-input w-input" maxlength="256" name="field-2" data-name="Field 2" placeholder="Search" id="field-3">
                    <div class="search-icon w-embed"><svg width="100%" height="100%" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill="currentColor"></path>
                    </svg></div>
                  </div>
                </form>
              </div>
              <router-link to="/create-team" data-w-id="f306afa8-af5b-a42f-b22c-6c85f31873f2" class="button is-icon w-inline-block">
                <div class="w-embed"><svg width="21" height="21" viewbox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 5.25V15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M5.25 10.5H15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></div>
                <div>Create Team</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="teamwrapper">
      <div class="div-block-32">
        <div class="container-large">
          <div class="grid-list3_component">
            <div class="grid-list3_list-wrapper">
              <div class="grid-list3_list" v-if="teams.teams.length > 0">
                <div class="teamlistitem" v-for="team in teams.teams" :key="team.teamId">
                  <div class="margin-bottom margin-small">
                    <div class="grid-list3_content-top">
                      <img :src="team.teamLogo" class="grid-list3_image-wrapper" alt="Photo" v-if="team.teamLogo" style="width:64px; height: 64px; border-radius: 100px"/>
                      <div class="grid-list3_image-wrapper" v-else>
                        <div class="div-block-36" v-if="team.teamName">
                          <div class="text-block-8" v-if="team.teamName.split(' ').length > 0">{{team.teamName.split(' ')[0].charAt(0)}}</div>
                          <div class="text-block-8" v-else>{{team.teamName.charAt(0)}}</div>

                        </div>
                      </div>
                      <a data-hover="false" data-delay="200" data-w-id="57478fe7-c5d4-7563-a477-01ded6ebeae8" class="dropdown1_component w-dropdown" :class="{'w--open' : openId === team.teamId && showDropdown}" @click="openId = team.teamId; showDropdown = !showDropdown">
                        <div class="dropdown1_toggle w-dropdown-toggle" :class="{'w--open' : openId === team.teamId && showDropdown}">
                          <div class="btn is-tertiary is-small is-icon-only">
                            <div class="icon-embed-xsmall w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <nav class="dropdown1_dropdown-list is-right w-dropdown-list" :class="{'w--open' : openId === team.teamId && showDropdown}">
                          <router-link to="/edit-team" @click="commitId" class="dropdown1_dropdown-link w-dropdown-link">Edit team</router-link>
                          <a href="#" class="dropdown1_dropdown-link w-dropdown-link" @click="goToSingleTeam">View team</a>
                          <a href="#" class="dropdown1_dropdown-link w-dropdown-link" @click="openNewModal('.confirmdelete-modal_component')">Delete team</a>
                        </nav>
                      </a>
                    </div>
                  </div>
                  <div class="grid-list3_content-bottom">
                    <div class="margin-bottom margin-xsmall">
                      <div class="text-weight-semibold">{{team.teamName}}</div>
                      <div class="div-block-37">
                        <div class="team-number">5 Members</div>
                        <div class="team-number">12 Projects</div>
                      </div>
                    </div>
                    <div class="margin-top margin-medium">
                      <div class="button-group">
                        <a @click="goToSingleTeam(team.teamId, team)" class="btn is-secondary is-small max-width-full w-button">View Team</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="w-node-b3dabba4-892a-3241-f4d8-ab3b5084e514-c8c2e92a" class="empty-state" v-else><img loading="lazy" src="../../assets/images/TasksEmptyState.svg" alt="">
                <p class="body-medium text-align-center text-color-gray600">There are no teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <ConfirmDeleteModal module="team"/>
  <InviteTeamMemberModal/>
  <TeamMemberTasksModal v-if="showMemberModal" :close-modal="closeMemberModal"/>

</DashboardLayout>
</template>

<script>
import DashboardLayout from "@/layout/DashboardLayout";
import InviteTeamMemberModal from "@/components/modals/InviteTeamMemberModal";
import TeamMemberTasksModal from "@/components/modals/TeamMemberTasksModal";
import {mapState} from "vuex";
import StoreUtils from "@/util/baseUtils/StoreUtils";
import router from "@/router";
import ProjectRequest from "@/model/request/ProjectRequest";
import TeamRequest from "@/model/request/TeamRequest";
import ConfirmDeleteModal from "@/components/modals/ConfirmDeleteModal.vue";
export default {
  name: "TeamView",
  components: {ConfirmDeleteModal, TeamMemberTasksModal, InviteTeamMemberModal, DashboardLayout},
  data(){
    return{
      showModal: false,
      showMemberModal: false,
      nav: false,
      openId: "",
      search: "",
      showDropdown: false,
      model: ProjectRequest.readByTeamId,
      teammodel: TeamRequest.readById
    }
  },
  methods:{
    commitId(){
      StoreUtils.commit(StoreUtils.mutations.team.updateTeam, {teamId: this.openId})
    },
    goToSingleTeam(id, team){
      this.model.teamId = id;
      this.teammodel.teamId = id;
      StoreUtils.dispatch(StoreUtils.actions.project.readProjectByTeamId , this.model);
      StoreUtils.dispatch(StoreUtils.actions.team.readMemebersById , this.teammodel);
      StoreUtils.dispatch(StoreUtils.actions.team.readTeamById , {teamId: id});
      StoreUtils.commit(StoreUtils.mutations.team.updateTeam, team);
      router.push("/view-team")
    },
    openNewModal(className){
      StoreUtils.commit(StoreUtils.mutations.team.updateTeam, {teamId: this.openId})
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
    openModal(){
      this.showModal = true;
    },
    closeModal(){
      this.showModal = false;
    },
    openMemberModal(){
      this.showMemberModal = true;
    },
    closeMemberModal(){
      this.showMemberModal = false;
    },
    toggleNav(){
      this.nav = !this.nav;
    }
  },
  computed: {
    ...mapState(["auth", "teams"])
  },
  watch: {
    search(){
      let items = []
      if (this.search !== ""){
        this.teams.teams.forEach((team) => {
          if (team.teamName.toLowerCase().includes(this.search.toLowerCase())){
            items.push(team)
          }
        })
        StoreUtils.commit(StoreUtils.mutations.team.updateTeams, items)
      }
      else{
        StoreUtils.dispatch(StoreUtils.actions.team.readTeam)
      }
    }
  }
}
</script>

<style scoped>

</style>