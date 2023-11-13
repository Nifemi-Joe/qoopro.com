<template>
  <DashboardLayout>
    <main class="shell4_main-wrapper">
      <div class="page-header">
        <div class="padding-small">
          <div class="container-large">
            <div class="div-block-20">
              <div class="dashboard-header-frame">
                <div class="db-header-text">
                  <div class="header-text">
                    <p class="heading-large text-color-gray600">Settings</p>
                    <p class="body-medium text-color-gray500">You can find all your settings here</p>
                  </div>
                </div>
              </div>
              <div id="w-node-_4c05cc48-deed-5da5-fb4f-3606668af395-01a4ca85" data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" class="tabs w-tabs">
                <div id="w-node-_4c05cc48-deed-5da5-fb4f-3606668af396-01a4ca85" class="tabs-menu w-tab-menu">
                  <a @click="openProfile" data-w-tab="Tab 1" :class="profile ? 'settings-tab-link w-inline-block w-tab-link w--current' :'settings-tab-link w-inline-block w-tab-link'">
                    <div class="tab-icon w-embed">
                      <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4524 2.89558L11.1742 6.17385L11.6161 8.38356L13.8258 8.8255L17.1041 5.54723L17.1044 5.54709C17.5102 6.50493 17.6072 7.56545 17.382 8.58102C17.1568 9.59659 16.6206 10.5167 15.848 11.2132C15.0754 11.9098 14.1049 12.3481 13.0715 12.4673C12.0381 12.5864 10.9933 12.3804 10.0824 11.8779L10.0825 11.8777L5.7008 16.9505C5.3491 17.3018 4.8723 17.4991 4.3752 17.4989C3.8781 17.4988 3.40141 17.3012 3.04991 16.9497C2.69841 16.5982 2.50087 16.1216 2.50073 15.6245C2.50059 15.1274 2.69785 14.6506 3.04915 14.2989L8.12192 9.91718L8.12181 9.91723C7.61931 9.00641 7.41327 7.96159 7.53239 6.92819C7.65151 5.89479 8.08986 4.92424 8.78641 4.15164C9.48296 3.37903 10.4031 2.84282 11.4186 2.61763C12.4342 2.39245 13.4947 2.48949 14.4526 2.89526L14.4524 2.89558Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </div>
                    <div>Profile</div>
                  </a>
                  <a @click="openSecurity" data-w-tab="Tab 2" :class="security ? 'settings-tab-link w-inline-block w-tab-link w--current' :'settings-tab-link w-inline-block w-tab-link'">
                    <div class="tab-icon w-embed">
                      <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M16.25 6.875H3.75C3.40482 6.875 3.125 7.15482 3.125 7.5V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V7.5C16.875 7.15482 16.5952 6.875 16.25 6.875Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path d="M7.1875 6.875V4.0625C7.1875 3.31658 7.48382 2.60121 8.01126 2.07376C8.53871 1.54632 9.25408 1.25 10 1.25C10.7459 1.25 11.4613 1.54632 11.9887 2.07376C12.5162 2.60121 12.8125 3.31658 12.8125 4.0625V6.875" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </div>
                    <div>Security</div>
                  </a>
                  <a @click="openMembers" data-w-tab="Tab 3" :class="members ? 'settings-tab-link w-inline-block w-tab-link w--current' :'settings-tab-link w-inline-block w-tab-link'">
                    <div class="tab-icon w-embed">
                      <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 14.0625C11.7259 14.0625 13.125 12.6634 13.125 10.9375C13.125 9.21161 11.7259 7.8125 10 7.8125C8.27411 7.8125 6.875 9.21161 6.875 10.9375C6.875 12.6634 8.27411 14.0625 10 14.0625Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M15.3125 9.0625C16.0403 9.0619 16.7582 9.23102 17.4092 9.55645C18.0602 9.88188 18.6263 10.3546 19.0626 10.9372" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M0.937256 10.9373C1.37354 10.3548 1.93968 9.88196 2.59069 9.5565C3.2417 9.23104 3.95964 9.0619 4.68748 9.0625" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.50269 16.8749C5.91325 16.0317 6.55263 15.3208 7.34785 14.8235C8.14307 14.3262 9.06208 14.0625 9.99999 14.0625C10.9379 14.0625 11.8569 14.3262 12.6521 14.8235C13.4474 15.3208 14.0867 16.0316 14.4973 16.8749" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M4.68752 9.0625C4.21318 9.06241 3.74865 8.92738 3.34817 8.67316C2.9477 8.41895 2.62781 8.05605 2.42587 7.62684C2.22392 7.19763 2.14825 6.71982 2.2077 6.24921C2.26714 5.77861 2.45924 5.33462 2.76157 4.96911C3.06389 4.60359 3.46397 4.33163 3.91508 4.18498C4.36618 4.03833 4.8497 4.02304 5.30917 4.1409C5.76864 4.25876 6.1851 4.50491 6.50991 4.8506C6.83472 5.19629 7.05449 5.62725 7.14354 6.09316" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12.8565 6.09362C12.9455 5.62764 13.1653 5.1966 13.4901 4.85083C13.8149 4.50507 14.2314 4.25886 14.6909 4.14095C15.1505 4.02304 15.634 4.03831 16.0852 4.18496C16.5364 4.33162 16.9365 4.60361 17.2389 4.96917C17.5413 5.33473 17.7334 5.77878 17.7928 6.24945C17.8523 6.72012 17.7766 7.19798 17.5746 7.62724C17.3726 8.0565 17.0526 8.41943 16.6521 8.67365C16.2515 8.92787 15.7869 9.06288 15.3125 9.06292" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </div>
                    <div>Members</div>
                  </a>
                  <a @click="openBilling" data-w-tab="Tab 4" :class="billing ? 'settings-tab-link w-inline-block w-tab-link w--current' :'settings-tab-link w-inline-block w-tab-link'">
                    <div class="tab-icon w-embed">
                      <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5.625V6.875" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M10 13.125V14.375" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M8.125 13.125H10.9375C11.3519 13.125 11.7493 12.9604 12.0424 12.6674C12.3354 12.3743 12.5 11.9769 12.5 11.5625C12.5 11.1481 12.3354 10.7507 12.0424 10.4576C11.7493 10.1646 11.3519 10 10.9375 10H9.0625C8.6481 10 8.25067 9.83538 7.95765 9.54235C7.66462 9.24933 7.5 8.8519 7.5 8.4375C7.5 8.0231 7.66462 7.62567 7.95765 7.33265C8.25067 7.03962 8.6481 6.875 9.0625 6.875H11.875" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </div>
                    <div>Plan &amp; Billing</div>
                  </a>
                </div>
                <div class="w-tab-content">
                  <div data-w-tab="Tab 1" v-if="profile" :class="profile ? 'w-tab-pane w--tab-active' : 'w-tab-pane'">
                    <div class="settings-content-pane">
                      <div class="settings-header">
                        <div>General</div>
                      </div>
                      <div class="setting-content-div">
                        <div class="w-form">
                          <form id="email-form-23" name="email-form-2" data-name="Email Form 2" method="get" class="form-2" data-wf-page-id="64d4f3a5ebc91e4301a4ca85" data-wf-element-id="9f2f4614-5e36-8a72-70c7-8714c6774d15">
                            <div>
                              <div class="div-block-26">
                                <!--                              <img sizes="(max-width: 479px) 60px, 65px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" alt="" class="profile-image">-->
                                <img class="profile-image"  :src="
            picture || customerDetails.customerPhoto ||
            require('@/assets/images/profile-picture.svg')
            "/>
                                <a href="#" class="upload-link w-inline-block">
                                  <input style="cursor: pointer;" type="file" class="upload-file" @change="onImageSelect" accept="image/x-png,image/jpeg">
                                  <img style="cursor: pointer;" loading="lazy" src="../../assets/images/CloudArrow.svg" alt="">
                                  <div style="cursor: pointer;" class="body-xsmall text-color-gray600">Upload Profile Image</div>
                                </a>


                              </div>
                              <div class="project-form-item" v-if="showError" style="font-size: 13px; margin-top:10px;  color: red;">Profile picture is larger than 1MB</div>
                            </div>


                            <div class="project-form-item">
                              <label for="name-4" class="body-small text-color-gray400">Full Name</label>
                              <div class="settings-input-field">
                                <input v-model="name" type="text" class="project-form-input max-width w-input" maxlength="256" name="name-4" data-name="Name 4" :placeholder="fullName" id="name-4">
<!--                                <a  @click="updateFullName" href="#" class="button is-secondary w-button">Update</a>-->
                              </div>
                            </div>
                            <div class="project-form-item"><label for="name-4" class="body-small text-color-gray400">Phone Number</label>
                              <div class="settings-input-field">
                                <input v-model="phone" type="text" class="project-form-input max-width w-input" maxlength="256" name="name-3" data-name="Name 3" :placeholder="customerDetails.customerPhoneNumber"  id="name-31">
<!--                                <a @click="updatePhoneNumber" href="#" class="button is-secondary w-button">Update</a>-->
                              </div>
                            </div>
<!--                            <div class="project-form-item">-->
<!--                              <label for="name-4" class="body-small text-color-gray400">Email Address</label>-->
<!--                              <input type="text" class="project-form-input max-width w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="" id="name-2">-->
<!--                            </div>-->
                            <div class="cta">
                              <input v-if="!customerLoading"  type="submit" @click="updateDetails" value="Save changes" data-wait="Please wait..." class="button w-button">
                              <div v-else style="display: flex;">
                                <base-buttons />
                              </div>

                            </div>
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
                  <div data-w-tab="Tab 2"  v-if="security" :class="security ? 'w-tab-pane w--tab-active' : 'w-tab-pane'">
                    <div class="settings-content-pane">
                      <div class="settings-header">
                        <div>Security</div>
                      </div>
                      <div class="setting-content-div">
                        <div class="w-form">
                          <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" class="form-2" data-wf-page-id="64d4f3a5ebc91e4301a4ca85" data-wf-element-id="c01acee5-5d81-6264-cf6e-4f37d9d4354f">
                            <div class="project-form-item">
                              <label for="name" class="body-small text-color-gray400">Current Password</label>
                              <input type="password" v-model="changeModel.currentPassword" class="project-form-input max-width w-input" maxlength="256" name="name" data-name="Name" placeholder="" id="name">
                            </div>
                            <div class="project-form-item">
                              <label for="name-3" class="body-small text-color-gray400">New Password</label>
                              <input type="password"  v-model="password" class="project-form-input max-width w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="" id="name-3">
                            </div>
                            <div class="project-form-item">
                              <label for="name-2" class="body-small text-color-gray400">Re-type Password</label>
                              <input type="password" v-model="confirmPassword" class="project-form-input max-width w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="" id="name-2">
                              <div class="auth-error" v-if="confirmPasswordErrorVisible">Passwords don't match</div>
                            </div>
                            <div class="cta" style="display: flex;">
                              <div v-if="!loading">
                                <input type="submit" @click="setPassword" value="Save changes" data-wait="Please wait..." class="button w-button">
                              </div>
                              <base-buttons v-else />

                            </div>

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
                  <div data-w-tab="Tab 3" v-if="members" :class="members ? 'w-tab-pane w--tab-active' : 'w-tab-pane'">
                    <div class="settings-content-pane">
                      <div class="settings-header">
                        <div>Members</div>
                      </div>
                      <div class="members-sub">
                        <p>Manage your team members here</p>
                        <form action="/search" class="header25_search-form w-form"><input type="search" class="form-input-6 is-search-input w-input" maxlength="256" name="query" placeholder="Search by name or email" id="search" required="">
                          <div class="search-icon-2 w-embed"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.875 15.4554L20.875 19.4602C21.0536 19.6589 21.0448 19.9631 20.855 20.1511L20.155 20.8519C20.0611 20.9467 19.9333 21 19.8 21C19.6667 21 19.5389 20.9467 19.445 20.8519L15.445 16.8471C15.3344 16.7362 15.234 16.6156 15.145 16.4867L14.395 15.4855C13.1541 16.4776 11.613 17.0178 10.025 17.0173C6.75261 17.0287 3.90902 14.7686 3.17773 11.5751C2.44643 8.38161 4.0226 5.10699 6.9731 3.68991C9.92359 2.27284 13.461 3.09151 15.491 5.66125C17.521 8.23099 17.5019 11.866 15.445 14.4142L16.445 15.105C16.6012 15.2051 16.7454 15.3226 16.875 15.4554ZM5.025 10.0089C5.025 12.7736 7.26357 15.0149 10.025 15.0149C11.3511 15.0149 12.6229 14.4875 13.5605 13.5487C14.4982 12.6099 15.025 11.3366 15.025 10.0089C15.025 7.24412 12.7864 5.00285 10.025 5.00285C7.26357 5.00285 5.025 7.24412 5.025 10.0089Z" fill="CurrentColor"></path>
                          </svg></div><input type="submit" value="Invite People" class="button hide w-button">
                          <a data-w-id="2773c02b-a4c0-ef9a-ca95-6a4d8749222e" href="#" class="button w-button">Invite People</a>
                        </form>
                      </div>
                      <div class="setting-content-div">
                        <div class="w-layout-grid members-grid">
                          <div id="w-node-db43f737-1d13-706f-3d4c-fb238453ea66-01a4ca85" class="team-member-item">
                            <div class="member-left"><img sizes="40px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" alt="" class="member-image">
                              <div class="member-text-div">
                                <div class="member-name">Ben Peter</div>
                                <div class="member-email">benpeter@cloud.com</div>
                              </div>
                            </div>
                            <div class="text-block-3">Admin</div>
                            <div class="member-right">
                              <div data-delay="200" data-hover="false" data-w-id="82ff7b76-2148-b533-be1e-09e3cb08aab3" class="dropdown2_component w-dropdown">
                                <div class="dropdown2_toggle w-dropdown-toggle">
                                  <div>Actions</div>
                                  <div class="dropdown2_dropdown-icon w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                                  </svg></div>
                                </div>
                                <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown2_dropdown-list w-dropdown-list">
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option One</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Two</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Three</a>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_430bd83b-fbf5-c673-0a4c-1f80d10fde7c-01a4ca85" class="team-member-item">
                            <div class="member-left"><img sizes="40px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" alt="" class="member-image">
                              <div class="member-text-div">
                                <div class="member-name">Ben Peter</div>
                                <div class="member-email">benpeter@cloud.com</div>
                              </div>
                            </div>
                            <div class="text-block-3">Admin</div>
                            <div class="member-right">
                              <div data-delay="200" data-hover="false" data-w-id="430bd83b-fbf5-c673-0a4c-1f80d10fde87" class="dropdown2_component w-dropdown">
                                <div class="dropdown2_toggle w-dropdown-toggle">
                                  <div>Actions</div>
                                  <div class="dropdown2_dropdown-icon w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                                  </svg></div>
                                </div>
                                <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown2_dropdown-list w-dropdown-list">
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option One</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Two</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Three</a>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-e90309f1-b013-4f33-b033-0977aeea09ff-01a4ca85" class="team-member-item">
                            <div class="member-left"><img sizes="40px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" alt="" class="member-image">
                              <div class="member-text-div">
                                <div class="member-name">Ben Peter</div>
                                <div class="member-email">benpeter@cloud.com</div>
                              </div>
                            </div>
                            <div class="member-right">
                              <div data-delay="200" data-hover="false" data-w-id="e90309f1-b013-4f33-b033-0977aeea0a0a" class="dropdown2_component w-dropdown">
                                <div class="dropdown2_toggle w-dropdown-toggle">
                                  <div>Actions</div>
                                  <div class="dropdown2_dropdown-icon w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                                  </svg></div>
                                </div>
                                <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown2_dropdown-list w-dropdown-list">
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option One</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Two</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Three</a>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_4fe991f8-7a79-6fbe-33fa-4719591b1f28-01a4ca85" class="team-member-item">
                            <div class="member-left"><img sizes="40px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" alt="" class="member-image">
                              <div class="member-text-div">
                                <div class="member-name">Ben Peter</div>
                                <div class="member-email">benpeter@cloud.com</div>
                              </div>
                            </div>
                            <div class="member-right">
                              <div data-delay="200" data-hover="false" data-w-id="4fe991f8-7a79-6fbe-33fa-4719591b1f31" class="dropdown2_component w-dropdown">
                                <div class="dropdown2_toggle w-dropdown-toggle">
                                  <div>Actions</div>
                                  <div class="dropdown2_dropdown-icon w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                                  </svg></div>
                                </div>
                                <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown2_dropdown-list w-dropdown-list">
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option One</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Two</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Three</a>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_2618febc-e97b-34eb-1bc7-5074fb785b31-01a4ca85" class="team-member-item">
                            <div class="member-left"><img sizes="40px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" alt="" class="member-image">
                              <div class="member-text-div">
                                <div class="member-name">Ben Peter</div>
                                <div class="member-email">benpeter@cloud.com</div>
                              </div>
                            </div>
                            <div class="member-right">
                              <div data-delay="200" data-hover="false" data-w-id="2618febc-e97b-34eb-1bc7-5074fb785b3a" class="dropdown2_component w-dropdown">
                                <div class="dropdown2_toggle w-dropdown-toggle">
                                  <div>Actions</div>
                                  <div class="dropdown2_dropdown-icon w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                                  </svg></div>
                                </div>
                                <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown2_dropdown-list w-dropdown-list">
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option One</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Two</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Three</a>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_23ef57ff-0b9b-df93-93c2-05f51b65a0e4-01a4ca85" class="team-member-item">
                            <div class="member-left"><img sizes="40px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" alt="" class="member-image">
                              <div class="member-text-div">
                                <div class="member-name">Ben Peter</div>
                                <div class="member-email">benpeter@cloud.com</div>
                              </div>
                            </div>
                            <div class="member-right">
                              <div data-delay="200" data-hover="false" data-w-id="23ef57ff-0b9b-df93-93c2-05f51b65a0ed" class="dropdown2_component w-dropdown">
                                <div class="dropdown2_toggle w-dropdown-toggle">
                                  <div>Actions</div>
                                  <div class="dropdown2_dropdown-icon w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                                  </svg></div>
                                </div>
                                <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown2_dropdown-list w-dropdown-list">
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option One</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Two</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Three</a>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_2f256366-1388-8e48-e6fb-c57fd468569f-01a4ca85" class="team-member-item">
                            <div class="member-left"><img sizes="40px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" alt="" class="member-image">
                              <div class="member-text-div">
                                <div class="member-name">Ben Peter</div>
                                <div class="member-email">benpeter@cloud.com</div>
                              </div>
                            </div>
                            <div class="member-right">
                              <div data-delay="200" data-hover="false" data-w-id="2f256366-1388-8e48-e6fb-c57fd46856a8" class="dropdown2_component w-dropdown">
                                <div class="dropdown2_toggle w-dropdown-toggle">
                                  <div>Actions</div>
                                  <div class="dropdown2_dropdown-icon w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                                  </svg></div>
                                </div>
                                <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown2_dropdown-list w-dropdown-list">
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option One</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Two</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Three</a>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-e8105470-4175-4005-9e66-15e0201b413c-01a4ca85" class="team-member-item">
                            <div class="member-left"><img sizes="40px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" alt="" class="member-image">
                              <div class="member-text-div">
                                <div class="member-name">Ben Peter</div>
                                <div class="member-email">benpeter@cloud.com</div>
                              </div>
                            </div>
                            <div class="member-right">
                              <div data-delay="200" data-hover="false" data-w-id="e8105470-4175-4005-9e66-15e0201b4145" class="dropdown2_component w-dropdown">
                                <div class="dropdown2_toggle w-dropdown-toggle">
                                  <div>Actions</div>
                                  <div class="dropdown2_dropdown-icon w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                                  </svg></div>
                                </div>
                                <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown2_dropdown-list w-dropdown-list">
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option One</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Two</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Three</a>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-a9653bec-a70d-8215-4bca-c1999df19ed2-01a4ca85" class="team-member-item">
                            <div class="member-left"><img sizes="40px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" alt="" class="member-image">
                              <div class="member-text-div">
                                <div class="member-name">Ben Peter</div>
                                <div class="member-email">benpeter@cloud.com</div>
                              </div>
                            </div>
                            <div class="member-right">
                              <div data-delay="200" data-hover="false" data-w-id="a9653bec-a70d-8215-4bca-c1999df19edb" class="dropdown2_component w-dropdown">
                                <div class="dropdown2_toggle w-dropdown-toggle">
                                  <div>Actions</div>
                                  <div class="dropdown2_dropdown-icon w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                                  </svg></div>
                                </div>
                                <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown2_dropdown-list w-dropdown-list">
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option One</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Two</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Three</a>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_014da40a-8ca0-409c-83e0-e1af2e16aba2-01a4ca85" class="team-member-item">
                            <div class="member-left"><img sizes="40px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" alt="" class="member-image">
                              <div class="member-text-div">
                                <div class="member-name">Ben Peter</div>
                                <div class="member-email">benpeter@cloud.com</div>
                              </div>
                            </div>
                            <div class="member-right">
                              <div data-delay="200" data-hover="false" data-w-id="014da40a-8ca0-409c-83e0-e1af2e16abab" class="dropdown2_component w-dropdown">
                                <div class="dropdown2_toggle w-dropdown-toggle">
                                  <div>Actions</div>
                                  <div class="dropdown2_dropdown-icon w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                                  </svg></div>
                                </div>
                                <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown2_dropdown-list w-dropdown-list">
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option One</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Two</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Three</a>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9bc5c7d5-abf6-8358-63e6-fa4093ed20cb-01a4ca85" class="team-member-item">
                            <div class="member-left"><img sizes="40px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" alt="" class="member-image">
                              <div class="member-text-div">
                                <div class="member-name">Ben Peter</div>
                                <div class="member-email">benpeter@cloud.com</div>
                              </div>
                            </div>
                            <div class="member-right">
                              <div data-delay="200" data-hover="false" data-w-id="9bc5c7d5-abf6-8358-63e6-fa4093ed20d4" class="dropdown2_component w-dropdown">
                                <div class="dropdown2_toggle w-dropdown-toggle">
                                  <div>Actions</div>
                                  <div class="dropdown2_dropdown-icon w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                                  </svg></div>
                                </div>
                                <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown2_dropdown-list w-dropdown-list">
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option One</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Two</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Three</a>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-d8833e38-f3b0-739b-5196-c62466da4e2b-01a4ca85" class="team-member-item">
                            <div class="member-left"><img sizes="40px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" alt="" class="member-image">
                              <div class="member-text-div">
                                <div class="member-name">Ben Peter</div>
                                <div class="member-email">benpeter@cloud.com</div>
                              </div>
                            </div>
                            <div class="member-right">
                              <div data-delay="200" data-hover="false" data-w-id="d8833e38-f3b0-739b-5196-c62466da4e34" class="dropdown2_component w-dropdown">
                                <div class="dropdown2_toggle w-dropdown-toggle">
                                  <div>Actions</div>
                                  <div class="dropdown2_dropdown-icon w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                                  </svg></div>
                                </div>
                                <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown2_dropdown-list w-dropdown-list">
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option One</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Two</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Three</a>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_3a14369f-5226-03e4-d997-9ee281aa56bd-01a4ca85" class="team-member-item">
                            <div class="member-left"><img sizes="40px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" alt="" class="member-image">
                              <div class="member-text-div">
                                <div class="member-name">Ben Peter</div>
                                <div class="member-email">benpeter@cloud.com</div>
                              </div>
                            </div>
                            <div class="member-right">
                              <div data-delay="200" data-hover="false" data-w-id="3a14369f-5226-03e4-d997-9ee281aa56c6" class="dropdown2_component w-dropdown">
                                <div class="dropdown2_toggle w-dropdown-toggle">
                                  <div>Actions</div>
                                  <div class="dropdown2_dropdown-icon w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                                  </svg></div>
                                </div>
                                <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown2_dropdown-list w-dropdown-list">
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option One</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Two</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Three</a>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_189b766f-b818-19b0-674f-cab917baa613-01a4ca85" class="team-member-item">
                            <div class="member-left"><img sizes="40px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" alt="" class="member-image">
                              <div class="member-text-div">
                                <div class="member-name">Ben Peter</div>
                                <div class="member-email">benpeter@cloud.com</div>
                              </div>
                            </div>
                            <div class="member-right">
                              <div data-delay="200" data-hover="false" data-w-id="189b766f-b818-19b0-674f-cab917baa61c" class="dropdown2_component w-dropdown">
                                <div class="dropdown2_toggle w-dropdown-toggle">
                                  <div>Actions</div>
                                  <div class="dropdown2_dropdown-icon w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                                  </svg></div>
                                </div>
                                <nav style="-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="dropdown2_dropdown-list w-dropdown-list">
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option One</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Two</a>
                                  <a href="#" class="status-item-dropdown w-dropdown-link">Option Three</a>
                                </nav>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-w-tab="Tab 4" v-if="billing"  :class="billing ? 'w-tab-pane w--tab-active' : 'w-tab-pane'">
                    <div class="settings-content-pane">
                      <div class="settings-header">
                        <div>Plan &amp; Billing</div>
                      </div>
                      <div class="setting-content-div">
                        <div class="plan-content"><img loading="lazy" src="../../assets/images/freePlan.svg" alt="" class="image">
                          <div class="div-block-23">
                            <h6 class="plan-name">Free Plan</h6>
                            <p class="plan-description">You are on the free plan. Your free subscription is valid for a year.</p>
                            <div class="div-block-24">
                              <a href="#" class="button w-button">Upgrade Plan</a>
                              <div class="div-block-25"><img loading="lazy" src="../../assets/images/Question.svg" alt="">
                                <div class="body-xsmall text-color-gray500">You have 365 days left on your current plan.</div>
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
        </div>
      </div>
      <div class="section_shell4-layout">
        <div class="padding-small padding-top-0">
          <div class="container-large"></div>
        </div>
      </div>
    </main>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "@/layout/DashboardLayout";
import {mapState} from "vuex";
import S3Request from "@/model/request/S3Request";
import StoreUtils from "@/util/baseUtils/StoreUtils";
import BaseButtons from "@/components/buttons/BaseButtons";
import AuthenticationRequest from "@/model/request/AuthenticationRequest";
import CustomerRequest from "@/model/request/CustomerRequest";
export default {
  name: "SettingsView",
  components: {BaseButtons, DashboardLayout},
  data(){
    return{
      profile: true,
      security:false,
      members: false,
      billing: false,
      uploadModel: S3Request.uploadBase64,
      showError: false,
      changeModel: AuthenticationRequest.changePassword,
      confirmPassword: "",
      password: "",
      confirmPasswordErrorVisible: false,
      updateModel: CustomerRequest.update,
      phone: "",
      name: "",
      picture: "",
      readModel: CustomerRequest.readById
    }
  },
  computed:{
    ...mapState({
      userInfo: state => state.auth.userInfo,
      loading: state => state.auth.loading,
      customerDetails: state => state.customer.customerDetails,
      url: state => state.sbucket.url,
      customerLoading: state => state.customer.loading
    }),
    fullName(){
      return `${this.customerDetails.customerFirstName} ${this.customerDetails.customerLastName}`
    }
  },
  methods:{
    openProfile(){
      this.profile = true;
      this.security = false;
      this.members = false;
      this.billing = false;
    },
    openSecurity(){
      this.profile = false;
      this.security = true;
      this.members = false;
      this.billing = false;
    },
    openMembers(){
      this.profile = false;
      this.security = false;
      this.members = true;
      this.billing = false;
    },
    openBilling(){
      this.profile = false;
      this.security = false;
      this.members = false;
      this.billing = true;
    },
    createURL(imageFile) {
      let reader = new FileReader();
      reader.onload = e =>
          (this.picture = e.target.result
          );
      reader.readAsDataURL(imageFile);
    },
    onImageSelect(e){
      const files = e.target.files;
      this.file = files[0];

      if (files.length) {
        if(this.file.size <= 1024000){
          this.createURL(files[0]);
        }
        const min = 100;
        const max = 999;
        this.randomDigits = Math.floor(Math.random() * (max - min + 1)) + min;
        let fileName = this.file.name.split('.')[0];
        this.uploadModel.username = `${fileName}${this.randomDigits}`;
        if(this.file.size <= 1024000){
                this.showError = false;
          setTimeout(
              () => {
                this.uploadModel.base64 = this.picture;
                StoreUtils.dispatch("sbucket/uploadEncodedFile", this.uploadModel).then(
                    () => {
                    }
                )
              }, 5000
          )
        }
        else{
          this.showError = true;
        }

      }
    },
    setPassword(){
      this.changeModel.newPassword = this.password;
      this.changeModel.confirmPassword = this.confirmPassword;
      StoreUtils.dispatch("auth/changePassword", this.changeModel).then(
          () => {
            this.changeModel.currentPassword = "";
            this.password = "";
            this.confirmPassword = "";
          }
      )
    },
    updateDetails(){
      let names = [];
      if(this.name !== null){
        names = this.name.split(" ");
        this.updateModel.customerFirstName = names[0];
        this.updateModel.customerLastName = names[1];
      }
      this.updateModel.customerId = this.userInfo.customerId;
      if(this.url !== null){
        this.updateModel.customerPhoto = this.url;
      }
      if(this.phone !== null){
        this.updateModel.customerPhoneNumber = this.phone;
      }
      StoreUtils.dispatch(StoreUtils.actions.customer.updateSingleCustomer, this.updateModel).then(
          () => {
              this.readModel.customerId = this.userInfo.customerId;
              StoreUtils.dispatch(StoreUtils.actions.customer.readSingleCustomer, this.readModel)
            }
      )
    }
  },
  watch:{
    confirmPassword(){
      if(this.password.length === 0) {
        this.confirmPasswordErrorVisible = false;
      }else{
        if(this.password.length > 0 && this.confirmPassword === this.password){
          this.confirmPasswordErrorVisible = false;
        }
        else{
          this.confirmPasswordErrorVisible = true;
        }
      }
    }
  }
}
</script>

<style scoped>
.upload-file{
  position: absolute;
  opacity: 0;
}
</style>