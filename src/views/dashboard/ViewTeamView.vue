<template>
<DashboardLayout>
  <main class="shell4_main-wrapper">
    <div class="section_page-header2">
      <div class="padding-horizontal padding-medium">
        <div class="container-large">
          <div class="padding-top padding-large">
            <div class="page-header2_component">
              <div class="margin-bottom margin-xsmall">
                <div class="page-header2_breadcrumb">
                  <router-link to="/team" class="breadcrumb-link w-inline-block">
                    <div class="text-size-regular">Team</div>
                  </router-link>
                  <div class="breadcrumb-divider w-embed"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3L11 8L6 13" stroke="CurrentColor" stroke-width="1.5"></path>
                  </svg></div>
                  <a href="#" class="breadcrumb-link is-active w-inline-block">
                    <div class="text-size-regular text-weight-medium">{{teams.team.teamName}}</div>
                  </a>
                </div>
              </div>
              <div class="page-header2_content-wrapper">
                <div class="max-width-large page-title">
                  <img :src="teams.team.teamLogo" class="grid-list3_image-wrapper" alt="Photo" v-if="teams.team.teamLogo" style="width:64px; height: 64px; border-radius: 100px"/>
                  <div class="grid-list3_image-wrapper" v-else>
                    <div class="div-block-36" v-if="teams.team.teamName">
                      <div class="text-block-8" v-if="teams.team.teamName.split(' ').length > 0">{{teams.team.teamName.split(' ')[0].charAt(0)}}</div>
                      <div class="text-block-8" v-else>{{teams.team.teamName.charAt(0)}}</div>
                    </div>
                  </div>
                  <h1 class="heading-style-h4">{{teams.team.teamName}}</h1>
                </div>
                <div class="page-header2_content-right">
                  <div class="button-group">
                    <router-link to="/edit-team" class="btnsec is-secondary is-small w-button">Edit team</router-link>
                    <a @click="openNewModal('.invite-team-modal_component')" class="button-4 is-small w-button">Invite team member</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="tabwrapper">
              <div data-current="Tab 2" data-easing="ease" data-duration-in="300" data-duration-out="100" class="tab3_component w-tabs">
                <div class="tab3_tabs-menu w-tab-menu">
                  <a data-w-tab="Tab 1" class="tab3_tab-link w-inline-block w-tab-link" @click="showTab = 'Tab 1'" :class="{'w--current' : showTab === 'Tab 1'}">
                    <div>Projects</div>
                  </a>
                  <a data-w-tab="Tab 2" class="tab3_tab-link w-inline-block w-tab-link"  @click="showTab = 'Tab 2'" :class="{'w--current' : showTab === 'Tab 2'}">
                    <div>Team Members</div>
                  </a>
                </div>
                <div class="tab3_tabs-content w-tab-content">
                  <div data-w-tab="Tab 1" class="tab3_tab-pane w-tab-pane" :class="{' w--tab-active' : showTab === 'Tab 1'}">
                    <div class="grid-list4_list-wrapper">
                      <div class="grid-list4_list">
                        <div class="grid-list4_item" v-for="(project, index) in project.projects" :key="index">
                          <div class="margin-bottom margin-small">
                            <div class="grid-list4_content-top">
                              <img :src="project.projectLogo" class="grid-list3_image-wrapper" alt="Photo" v-if="project.projectLogo" style="width:64px; height: 64px; border-radius: 100px"/>
                              <div class="grid-list3_image-wrapper" v-else>
                                <div class="div-block-36" v-if="project.projectName">
                                  <div class="text-block-8" v-if="project.projectName.split(' ').length > 0">{{project.projectName.split(' ')[0].charAt(0)}}</div>
                                  <div class="text-block-8" v-else>{{project.projectName.charAt(0)}}</div>

                                </div>
                              </div>
                              <div class="grid-list4_title-wrapper">
                                <div class="text-weight-semibold">{{project.projectName}}</div>
                                <div class="grid-list4_date-wrapper">
                                  <div class="text-size-small-5">{{getDate(project.projectCreatedAt)}} {{new Date(project.projectCreatedAt).toLocaleString('en-us',{month:'short'})}} {{new Date(project.projectCreatedAt).getFullYear()}}</div>
                                </div>
                              </div>
                              <div data-delay="200" data-hover="false" data-w-id="a4801250-6c0f-8617-8e25-13783e4656b8" class="dropdown1_component w-dropdown" :class="{'w--open' : showDropdown && openId === project.projectId}" @click="showDropdown = !showDropdown; openId = project.projectId">
                                <div class="dropdown1_toggle w-dropdown-toggle"  :class="{'w--open' : showDropdown && openId === project.projectId}">
                                  <div class="button-5 is-tertiary is-small is-icon-only"  :class="{'w--open' : showDropdown && openId === project.projectId}">
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
                                <nav class="dropdown1_dropdown-list is-right w-dropdown-list" :class="{'w--open' : showDropdown && openId === project.projectId}">
                                  <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Rename</a>
                                  <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Share</a>
                                  <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Delete</a>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div class="margin-bottom margin-small">
                            <p class="paragraph-2">{{project.projectDescription}}</p>
                          </div>
                          <div class="div-block-38">
                            <div class="image-stack align-left">
                              <img loading="lazy" :src="image.customerPhoto" alt="" class="team-img" v-for="(image, index) in teams.teamMembers.slice(0,4)" :key="index">
                              <div class="team-img">+{{teams.teamMembers.length}}</div>
                            </div>
                          </div>
                          <div class="grid-list4_content-bottom">
                            <div class="margin-top margin-medium">
                              <a @click="goToSingleProject(project)" class="btnsec is-secondary is-small full-width w-button">View Project</a>
                            </div>
                          </div>
                        </div>
                        <router-link to="/create-project" class="addnewproject w-inline-block">
                          <div class="addproject w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="100%" height="100%" preserveaspectratio="xMidYMid meet" viewbox="0 0 24 24">
                            <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                          </svg></div>
                          <div>Add a new project</div>
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div data-w-tab="Tab 2" class="tab3_tab-pane w-tab-pane" :class="{' w--tab-active' : showTab === 'Tab 2'}">
                    <div aria-describedby="IDREF" role="table" aria-label="NAME" class="table9_component">
                      <div class="table9_content">
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
                        <div role="rowgroup" id="w-node-_04b511d2-6f2b-011b-eebf-edce89639b90-0cf2658f" class="table9_list-wrapper" v-for="(member, index) in teams.teamMembers" :key="index">
                          <div fs-cmssort-element="list" class="table9_list">
                            <div role="row" class="table9_item">
                              <div role="cell" class="table9_column">
                                <div class="table9_column-content">
                                  <img loading="lazy" v-if="member.customerPhoto" :src="member.customerPhoto" alt="" class="table9_image">
                                  <img loading="lazy"  v-else src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg" alt="" class="table9_image">
                                  <div fs-cmssort-field="IDENTIFIER" class="text-weight-medium">{{member.customerFirstName + ' ' + member.customerLastName}}</div>
                                </div>
                              </div>
                              <div role="cell" class="table9_column is-width-large">
                                <a fs-cmssort-field="IDENTIFIER" href="#" class="link">{{member.customerEmail}}</a>
                              </div>
                              <div role="cell" class="table9_column is-width-medium">
                                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-block-12">Product Designer</div>
                              </div>
                              <div role="cell" class="table9_column is-width-medium">
                                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-block-13">{{new Date(member.customerCreatedAt).toLocaleString('en-US')}}</div>
                              </div>
                              <div class="table9_column-button-wrapper">
                                <div data-delay="200" data-hover="false" data-w-id="df9525fd-271a-5e41-d808-c9aa6da88287" class="dropdown1_component w-dropdown" :class="{'w--open' : openId === member.customerId && showDropdown}" @click="showDropdown = !showDropdown; openId = member.customerId">
                                  <div class="dropdown1_toggle w-dropdown-toggle" :class="{'w--open' : openId === member.customerId && showDropdown}">
                                    <div class="button-5 is-tertiary is-small is-icon-only" :class="{'w--open' : openId === member.customerId && showDropdown}">
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
                                  <nav class="dropdown1_dropdown-list is-right w-dropdown-list" :class="{'w--open' : openId === member.customerId && showDropdown}">
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Remove Team member</a>
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Share</a>
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Delete</a>
                                  </nav>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="table9_pagination">
                          <a href="#" class="table9_button is-previous w-inline-block">
                            <div class="w-inline-block">Prev</div>
                          </a>
                          <div class="table9_pagination-page-button-wrapper">
                            <a href="#" fs-cmsload-element="page-button" class="table9_page-button w-inline-block">
                              <div>1</div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
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
export default {
  name: "ViewTeamView",
  components: {TeamMemberTasksModal, InviteTeamMemberModal, DashboardLayout},
  data(){
    return{
      showModal: false,
      showMemberModal: false,
      nav: false,
      openId: "",
      showDropdown: false,
      showTab: "Tab 2"
    }
  },
  methods:{
    goToSingleProject(project){
      this.model.projectId = project.projectId;
      StoreUtils.commit(StoreUtils.mutations.project.updateProject, project)
      StoreUtils.dispatch(StoreUtils.actions.project.readTaskByProjectId, this.model)
      router.push(`/project-details/${project.projectId}`)
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
    ...mapState(["auth", "teams","project"])
  }
}
</script>

<style scoped>

</style>