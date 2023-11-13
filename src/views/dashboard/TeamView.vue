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
                  <div class="topbar3_search"><input type="text" class="form-input-4 is-search-input w-input" maxlength="256" name="field-2" data-name="Field 2" placeholder="Search" id="field-3">
                    <div class="search-icon w-embed"><svg width="100%" height="100%" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill="currentColor"></path>
                    </svg></div>
                  </div>
                </form>
                <div class="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div class="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
              <a @click="openNewModal('.invite-team-modal_component')" data-w-id="f306afa8-af5b-a42f-b22c-6c85f31873f2" href="#" class="button is-icon w-inline-block">
                <div class="w-embed">
                  <svg width="21" height="21" viewbox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M10.5 5.25V15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                   <path d="M5.25 10.5H15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div>Invite Team Mate</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section_shell4-layout">
      <div class="padding-small padding-top-0">
        <div class="container-large">
          <div id="w-node-_5a2fb266-a965-cf6c-7a77-946043c2de34-d55540a4" class="w-layout-grid shell4-layout_component is-team">
            <div id="w-node-_3bed93a0-4718-625c-d9c5-d79301df2062-d55540a4" class="team-grid">
              <div id="w-node-c693188b-97d1-8f39-cceb-118897e9515b-d55540a4" class="team-member">
                <div class="team-member-wrapper">
                  <img src="../../assets/images/avatar.jpg" loading="lazy" alt="" class="team-member-image">
                  <div class="team-member-text">
                    <div class="team-member-name">Dele Alli</div>
                    <div class="body-small">Collaborating on 2 projects</div>
                  </div>
                  <div data-hover="false" data-delay="200" data-w-id="c693188b-97d1-8f39-cceb-118897e95163" class="team-member-dropdown-component w-dropdown">
                    <div class="dropdown1_toggle w-dropdown-toggle" @click="toggleNav">
                      <img  src="../../assets/images/more-horizontal.svg" loading="lazy" alt="">
                    </div>
                    <nav v-if="nav"

                        :class="nav ? 'dropdown1_dropdown-list-3 w-dropdown-list w--open' : 'dropdown1_dropdown-list-3 w-dropdown-list'"
                    >
                      <a @click="openMemberModal" href="#" data-w-id="c693188b-97d1-8f39-cceb-118897e95167" class="dropdown1_dropdown-link-3 w-dropdown-link">View</a>
                      <a href="#" class="dropdown1_dropdown-link-3 w-dropdown-link">Delete</a>
                    </nav>
                  </div>
                </div>
              </div>
              <div id="w-node-_0bec3a91-d49d-ecea-6217-fcd9de4bbef3-d55540a4" class="team-member">
                <div class="team-member-wrapper"><img src="../../assets/images/avatar.jpg" loading="lazy" alt="" class="team-member-image">
                  <div class="team-member-text">
                    <div class="team-member-name">Dele Alli</div>
                    <div class="body-small">Collaborating on 2 projects</div>
                  </div>
                  <div data-hover="false" data-delay="200" data-w-id="0bec3a91-d49d-ecea-6217-fcd9de4bbefb" class="team-member-dropdown-component w-dropdown">
                    <div class="dropdown1_toggle w-dropdown-toggle"><img src="../../assets/images/more-horizontal.svg" loading="lazy" alt=""></div>
                    <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown1_dropdown-list-3 w-dropdown-list">
                      <a href="#" data-w-id="0bec3a91-d49d-ecea-6217-fcd9de4bbeff" class="dropdown1_dropdown-link-3 w-dropdown-link">View</a>
                      <a href="#" class="dropdown1_dropdown-link-3 w-dropdown-link">Delete</a>
                    </nav>
                  </div>
                </div>
              </div>
              <div id="w-node-c9f11686-0b82-4c38-4e71-b1979cc2b800-d55540a4" class="team-member">
                <div class="team-member-wrapper"><img src="../../assets/images/avatar.jpg" loading="lazy" alt="" class="team-member-image">
                  <div class="team-member-text">
                    <div class="team-member-name">Dele Alli</div>
                    <div class="body-small">Collaborating on 2 projects</div>
                  </div>
                  <div data-hover="false" data-delay="200" data-w-id="c9f11686-0b82-4c38-4e71-b1979cc2b808" class="team-member-dropdown-component w-dropdown">
                    <div class="dropdown1_toggle w-dropdown-toggle"><img src="../../assets/images/more-horizontal.svg" loading="lazy" alt=""></div>
                    <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown1_dropdown-list-3 w-dropdown-list">
                      <a href="#" data-w-id="c9f11686-0b82-4c38-4e71-b1979cc2b80c" class="dropdown1_dropdown-link-3 w-dropdown-link">View</a>
                      <a href="#" class="dropdown1_dropdown-link-3 w-dropdown-link">Delete</a>
                    </nav>
                  </div>
                </div>
              </div>
              <div id="w-node-_52561813-203b-28ea-0107-bb3ca5d51c30-d55540a4" class="team-member">
                <div class="team-member-wrapper"><img src="../../assets/images/avatar.jpg" loading="lazy" alt="" class="team-member-image">
                  <div class="team-member-text">
                    <div class="team-member-name">Dele Alli</div>
                    <div class="body-small">Collaborating on 2 projects</div>
                  </div>
                  <div data-hover="false" data-delay="200" data-w-id="52561813-203b-28ea-0107-bb3ca5d51c38" class="team-member-dropdown-component w-dropdown">
                    <div class="dropdown1_toggle w-dropdown-toggle"><img src="../../assets/images/more-horizontal.svg" loading="lazy" alt=""></div>
                    <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown1_dropdown-list-3 w-dropdown-list">
                      <a href="#" data-w-id="52561813-203b-28ea-0107-bb3ca5d51c3c" class="dropdown1_dropdown-link-3 w-dropdown-link">View</a>
                      <a href="#" class="dropdown1_dropdown-link-3 w-dropdown-link">Delete</a>
                    </nav>
                  </div>
                </div>
              </div>
              <div id="w-node-_5a5e6271-0e24-8dea-de8a-f02182991715-d55540a4" class="team-member">
                <div class="team-member-wrapper"><img src="../../assets/images/avatar.jpg" loading="lazy" alt="" class="team-member-image">
                  <div class="team-member-text">
                    <div class="team-member-name">Dele Alli</div>
                    <div class="body-small">Collaborating on 2 projects</div>
                  </div>
                  <div data-hover="false" data-delay="200" data-w-id="5a5e6271-0e24-8dea-de8a-f0218299171d" class="team-member-dropdown-component w-dropdown">
                    <div class="dropdown1_toggle w-dropdown-toggle"><img src="../../assets/images/more-horizontal.svg" loading="lazy" alt=""></div>
                    <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown1_dropdown-list-3 w-dropdown-list">
                      <a href="#" data-w-id="5a5e6271-0e24-8dea-de8a-f02182991721" class="dropdown1_dropdown-link-3 w-dropdown-link">View</a>
                      <a href="#" class="dropdown1_dropdown-link-3 w-dropdown-link">Delete</a>
                    </nav>
                  </div>
                </div>
              </div>
              <div id="w-node-_32601ed6-8a71-7af2-cff6-ec86447e2c25-d55540a4" class="team-member">
                <div class="team-member-wrapper"><img src="../../assets/images/avatar.jpg" loading="lazy" alt="" class="team-member-image">
                  <div class="team-member-text">
                    <div class="team-member-name">Dele Alli</div>
                    <div class="body-small">Collaborating on 2 projects</div>
                  </div>
                  <div data-hover="false" data-delay="200" data-w-id="32601ed6-8a71-7af2-cff6-ec86447e2c2d" class="team-member-dropdown-component w-dropdown">
                    <div class="dropdown1_toggle w-dropdown-toggle"><img src="../../assets/images/more-horizontal.svg" loading="lazy" alt=""></div>
                    <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown1_dropdown-list-3 w-dropdown-list">
                      <a href="#" data-w-id="32601ed6-8a71-7af2-cff6-ec86447e2c31" class="dropdown1_dropdown-link-3 w-dropdown-link">View</a>
                      <a href="#" class="dropdown1_dropdown-link-3 w-dropdown-link">Delete</a>
                    </nav>
                  </div>
                </div>
              </div>
              <div id="w-node-_28c75457-802d-5d02-399d-e627ace8ef97-d55540a4" class="team-member">
                <div class="team-member-wrapper"><img src="../../assets/images/avatar.jpg" loading="lazy" alt="" class="team-member-image">
                  <div class="team-member-text">
                    <div class="team-member-name">Dele Alli</div>
                    <div class="body-small">Collaborating on 2 projects</div>
                  </div>
                  <div data-hover="false" data-delay="200" data-w-id="28c75457-802d-5d02-399d-e627ace8ef9f" class="team-member-dropdown-component w-dropdown">
                    <div class="dropdown1_toggle w-dropdown-toggle"><img src="../../assets/images/more-horizontal.svg" loading="lazy" alt=""></div>
                    <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown1_dropdown-list-3 w-dropdown-list">
                      <a href="#" data-w-id="28c75457-802d-5d02-399d-e627ace8efa3" class="dropdown1_dropdown-link-3 w-dropdown-link">View</a>
                      <a href="#" class="dropdown1_dropdown-link-3 w-dropdown-link">Delete</a>
                    </nav>
                  </div>
                </div>
              </div>
              <div id="w-node-_7db3f947-0951-3f0a-3afa-adc748af492b-d55540a4" class="team-member">
                <div class="team-member-wrapper"><img src="../../assets/images/avatar.jpg" loading="lazy" alt="" class="team-member-image">
                  <div class="team-member-text">
                    <div class="team-member-name">Dele Alli</div>
                    <div class="body-small">Collaborating on 2 projects</div>
                  </div>
                  <div data-hover="false" data-delay="200" data-w-id="7db3f947-0951-3f0a-3afa-adc748af4933" class="team-member-dropdown-component w-dropdown">
                    <div class="dropdown1_toggle w-dropdown-toggle"><img src="../../assets/images/more-horizontal.svg" loading="lazy" alt=""></div>
                    <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown1_dropdown-list-3 w-dropdown-list">
                      <a href="#" data-w-id="7db3f947-0951-3f0a-3afa-adc748af4937" class="dropdown1_dropdown-link-3 w-dropdown-link">View</a>
                      <a href="#" class="dropdown1_dropdown-link-3 w-dropdown-link">Delete</a>
                    </nav>
                  </div>
                </div>
              </div>
              <div id="w-node-fb25833e-b694-9f14-5beb-e36fa94a450d-d55540a4" class="team-member">
                <div class="team-member-wrapper"><img src="../../assets/images/avatar.jpg" loading="lazy" alt="" class="team-member-image">
                  <div class="team-member-text">
                    <div class="team-member-name">Dele Alli</div>
                    <div class="body-small">Collaborating on 2 projects</div>
                  </div>
                  <div data-hover="false" data-delay="200" data-w-id="fb25833e-b694-9f14-5beb-e36fa94a4515" class="team-member-dropdown-component w-dropdown">
                    <div class="dropdown1_toggle w-dropdown-toggle"><img src="../../assets/images/more-horizontal.svg" loading="lazy" alt=""></div>
                    <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown1_dropdown-list-3 w-dropdown-list">
                      <a href="#" data-w-id="fb25833e-b694-9f14-5beb-e36fa94a4519" class="dropdown1_dropdown-link-3 w-dropdown-link">View</a>
                      <a href="#" class="dropdown1_dropdown-link-3 w-dropdown-link">Delete</a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div id="w-node-b3dabba4-892a-3241-f4d8-ab3b5084e514-d55540a4" class="empty-state hide"><img loading="lazy" src="../../assets/images/TeamEmptyState.svg" alt="">
              <p class="body-medium text-align-center text-color-gray600">Add Team mates to get started</p>
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
export default {
  name: "TeamView",
  components: {TeamMemberTasksModal, InviteTeamMemberModal, DashboardLayout},
  data(){
    return{
      showModal: false,
      showMemberModal: false,
      nav: false
    }
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
  }
}
</script>

<style scoped>

</style>