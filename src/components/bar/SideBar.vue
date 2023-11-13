<template>
  <div class="shell4_sidebar-wrapper">
    <div class="shell4_sidebar-height w-embed">
<!--      <style>-->
<!--        /* This code adjusts the height of the sidebar to work with the topbar and fit within the viewport height */-->
<!--        .shell4_sidebar-wrapper {-->
<!--          height: calc(100vh - 4.5rem); /* 4.5rem reflects the height of the topbar */-->
<!--        }-->
<!--        @media only screen and (max-width: 991px) {-->
<!--          .shell4_sidebar-wrapper {-->
<!--            height: 100%;-->
<!--          }-->
<!--        }-->
<!--      </style>-->
    </div>
    <div data-animation="over-left" class="sidebar7_component w-nav" data-easing2="ease" fs-scrolldisable-element="smart-nav" data-easing="ease" data-collapse="medium" data-w-id="d210af73-f82a-c61b-bfb5-2f3fd74c2a36" role="banner" data-duration="400">
      <div class="sidebar7_container">
        <nav role="navigation" class="sidebar7_menu w-nav-menu">
          <div class="sidebar7_menu-wrapper">
            <div class="sidebar7_menu-top">
              <router-link :to="routesDash.homeView.path" aria-current="page" :class="isActive(routesDash.homeView.path) ? 'sidebar7_link w-inline-block w--current' : 'sidebar7_link w-inline-block'">
                <div class="sidebar7_link-wrapper">
                  <div class="icon-embed-xsmall w-embed">
                    <svg width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10.3473 1.68314L10.3482 1.68382L16.122 6.29958C16.1222 6.2997 16.1223 6.29983 16.1225 6.29996C16.3717 6.50079 16.5986 6.83426 16.7472 7.22356C16.8957 7.61283 16.949 8.01413 16.8972 8.33246C16.8972 8.33261 16.8971 8.33275 16.8971 8.3329L15.7892 14.9635C15.7892 14.9637 15.7892 14.9639 15.7891 14.9641C15.6228 15.9392 14.6543 16.7584 13.6667 16.7584H4.33333C3.33689 16.7584 2.3772 15.9471 2.2109 14.9643C2.21088 14.9642 2.21086 14.964 2.21084 14.9639L1.10263 8.33137L1.10264 8.33137L1.1022 8.32882C1.04722 8.0119 1.09841 7.61195 1.24659 7.22356C1.39474 6.83523 1.62322 6.50209 1.87593 6.30122L1.87713 6.30026L7.65213 1.67526L7.65233 1.6751C8.38253 1.08956 9.60727 1.08835 10.3473 1.68314ZM6.5 9.83337C6.5 11.2135 7.61988 12.3334 9 12.3334C10.3801 12.3334 11.5 11.2135 11.5 9.83337C11.5 8.45325 10.3801 7.33337 9 7.33337C7.61988 7.33337 6.5 8.45325 6.5 9.83337Z" fill="currentColor" stroke="#currentColor" stroke-width="0.833333"></path>
                    </svg>
                  </div>
                  <div>Home</div>
                </div>
              </router-link>
              <router-link :to="routesDash.task.path" :class="isActive(routesDash.task.path) ? 'sidebar7_link w-inline-block w--current' : 'sidebar7_link w-inline-block'">
                <div class="sidebar7_link-wrapper">
                  <div class="icon-embed-xsmall w-embed"><svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.13036 11.2388L5.98232 12.3868C5.57506 12.0915 5.00344 12.1181 4.63282 12.4863C4.21691 12.8911 4.21682 13.5587 4.63255 13.9636L5.25101 14.582C5.45861 14.8007 5.74007 14.8917 5.99166 14.8917C6.25454 14.8917 6.52069 14.7936 6.72795 14.5864L8.60295 12.7114C9.00734 12.307 9.00734 11.6432 8.60295 11.2388L8.60299 11.2387L8.59792 11.2338C8.18921 10.8388 7.53745 10.8317 7.13036 11.2388ZM7.13036 5.40545L5.98232 6.5535C5.57507 6.25816 5.00347 6.28479 4.63286 6.65297C4.21692 7.05775 4.21681 7.72532 4.63255 8.13023L5.25099 8.74867C5.4586 8.96736 5.74006 9.05841 5.99166 9.05841C6.25454 9.05841 6.52069 8.9603 6.72795 8.75304L8.60295 6.87804C9.00734 6.47366 9.00734 5.80984 8.60295 5.40545L8.60299 5.40541L8.59792 5.4005C8.18921 5.00542 7.53745 4.99837 7.13036 5.40545ZM6.50832 2.08341H13.4917C14.9255 2.08341 16.0198 2.50919 16.7554 3.24471C17.4909 3.98023 17.9167 5.07461 17.9167 6.50841V13.4917C17.9167 14.9256 17.4909 16.0199 16.7554 16.7555C16.0198 17.491 14.9255 17.9167 13.4917 17.9167H6.50832C5.07452 17.9167 3.98014 17.491 3.24462 16.7555C2.5091 16.0199 2.08332 14.9256 2.08332 13.4917V6.50841C2.08332 5.07461 2.5091 3.98023 3.24462 3.24471C3.98014 2.50919 5.07452 2.08341 6.50832 2.08341ZM10.2583 14.2667H14.6333C15.2171 14.2667 15.675 13.7932 15.675 13.2251C15.675 12.6569 15.2171 12.1834 14.6333 12.1834H10.2583C9.68654 12.1834 9.21666 12.6533 9.21666 13.2251C9.21666 13.7969 9.68654 14.2667 10.2583 14.2667ZM10.2583 8.43341H14.6333C15.2171 8.43341 15.675 7.95991 15.675 7.39175C15.675 6.82359 15.2171 6.35008 14.6333 6.35008H10.2583C9.68654 6.35008 9.21666 6.81996 9.21666 7.39175C9.21666 7.96353 9.68654 8.43341 10.2583 8.43341Z" fill="currentColor" stroke="currentColor" stroke-width="0.833333"></path>
                  </svg></div>
                  <div>My Tasks</div>
                </div>
                <div class="sidebar7_badge">
                  <div class="text-size-small-2">24</div>
                </div>
              </router-link>
              <router-link :to="routesDash.projects.path" :class="isActive(routesDash.projects.path) ? 'sidebar7_link w-inline-block w--current' : 'sidebar7_link w-inline-block'">
                <div class="sidebar7_link-wrapper">
                  <div class="icon-embed-xsmall w-embed"><svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 18.3334H12.5C13.8833 18.3334 15 17.2167 15 15.8334V4.16675C15 2.78341 13.8833 1.66675 12.5 1.66675H7.5C6.11667 1.66675 5 2.78341 5 4.16675V15.8334C5 17.2167 6.11667 18.3334 7.5 18.3334Z" fill="currentColor"></path>
                    <path d="M3.74999 4.94168V15.0583C3.74999 15.325 3.50832 15.5167 3.24999 15.4667C2.01666 15.2417 1.66666 14.525 1.66666 12.775V7.22501C1.66666 5.47501 2.01666 4.75834 3.24999 4.53334C3.50832 4.48334 3.74999 4.67501 3.74999 4.94168Z" fill="currentColor"></path>
                    <path d="M18.3333 7.22501V12.775C18.3333 14.525 17.9833 15.2417 16.75 15.4667C16.4917 15.5167 16.25 15.3167 16.25 15.0583V4.94168C16.25 4.67501 16.4917 4.48334 16.75 4.53334C17.9833 4.75834 18.3333 5.47501 18.3333 7.22501Z" fill="currentColor"></path>
                  </svg></div>
                  <div>Projects</div>
                </div>
              </router-link>
              <router-link :to="routesDash.team.path" :class="isActive(routesDash.team.path) ? 'sidebar7_link w-inline-block w--current' : 'sidebar7_link w-inline-block'">
                <div class="sidebar7_link-wrapper">
                  <div class="icon-embed-xsmall w-embed"><svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6083 6.47508C14.55 6.46675 14.4917 6.46675 14.4333 6.47508C13.1417 6.43341 12.1167 5.37508 12.1167 4.07508C12.1167 2.75008 13.1917 1.66675 14.525 1.66675C15.85 1.66675 16.9333 2.74175 16.9333 4.07508C16.925 5.37508 15.9 6.43341 14.6083 6.47508Z" fill="currentColor"></path>
                    <path d="M17.325 12.2501C16.3917 12.8751 15.0833 13.1084 13.875 12.9501C14.1917 12.2668 14.3583 11.5084 14.3667 10.7084C14.3667 9.87509 14.1833 9.08343 13.8333 8.39176C15.0667 8.22509 16.375 8.45843 17.3167 9.08343C18.6333 9.95009 18.6333 11.3751 17.325 12.2501Z" fill="currentColor"></path>
                    <path d="M5.36665 6.47508C5.42499 6.46675 5.48332 6.46675 5.54165 6.47508C6.83332 6.43341 7.85832 5.37508 7.85832 4.07508C7.85832 2.74175 6.78332 1.66675 5.44999 1.66675C4.12499 1.66675 3.04999 2.74175 3.04999 4.07508C3.04999 5.37508 4.07499 6.43341 5.36665 6.47508Z" fill="currentColor"></path>
                    <path d="M5.45834 10.7083C5.45834 11.5167 5.63334 12.2833 5.95001 12.975C4.77501 13.1 3.55001 12.85 2.65001 12.2583C1.33334 11.3833 1.33334 9.95834 2.65001 9.08334C3.54167 8.48334 4.80001 8.24167 5.98334 8.37501C5.64167 9.07501 5.45834 9.86667 5.45834 10.7083Z" fill="currentColor"></path>
                    <path d="M10.1 13.225C10.0333 13.2167 9.95833 13.2167 9.88333 13.225C8.35 13.175 7.125 11.9167 7.125 10.3667C7.13333 8.78333 8.40833 7.5 10 7.5C11.5833 7.5 12.8667 8.78333 12.8667 10.3667C12.8583 11.9167 11.6417 13.175 10.1 13.225Z" fill="currentColor"></path>
                    <path d="M7.39166 14.95C6.13332 15.7916 6.13332 17.175 7.39166 18.0083C8.82499 18.9666 11.175 18.9666 12.6083 18.0083C13.8667 17.1666 13.8667 15.7833 12.6083 14.95C11.1833 13.9916 8.83332 13.9916 7.39166 14.95Z" fill="currentColor"></path>
                  </svg></div>
                  <div>Team</div>
                </div>
              </router-link>
              <router-link :to="routesDash.settings.path" :class="isActive(routesDash.settings.path) ? 'sidebar7_link w-inline-block w--current' : 'sidebar7_link w-inline-block'">
                <div class="sidebar7_link-wrapper">
                  <div class="icon-embed-xsmall w-embed"><svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.75 7.68336C15.2417 7.68336 14.625 6.61669 15.375 5.30836C15.8083 4.55003 15.55 3.58336 14.7917 3.15003L13.35 2.32503C12.6917 1.93336 11.8417 2.1667 11.45 2.82503L11.3583 2.98336C10.6083 4.2917 9.37499 4.2917 8.61666 2.98336L8.52499 2.82503C8.14999 2.1667 7.29999 1.93336 6.64166 2.32503L5.19999 3.15003C4.44166 3.58336 4.18332 4.55836 4.61666 5.3167C5.37499 6.61669 4.75832 7.68336 3.24999 7.68336C2.38332 7.68336 1.66666 8.39169 1.66666 9.26669V10.7334C1.66666 11.6 2.37499 12.3167 3.24999 12.3167C4.75832 12.3167 5.37499 13.3834 4.61666 14.6917C4.18332 15.45 4.44166 16.4167 5.19999 16.85L6.64166 17.675C7.29999 18.0667 8.14999 17.8334 8.54166 17.175L8.63332 17.0167C9.38332 15.7084 10.6167 15.7084 11.375 17.0167L11.4667 17.175C11.8583 17.8334 12.7083 18.0667 13.3667 17.675L14.8083 16.85C15.5667 16.4167 15.825 15.4417 15.3917 14.6917C14.6333 13.3834 15.25 12.3167 16.7583 12.3167C17.625 12.3167 18.3417 11.6084 18.3417 10.7334V9.26669C18.3333 8.40003 17.625 7.68336 16.75 7.68336ZM9.99999 12.7084C8.50832 12.7084 7.29166 11.4917 7.29166 10C7.29166 8.50836 8.50832 7.2917 9.99999 7.2917C11.4917 7.2917 12.7083 8.50836 12.7083 10C12.7083 11.4917 11.4917 12.7084 9.99999 12.7084Z" fill="currentColor"></path>
                  </svg></div>
                  <div>Settings</div>
                </div>
              </router-link>
            </div>
            <div class="sidebar7_menu-bottom">
              <a href="#" class="sidebar7_link w-inline-block" @click="logOut">
                <div class="sidebar7_link-wrapper">
                  <div class="icon-embed-xsmall w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" style="fill: currentColor;">
                      <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path>
                      <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
                    </svg>
                  </div>
                  <div>Log out</div>
                </div>
              </a>
            </div>
          </div>
        </nav>
        <div class="sidebar7_menu-button w-nav-button">
          <div class="menu-icon is-left">
            <div class="menu-icon_line-top"></div>
            <div class="menu-icon_line-middle">
              <div class="menu-icon_line-middle-inner"></div>
            </div>
            <div class="menu-icon_line-bottom"></div>
          </div>
        </div>
      </div>
      <div class="sidebar7_close-tablet">
        <div class="sidebar7_menu-button w-nav-button">
          <div class="icon-embed-small w-embed"><svg width="100%" height="100%" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.1266 16.773L16.7729 17.1266C16.5777 17.3218 16.2611 17.3218 16.0658 17.1266L12 13.0607L7.9341 17.1265C7.73888 17.3218 7.42229 17.3218 7.22702 17.1265L6.87347 16.773C6.6782 16.5777 6.6782 16.2612 6.87347 16.0659L10.9394 12L6.87347 7.93413C6.6782 7.73891 6.6782 7.42232 6.87347 7.22705L7.22702 6.8735C7.42228 6.67824 7.73888 6.67824 7.9341 6.8735L12 10.9394L16.0658 6.8735C16.2611 6.67824 16.5777 6.67824 16.7729 6.8735L17.1266 7.22705C17.3218 7.42231 17.3218 7.73891 17.1266 7.93413L13.0607 12L17.1266 16.0659C17.3218 16.2612 17.3218 16.5777 17.1266 16.773Z" fill="currentColor"></path>
          </svg></div>
        </div>
      </div>
      <div class="sidebar7_background-layer"></div>
    </div>
  </div>
</template>

<script>
import RouterUtils from "@/util/baseUtils/RouterUtils";
import StoreUtils from "@/util/baseUtils/StoreUtils";
export default {
  name: "SideBar",
  computed:{
    routesDash(){
      return RouterUtils.routes.dashboard
    }
  },
  methods:{
    isActive(route){
      if(this.$route.path === route){
        return true
      }
      else{
        return false;
      }
    },
    logOut(){
      StoreUtils.dispatch("auth/logout");
    }
  }
}
</script>

<style scoped>

</style>