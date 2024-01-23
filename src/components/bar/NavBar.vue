<template>
  <div>
    <div class="topbar_component">
    <div class="topbar2_container">
      <a href="#" id="w-node-_553081dc-4e93-e7af-13cd-e18153923f20-53923f1e" class="topbar2_logo-link w-nav-brand">
        <img src="../../assets/images/Logo.svg" loading="lazy" alt="" class="topbar2_logo">
      </a>
      <div id="w-node-_553081dc-4e93-e7af-13cd-e18153923f22-53923f1e" class="topbar2_search-desktop">
        <div class="topbar2_form-block w-form">
<!--          <form name="wf-form-Search-2-3" data-name="Search 2" method="get" id="email-form1" class="topbar2_form" data-wf-page-id="64bcd81e46471cbebdd67e75" data-wf-element-id="553081dc-4e93-e7af-13cd-e18153923f24">-->
<!--            <div class="topbar2_search">-->
<!--              <input type="text" class="form-input-2 is-search-input w-input" maxlength="256" name="field-2" data-name="Field 2" placeholder="Search" id="field-2">-->
<!--              <div class="search-icon text-color-gray400 w-embed"><svg width="100%" height="100%" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill="currentColor"></path>-->
<!--              </svg></div>-->
<!--            </div>-->
<!--          </form>-->
        </div>
      </div>
      <div id="w-node-_553081dc-4e93-e7af-13cd-e18153923f2e-53923f1e" class="topbar2_content-right">
        <div class="topbar2_search-button-tablet">
          <div class="icon-embed-xsmall w-embed"><svg width="100%" height="100%" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill="currentColor"></path>
          </svg></div>
        </div>
        <a @click="openNewModal('.new-modal_component')" data-w-id="db1e2bb1-1b08-832c-600a-c9072b0ff5ab" href="#" class="button-2 is-tertiary is-small is-icon-only w-inline-block">
          <div class="icon-embed-xsmall w-embed"><svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99984 1.66699C5.40817 1.66699 1.6665 5.40866 1.6665 10.0003C1.6665 14.592 5.40817 18.3337 9.99984 18.3337C14.5915 18.3337 18.3332 14.592 18.3332 10.0003C18.3332 5.40866 14.5915 1.66699 9.99984 1.66699ZM13.3332 10.6253H10.6248V13.3337C10.6248 13.6753 10.3415 13.9587 9.99984 13.9587C9.65817 13.9587 9.37484 13.6753 9.37484 13.3337V10.6253H6.6665C6.32484 10.6253 6.0415 10.342 6.0415 10.0003C6.0415 9.65866 6.32484 9.37533 6.6665 9.37533H9.37484V6.66699C9.37484 6.32533 9.65817 6.04199 9.99984 6.04199C10.3415 6.04199 10.6248 6.32533 10.6248 6.66699V9.37533H13.3332C13.6748 9.37533 13.9582 9.65866 13.9582 10.0003C13.9582 10.342 13.6748 10.6253 13.3332 10.6253Z" fill="currentColor"></path>
          </svg></div>
        </a>
        <div data-hover="false" data-delay="200" class="topbar2_menu-dropdown w-dropdown">
          <div class="topbar2_dropdown-toggle w-dropdown-toggle" @click="changeShow">
            <div class="button-2 is-tertiary is-small is-icon-only">
              <div class="icon-embed-xsmall w-embed"><svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1167 12.0751L15.2833 10.6917C15.1083 10.3834 14.95 9.80008 14.95 9.45841V7.35008C14.95 5.39175 13.8 3.70008 12.1417 2.90841C11.7083 2.14175 10.9083 1.66675 9.99166 1.66675C9.08333 1.66675 8.26666 2.15841 7.83333 2.93341C6.20833 3.74175 5.08333 5.41675 5.08333 7.35008V9.45841C5.08333 9.80008 4.92499 10.3834 4.74999 10.6834L3.90833 12.0751C3.57499 12.6334 3.49999 13.2501 3.70833 13.8167C3.90833 14.3751 4.38333 14.8084 4.99999 15.0167C6.61666 15.5667 8.31666 15.8334 10.0167 15.8334C11.7167 15.8334 13.4167 15.5667 15.0333 15.0251C15.6167 14.8334 16.0667 14.3917 16.2833 13.8167C16.5 13.2417 16.4417 12.6084 16.1167 12.0751Z" fill="currentColor"></path>
                <path d="M12.3584 16.6751C12.0084 17.6417 11.0834 18.3334 10 18.3334C9.34169 18.3334 8.69169 18.0667 8.23336 17.5917C7.96669 17.3417 7.76669 17.0084 7.65002 16.6667C7.75836 16.6834 7.86669 16.6917 7.98336 16.7084C8.17502 16.7334 8.37502 16.7584 8.57502 16.7751C9.05002 16.8167 9.53336 16.8417 10.0167 16.8417C10.4917 16.8417 10.9667 16.8167 11.4334 16.7751C11.6084 16.7584 11.7834 16.7501 11.95 16.7251C12.0834 16.7084 12.2167 16.6917 12.3584 16.6751Z" fill="currentColor"></path>
              </svg></div>
            </div>
          </div>
          <nav class="topbar2_dropdown-list w-dropdown-list" :class="{'w--open' : show}">
            <div class="topbar2_dropdown-content">
              <div class="topbar2_notification-header">
                <div class="text-block-4">Notifications</div>
                <a href="#" class="button-2 is-link w-button">Mark as read</a>
              </div>
              <div class="topbar2_notification-wrapper">
                <div class="topbar2_notification">
                  <div class="icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor"></path>
                  </svg></div>
                  <div class="topbar2_notification-content">
                    <div class="text-block-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div id="w-node-_553081dc-4e93-e7af-13cd-e18153923f44-53923f1e" class="margin-top margin-xxsmall">
                      <div class="text-size-small-2">11 Jan 2022</div>
                    </div>
                  </div>
                </div>
                <div class="topbar2_notification">
                  <div class="icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor"></path>
                  </svg></div>
                  <div class="topbar2_notification-content">
                    <div class="text-block-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div id="w-node-_780021bf-f080-6215-ddff-63c092ff5d27-53923f1e" class="margin-top margin-xxsmall">
                      <div class="text-size-small-2">11 Jan 2022</div>
                    </div>
                  </div>
                </div>
                <div class="topbar2_notification">
                  <div class="icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor"></path>
                  </svg></div>
                  <div class="topbar2_notification-content">
                    <div class="text-block-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div id="w-node-_11a05896-65cd-2e40-a7d0-3f876e91f5b4-53923f1e" class="margin-top margin-xxsmall">
                      <div class="text-size-small-2">11 Jan 2022</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="topbar2_notification-buttons">
                <router-link to="/notifications" aria-current="page" class="button-2 is-link is-icon w-inline-block w--current">
                  <div>View All</div>
                  <div class="icon-embed-xxsmall w-embed"><svg width="16px" height="16px" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="1.5"></path>
                  </svg></div>
                </router-link>
              </div>
            </div>
          </nav>
        </div>
        <router-link :to="myRoutes.dashboard.settings.path" style="text-decoration: none">
          <img v-if="'customerPhoto' in customerDetails" :src="customerDetails.customerPhoto" class="topbar2_avatar-image"/>
          <div v-else  style="height: 35px; display: flex; justify-content: center; align-items: center; background-color: #f0efff; color:#5e56ff; width: 35px; border-radius: 50%; border: 1px solid #5e56ff;">
            {{ customerDetails.customerFirstName.charAt(0)}}{{ customerDetails.customerLastName.charAt(0)}}
          </div>
        </router-link>
<!--        <img src="../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6.jpeg" loading="lazy" sizes="(max-width: 479px) 32px, 40px" srcset="../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6-p-500.jpeg 500w, ../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6-p-800.jpeg 800w, ../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6-p-1080.jpeg 1080w, ../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6-p-1600.jpeg 1600w, ../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6-p-2000.jpeg 2000w, ../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6.jpeg 3289w" alt="" class="topbar2_avatar-image">-->
      </div>
    </div>
    <div class="topbar2_search-tablet">
      <div class="topbar2_search-wrapper">
        <div class="topbar2_form-block w-form">
          <form name="wf-form-Search-2-4" data-name="Search 2" method="get" id="email-form2" class="topbar2_form" data-wf-page-id="64bcd81e46471cbebdd67e75" data-wf-element-id="553081dc-4e93-e7af-13cd-e18153923f63">
            <div class="topbar2_search"><input type="text" class="form-input-2 is-search-input w-input" maxlength="256" name="field-2" data-name="Field 2" placeholder="Search" id="field-21">
              <div class="search-icon w-embed"><svg width="100%" height="100%" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill="currentColor"></path>
              </svg></div>
            </div>
          </form>
        </div>
        <div class="topbar2_close-icon">
          <div class="icon-embed-small w-embed"><svg width="100%" height="100%" viewbox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.8354 22.864L22.3639 23.3354C22.1036 23.5957 21.6815 23.5957 21.4211 23.3354L16 17.9142L10.5788 23.3353C10.3185 23.5957 9.89638 23.5957 9.63603 23.3353L9.16462 22.8639C8.90427 22.6036 8.90427 22.1815 9.16462 21.9211L14.5858 16.5L9.16462 11.0788C8.90427 10.8185 8.90427 10.3964 9.16462 10.136L9.63602 9.66463C9.89637 9.40428 10.3185 9.40428 10.5788 9.66463L16 15.0858L21.4211 9.66462C21.6815 9.40427 22.1036 9.40427 22.3639 9.66462L22.8354 10.136C23.0957 10.3964 23.0957 10.8185 22.8354 11.0788L17.4142 16.5L22.8354 21.9211C23.0957 22.1815 23.0957 22.6036 22.8354 22.864Z" fill="currentColor"></path>
          </svg></div>
        </div>
      </div>
      <div class="topbar2_search-overlay"></div>
    </div>
  </div>
    <WhatToCreateModal/>
    <CreateTaskModal :subtask="false" v-if="openTask"/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import WhatToCreateModal from "@/components/modals/WhatToCreateModal";
import CreateTaskModal from "@/components/modals/CreateTaskModal";
import RouterUtils from "@/util/baseUtils/RouterUtils";

export default {
  name: "NavBar",
  components: {CreateTaskModal, WhatToCreateModal},
  data(){
    return{
      show: false,
      openTask: false
    }
  },
  computed:{
    ...mapState({
      customerDetails: state => state.customer.customerDetails
    }),
    myRoutes() {
      return RouterUtils.routes
    },
  },
  methods:{
    changeShow(){
      this.show = !this.show
    },
    openNewModal(className){
      document.querySelector(className).style.display = "flex";
      this.openTask = true;
      setTimeout(() => {
        document.querySelector(className).style.opacity = 1
      },500  )
    },
    closeNewModal(className){
      document.querySelector(className).style.opacity = 0;
      this.openTask = false;
      setTimeout(() => {
        document.querySelector(className).style.display = "none"
      },500  )
    },
  }
}
</script>

<style scoped>

</style>