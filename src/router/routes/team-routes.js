import CreateProjectScratchView from "@/views/project/CreateProjectScratchView";
import CreateProjectFromWBSView from "@/views/project/CreateProjectFromWBSView";
import AddTeamModal from "@/components/modals/AddTeamModal.vue";

export default [
    {
        path: '/create-team',
        name: 'createTeam',
        meta: {layout: "home", authRequired: false},
        component: AddTeamModal,
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