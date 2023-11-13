<template>
  <section class="section_contact-modal5">
    <div class="padding-global">
      <div class="container-large">
        <div class="padding-section-large">
          <div class="create-project-nav-menu">
            <router-link :to="routesProject.project.createProject.path" class="create-project-nav-link w-inline-block">
              <img src="../../assets/images/ArrowLeft.svg" loading="lazy" alt="">
            </router-link>
            <router-link :to="routesProject.dashboard.homeView.path" class="create-project-nav-link w-inline-block">
              <img src="../../assets/images/X.svg" loading="lazy" alt="">
            </router-link>
          </div>
          <div class="contact-modal5_component">
            <div class="contact-modal5_content-wrapper">
              <div class="project-modal-container">
                <div class="project-modal-header">
                  <h2 class="display-x-small">First, tell us about your project?</h2>
                  <p class="body-large">Import from Spreadsheet</p>
                </div>
                <div class="max-width-medium align-center">
                  <div class="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" class="project-form" data-wf-page-id="64d4aebea8b65943ddc7ceeb" data-wf-element-id="6ee099a6-dc2f-6a7c-2ced-0d9fde2ba525">
                      <div class="project-form-item"><label for="name" class="body-small text-color-gray400">Name</label><input type="text" class="project-form-input w-input" maxlength="256" name="name" data-name="Name" placeholder="Enter a name" id="name" required=""></div>
                      <div class="project-form-item"><label for="name-2" class="body-small text-color-gray400">Invite Team Members</label><input type="email" class="project-form-input w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Enter email" id="name-2"></div>
                      <div class="project-form-item"><label for="name-3" class="body-small text-color-gray400">Upload WBS</label>
                        <a href="#" class="link-block w-inline-block"><img src="../../assets/images/CloudArrowUp.svg" loading="lazy" alt="">
                          <div class="body-small">Upload WBS</div>
                        </a>
                      </div>
                      <a data-w-id="1b864022-40af-7442-5ffd-9123fa587fea" href="#" class="button w-button">Create</a>
                    </form>
                    <div class="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div class="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
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
  name: "CreateProjectFromWBSView",
  computed:{
    routesProject(){
      return RouterUtils.routes
    }
  }
}
</script>

<style scoped>

</style>