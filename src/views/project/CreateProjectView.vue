<template>
  <section class="section_contact-modal5">
    <div class="padding-global">
      <div class="container-large">
        <div class="padding-section-large">
          <div class="create-project-nav-menu first">
            <router-link :to="routesProject.project.createProject.path" aria-current="page" class="create-project-nav-link w-inline-block w--current">
              <img src="../../assets/images/ArrowLeft.svg" loading="lazy" alt="">
            </router-link>
            <router-link :to="routesProject.dashboard.homeView.path" class="create-project-nav-link w-inline-block"><img src="../../assets/images/X.svg" loading="lazy" alt=""></router-link>
          </div>
          <div class="contact-modal5_component">
            <div class="contact-modal5_content-wrapper">
              <div class="project-modal-container"><img src="../../assets/images/Logo.svg" loading="lazy" alt="" class="logo-project">
                <div class="project-modal-header">
                  <h2 class="display-x-small">Create a new project</h2>
                  <p class="body-large">How would you like to start ?</p>
                </div>
                <div class="max-width-medium align-center">
                  <div class="project-menu-grid">
                    <router-link :to="routesProject.project.fromScratch.path" class="new-project-menu w-inline-block">
                      <div class="new-project-menu-icon"><img src="../../assets/images/Plus.svg" loading="lazy" alt="" class="icon"></div>
                      <div class="project-menu-text">
                        <div>Blank Project</div>
                        <p class="body-xsmall text-color-gray500">Start from scratch</p>
                      </div>
                    </router-link>
                    <router-link :to="routesProject.project.fromWBS.path" class="new-project-menu w-inline-block">
                      <div class="new-project-menu-icon"><img src="../../assets/images/FileText.svg" loading="lazy" alt="" class="icon"></div>
                      <div class="project-menu-text">
                        <div>Import from spreadsheet</div>
                        <p class="body-xsmall text-color-gray500">Add from WBS Tool</p>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="container-small"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RouterUtils from "@/util/baseUtils/RouterUtils";
export default {
  name: "CreateProjectView",
  computed:{
    routesProject(){
      return RouterUtils.routes
    }
  }

}
</script>

<style scoped>

</style>