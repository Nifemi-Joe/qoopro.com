<script>
import DashboardLayout from "@/layout/DashboardLayout.vue";
import StoreUtils from "@/util/baseUtils/StoreUtils";
import {mapState} from "vuex";
import CreateTaskModal from "@/components/modals/CreateTaskModal.vue";

export default {
  name: "ProjectDetailView",
  components: {CreateTaskModal, DashboardLayout},
  computed:{
    ...mapState(["project", "task"])
  },
  data(){
    return{
      show: false,
      id: "",
      currentTab: "Tab 1"
    }
  },
  methods: {
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
  },
  mounted() {
    console.log(this.$route.params.id)
    let id = this.$route.params.id;
    this.$store.dispatch("project/readProjectId", {projectId : id})
    StoreUtils.dispatch(StoreUtils.actions.project.readProjectById, {projectId: id});
  }
}

</script>

<template>
  <DashboardLayout>
    <main class="shell4_main-wrapper">
      <div class="page-header">
        <div class="padding-small">
          <div class="margin-bottom margin-small">
            <div class="page-header2_breadcrumb">
              <router-link to="/projects" class="breadcrumb-link w-inline-block">
                <div class="text-size-regular">Projects</div>
              </router-link>
              <div class="breadcrumb-divider w-embed"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3L11 8L6 13" stroke="CurrentColor" stroke-width="1.5"></path>
              </svg></div>
              <a class="breadcrumb-link is-active w-inline-block">
                <div class="text-size-regular text-weight-medium">{{project.project.projectName}}</div>
              </a>
            </div>
          </div>
          <div class="container-large">
            <div class="dashboard-header-frame">
              <div class="db-team-actions">
                <div class="projectctitlewrapper">
                  <p class="heading-large text-color-gray900">{{project.project.projectName}}</p>
                  <p class="body-medium text-color-gray500">{{project.project.projectDescription}}</p>
                </div>
                <div class="div-block-17">
                  <a data-w-id="f306afa8-af5b-a42f-b22c-6c85f31873f2" href="#" class="button is-secondary is-icon w-inline-block">
                    <div class="w-embed"><svg width="21" height="21" viewbox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 5.25V15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M5.25 10.5H15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></div>
                    <div>Edit Project</div>
                  </a>
                  <a @click="openNewModal('.create-task-modal_component')" class="button is-icon w-inline-block">
                    <div class="w-embed"><svg width="21" height="21" viewbox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 5.25V15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M5.25 10.5H15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></div>
                    <div>Add Task</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section_shell4-layout">
        <div class="div-block-40">
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
                <div id="w-node-_5f05cba8-8716-e90e-8f2d-62bdf9c8258c-5205c0d9" class="tasks">
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
                      <div data-delay="200" data-hover="false" data-w-id="5f05cba8-8716-e90e-8f2d-62bdf9c8259a" class="dropdown1_component-2 w-dropdown">
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
                <div id="w-node-_5f05cba8-8716-e90e-8f2d-62bdf9c8265c-5205c0d9" class="empty-state"><img alt="" loading="lazy" src="../../assets/images/TasksEmptyState.svg">
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
      <CreateTaskModal/>
    </main>
  </DashboardLayout>
</template>

<style scoped>

</style>