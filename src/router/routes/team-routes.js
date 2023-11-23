import CreateProjectScratchView from "@/views/project/CreateProjectScratchView";
import CreateProjectFromWBSView from "@/views/project/CreateProjectFromWBSView";
import AddTeamModal from "@/components/modals/AddTeamModal.vue";
import ViewTeamView from "@/views/dashboard/ViewTeamView.vue";
import EditTeamModal from "@/components/modals/EditTeamModal.vue";

export default [
    {
        path: '/create-team',
        name: 'createTeam',
        meta: {layout: "home", authRequired: false},
        component: AddTeamModal,
    },
    {
        path: '/view-team',
        name: 'viewTeam',
        meta: {layout: "home", authRequired: false},
        component: ViewTeamView,
    },
    {
        path: '/edit-team',
        name: 'editTeam',
        meta: {layout: "home", authRequired: false},
        component: EditTeamModal,
    },
    {
        path: '/create-team/from-scratch',
        name: 'fromScratch',
        meta: {layout: "home", authRequired: false},
        component: CreateProjectScratchView,
    },
    {
        path: '/create-team/from-wbs',
        name: 'fromWBS',
        meta: {layout: "home", authRequired: false},
        component: CreateProjectFromWBSView,
    }

];