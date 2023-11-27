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
                  <div class="div-block-36">
                    <div class="text-block-8" v-if="teams.team.teamName.split(' ').length > 0">{{teams.team.teamName.split(' ')[0].charAt(0)}}</div>
                    <div class="text-block-8" v-else>{{teams.team.teamName.charAt(0)}}</div>
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
                        <div class="grid-list4_item">
                          <div class="margin-bottom margin-small">
                            <div class="grid-list4_content-top">
                              <div class="projectlogoimage">
                                <div class="text-block-11">PN</div>
                              </div>
                              <div class="grid-list4_title-wrapper">
                                <div class="text-weight-semibold">Project name</div>
                                <div class="grid-list4_date-wrapper">
                                  <div class="text-size-small-5">11 Jan 2022</div>
                                </div>
                              </div>
                              <div data-delay="200" data-hover="false" data-w-id="a4801250-6c0f-8617-8e25-13783e4656b8" class="dropdown1_component w-dropdown">
                                <div class="dropdown1_toggle w-dropdown-toggle">
                                  <div class="button-5 is-tertiary is-small is-icon-only">
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
                                <nav class="dropdown1_dropdown-list is-right w-dropdown-list">
                                  <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Rename</a>
                                  <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Share</a>
                                  <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Delete</a>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div class="margin-bottom margin-small">
                            <p class="paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                          </div>
                          <div class="div-block-38">
                            <div class="image-stack align-left"><img loading="lazy" src="../../assets/images/avatar.jpg" alt="" class="team-img"><img sizes="(max-width: 991px) 32px, 40px" srcset="../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6-p-500.jpeg 500w, ../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6-p-800.jpeg 800w, ../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6-p-1080.jpeg 1080w, ../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6-p-1600.jpeg 1600w, ../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6-p-2000.jpeg 2000w, ../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6.jpeg 3289w" alt="" src="../../assets/images/3c6EsddjeL3cqzqgZ69uDpumpzgrbFu4yzax6vs6.jpeg" loading="lazy" class="team-img"><img sizes="(max-width: 991px) 32px, 40px" srcset="../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-500.jpeg 500w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-800.jpeg 800w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n-p-1080.jpeg 1080w, ../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg 1153w" alt="" src="../../assets/images/219290777_1023547135060488_6510262926800624014_n.jpeg" loading="lazy" class="team-img"><img sizes="(max-width: 991px) 32px, 40px" srcset="../../assets/images/fhbj-p-500.jpeg 500w, ../../assets/images/fhbj-p-800.jpeg 800w, ../../assets/images/fhbj.jpeg 1000w" alt="" src="../../assets/images/fhbj.jpeg" loading="lazy" class="team-img">
                              <div class="team-img">+4</div>
                            </div>
                          </div>
                          <div class="grid-list4_content-bottom">
                            <div class="margin-top margin-medium">
                              <a href="../createnewproject/addteamview.html" class="btnsec is-secondary is-small full-width w-button">View Project</a>
                            </div>
                          </div>
                        </div>
                        <a href="../createnewproject/createproject.html" class="addnewproject w-inline-block">
                          <div class="addproject w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="100%" height="100%" preserveaspectratio="xMidYMid meet" viewbox="0 0 24 24">
                            <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                          </svg></div>
                          <div>Add a new project</div>
                        </a>
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
                        <div role="rowgroup" id="w-node-_04b511d2-6f2b-011b-eebf-edce89639b90-0cf2658f" class="table9_list-wrapper">
                          <div fs-cmssort-element="list" class="table9_list">
                            <div role="row" class="table9_item">
                              <div role="cell" class="table9_column">
                                <div class="table9_column-content"><img loading="lazy" src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg" alt="" class="table9_image">
                                  <div fs-cmssort-field="IDENTIFIER" class="text-weight-medium">Seun Orofin</div>
                                </div>
                              </div>
                              <div role="cell" class="table9_column is-width-large">
                                <a fs-cmssort-field="IDENTIFIER" href="#" class="link">seun.orofin@qucoon.con</a>
                              </div>
                              <div role="cell" class="table9_column is-width-medium">
                                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-block-12">Product Designer</div>
                              </div>
                              <div role="cell" class="table9_column is-width-medium">
                                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-block-13">1/11/2050</div>
                              </div>
                              <div class="table9_column-button-wrapper">
                                <div data-delay="200" data-hover="false" data-w-id="df9525fd-271a-5e41-d808-c9aa6da88287" class="dropdown1_component w-dropdown">
                                  <div class="dropdown1_toggle w-dropdown-toggle">
                                    <div class="button-5 is-tertiary is-small is-icon-only">
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
                                  <nav class="dropdown1_dropdown-list is-right w-dropdown-list">
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Remove Team member</a>
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Share</a>
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Delete</a>
                                  </nav>
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
                        <div role="rowgroup" class="table9_list-wrapper">
                          <div fs-cmssort-element="list" class="table9_list">
                            <div role="row" class="table9_item">
                              <div role="cell" class="table9_column">
                                <div class="table9_column-content"><img loading="lazy" src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg" alt="" class="table9_image">
                                  <div fs-cmssort-field="IDENTIFIER" class="text-weight-medium">Seun Orofin</div>
                                </div>
                              </div>
                              <div role="cell" class="table9_column is-width-large">
                                <a fs-cmssort-field="IDENTIFIER" href="#" class="link">seun.orofin@qucoon.con</a>
                              </div>
                              <div role="cell" class="table9_column is-width-medium">
                                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-block-12">Product Designer</div>
                              </div>
                              <div role="cell" class="table9_column is-width-medium">
                                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-block-13">1/11/2050</div>
                              </div>
                              <div class="table9_column-button-wrapper">
                                <div data-delay="200" data-hover="false" data-w-id="e207572a-5679-e33f-df2e-8c4ff7cad20b" class="dropdown1_component w-dropdown">
                                  <div class="dropdown1_toggle w-dropdown-toggle">
                                    <div class="button-5 is-tertiary is-small is-icon-only">
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
                                  <nav class="dropdown1_dropdown-list is-right w-dropdown-list">
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Remove Team member</a>
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Share</a>
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Delete</a>
                                  </nav>
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
                        <div role="rowgroup" class="table9_list-wrapper">
                          <div fs-cmssort-element="list" class="table9_list">
                            <div role="row" class="table9_item">
                              <div role="cell" class="table9_column">
                                <div class="table9_column-content"><img loading="lazy" src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg" alt="" class="table9_image">
                                  <div fs-cmssort-field="IDENTIFIER" class="text-weight-medium">Seun Orofin</div>
                                </div>
                              </div>
                              <div role="cell" class="table9_column is-width-large">
                                <a fs-cmssort-field="IDENTIFIER" href="#" class="link">seun.orofin@qucoon.con</a>
                              </div>
                              <div role="cell" class="table9_column is-width-medium">
                                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-block-12">Product Designer</div>
                              </div>
                              <div role="cell" class="table9_column is-width-medium">
                                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-block-13">1/11/2050</div>
                              </div>
                              <div class="table9_column-button-wrapper">
                                <div data-delay="200" data-hover="false" data-w-id="e53f3bdd-c1e5-fe96-a75e-d8053bee1053" class="dropdown1_component w-dropdown">
                                  <div class="dropdown1_toggle w-dropdown-toggle">
                                    <div class="button-5 is-tertiary is-small is-icon-only">
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
                                  <nav class="dropdown1_dropdown-list is-right w-dropdown-list">
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Remove Team member</a>
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Share</a>
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Delete</a>
                                  </nav>
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
                        <div role="rowgroup" class="table9_list-wrapper">
                          <div fs-cmssort-element="list" class="table9_list">
                            <div role="row" class="table9_item">
                              <div role="cell" class="table9_column">
                                <div class="table9_column-content"><img loading="lazy" src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg" alt="" class="table9_image">
                                  <div fs-cmssort-field="IDENTIFIER" class="text-weight-medium">Seun Orofin</div>
                                </div>
                              </div>
                              <div role="cell" class="table9_column is-width-large">
                                <a fs-cmssort-field="IDENTIFIER" href="#" class="link">seun.orofin@qucoon.con</a>
                              </div>
                              <div role="cell" class="table9_column is-width-medium">
                                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-block-12">Product Designer</div>
                              </div>
                              <div role="cell" class="table9_column is-width-medium">
                                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-block-13">1/11/2050</div>
                              </div>
                              <div class="table9_column-button-wrapper">
                                <div data-delay="200" data-hover="false" data-w-id="d672f72a-8a7a-e68a-fbc7-e09320488bca" class="dropdown1_component w-dropdown">
                                  <div class="dropdown1_toggle w-dropdown-toggle">
                                    <div class="button-5 is-tertiary is-small is-icon-only">
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
                                  <nav class="dropdown1_dropdown-list is-right w-dropdown-list">
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Remove Team member</a>
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Share</a>
                                    <a href="#" class="dropdown1_dropdown-link w-dropdown-link">Delete</a>
                                  </nav>
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
    ...mapState(["auth", "teams"])
  }
}
</script>

<style scoped>

</style>