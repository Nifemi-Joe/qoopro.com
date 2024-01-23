<template>
  <div class="open-task-modal_component">
    <div class="open-task-modal_content-wrapper">
      <div class="task-main">
        <div class="form-block-2 w-form">
          <form id="email-form-23" name="email-form-2" data-name="Email Form 2" method="get" data-wf-page-id="64c09e2a2b95cbe3c8c2e92a" data-wf-element-id="207b1a22-dd03-0d80-2508-9ca04774d4e5">
            <div class="task-main-header"><label class="w-checkbox checkbox-field-2">
              <div class="w-checkbox-input w-checkbox-input--inputType-custom checkbox-3"></div><input type="checkbox" id="checkbox-81" name="checkbox-8" data-name="Checkbox 8" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="checkbox-8">Complete UX for new landing page</span>
            </label>
              <div class="task-header-content">
                <div class="label-medium">{{subtask.subtask.subTaskName}}</div>
                <p class="body-medium text-color-gray500">{{subtask.subtask.subTaskDescription}}</p>

                <div class="tag-group">
                  <!--                    <div class="tag-item"><img src="../../assets/images/calendar.svg" loading="lazy" alt="">-->
                  <!--                      <div class="body-small text-color-gray400" v-if="tasks.task.taskDueDate">{{getDate(tasks.task.taskDueDate)}} {{new Date(tasks.task.taskDueDate).toLocaleString('en-us',{month:'short'})}} {{new Date(tasks.task.taskDueDate).getFullYear()}} - {{getTime(tasks.task.taskDueDate)}}</div>-->
                  <!--                      <div class="body-small text-color-gray400" v-else>{{getDate(tasks.task.taskCreatedAt)}} {{new Date(tasks.task.taskCreatedAt).toLocaleString('en-us',{month:'short'})}} {{new Date(tasks.task.taskCreatedAt).getFullYear()}} - {{getTime(tasks.task.taskCreatedAt)}}</div>-->
                  <!--                    </div>-->
                  <div class="tag-item"><img src="../../assets/images/calendar.svg" loading="lazy" alt="">
                    <div class="body-small text-color-gray400">30 Aug 2022 - 11:30AM</div>
                  </div>
                  <div class="tag-item"><img src="../../assets/images/tag.svg" loading="lazy" alt="">
                    <div class="body-small text-color-gray400">UX</div>
                  </div>
                  <div class="tag-item">
                    <div class="created-dot"></div>
                    <div class="body-small text-color-gray400">Created By <span class="creator">Cooper</span></div>
                  </div>
                </div>
                <div class="task-status">
                  <a @click="openNav = !openNav" :class="{'w--open' : openNav}" data-hover="false" data-delay="200" data-w-id="92dbf34d-fa9f-b6f0-e495-ef64e98f4347" class="dropdown2_component w-dropdown">
                    <div class="dropdown2_toggle-3 w-dropdown-toggle" :class="{'w--open' : openNav}">
                      <div class="body-xsmall text-color-gray600">{{selectedStatus}}</div>
                      <div class="dropdown2_dropdown-icon-3 w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                      </svg></div>
                    </div>
                    <nav class="dropdown2_dropdown-list-3 w-dropdown-list" :class="{'w--open' : openNav}">
                      <a href="#" class="status-item-dropdown w-dropdown-link" @click="selectedStatus = 'In Progress'">In Progress</a>
                      <a href="#" class="status-item-dropdown w-dropdown-link" @click="selectedStatus = 'Overdue'">Overdue</a>
                      <a href="#" class="status-item-dropdown w-dropdown-link" @click="selectedStatus = 'Completed'">Completed</a>
                    </nav>
                  </a>
                  <div class="task-status-item"><img src="../../assets/images/Hexagon.svg" loading="lazy" alt="">
                    <div class="body-small" v-if="subtask.subtask.subTaskStatus === 'ACTIVE' || subtask.subtask.subTaskStatus === 'IN PROGRESS' || subtask.subtask.subTaskStatus === 'ONGOING'">In Progress</div>
                    <div class="body-small" v-else-if="subtask.subtask.subTaskStatus === 'OVERDUE'">Overdue</div>
                    <div class="body-small" v-else>Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="comment-section">
        <div class="body-large">Comments</div>
        <div class="comments-group">
          <div class="comment-item"><img src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" sizes="100vw" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" alt="" class="comment-image">
            <div class="comment-text">
              <p class="body-small text-color-gray600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <div class="comment-details">
                <div class="body-small text-color-gray600">By Sydney Cooper</div>
                <div class="body-small text-color-gray400">10 mins ago</div>
              </div>
            </div>
          </div>
          <div class="comment-item"><img src="../../assets/images/avatar.jpg" loading="lazy" alt="" class="comment-image">
            <div class="comment-text">
              <p class="body-small text-color-gray600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
              <div class="comment-details">
                <div class="body-small text-color-gray600">By Sydney Cooper</div>
                <div class="body-small text-color-gray400">10 mins ago</div>
              </div>
            </div>
          </div>
        </div>
        <div class="add-comment"><img src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" sizes="100vw" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" alt="" class="comment-image">
          <div class="form-block-3 w-form">
            <form id="email-form-3" name="email-form-3" data-name="Email Form 3" method="get" data-wf-page-id="64c09e2a2b95cbe3c8c2e92a" data-wf-element-id="207b1a22-dd03-0d80-2508-9ca04774d597"><input type="text" class="text-field w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Write your comments" id="name-2"></form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
      <a @click="closeNewModal('.open-task-modal_component')" data-w-id="207b1a22-dd03-0d80-2508-9ca04774d59f" href="#" class="login-modal1_close-button-2 black w-inline-block">
        <div class="icon-embed-small hide-mobile-landscape w-embed"><svg width="100%" height="100%" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.056 23.5004L23.5004 24.056C23.1935 24.3628 22.696 24.3628 22.3892 24.056L16 17.6668L9.61078 24.056C9.30394 24.3628 8.80645 24.3628 8.49961 24.056L7.94403 23.5004C7.63719 23.1936 7.63719 22.6961 7.94403 22.3892L14.3332 16L7.94403 9.61081C7.63719 9.30397 7.63719 8.80648 7.94403 8.49964L8.49961 7.94406C8.80645 7.63721 9.30394 7.63721 9.61078 7.94406L16 14.3333L22.3892 7.94404C22.6961 7.6372 23.1935 7.6372 23.5004 7.94404L24.056 8.49963C24.3628 8.80647 24.3628 9.30395 24.056 9.61079L17.6667 16L24.056 22.3892C24.3628 22.6961 24.3628 23.1936 24.056 23.5004Z" fill="currentColor"></path>
        </svg></div><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031623afe4aee7e_icon_close-modal.svg" loading="lazy" alt="" class="show-mobile-landscape">
      </a>
    </div>
    <div data-w-id="207b1a22-dd03-0d80-2508-9ca04774d5a2" class="modal_background-overlay"></div>
  <ConfirmDeleteModal module="subtask"/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import ConfirmDeleteModal from "@/components/modals/ConfirmDeleteModal.vue";

export default {
  name: "TaskDetailsModal",
  components: {ConfirmDeleteModal},
  data(){
    return {
      openNav: false,
      selectedStatus: "Select Status"
    }
  },
  props:{
    closeModal: Function
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
  },
  computed: {
    ...mapState(["task","subtask"])
  }
}
</script>

<style scoped>

</style>