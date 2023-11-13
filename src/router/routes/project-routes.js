import CreateProjectView from "@/views/project/CreateProjectView";
import CreateProjectScratchView from "@/views/project/CreateProjectScratchView";
import CreateProjectFromWBSView from "@/views/project/CreateProjectFromWBSView";
import ProjectDetailView from "@/views/project/ProjectDetailView.vue";

export default [
    {
        path: '/create-project',
        name: 'createProject',
        meta: {layout: "home", authRequired: false},
        component: CreateProjectView,
    },
    {
        path: '/create-project/from-scratch',
        name: 'fromScratch',
        meta: {layout: "home", authRequired: false},
        component: CreateProjectScratchView,
    },
    {
        path: '/create-project/from-wbs',
        name: 'fromWBS',
        meta: {layout: "home", authRequired: false},
        component: CreateProjectFromWBSView,
    },
    {
        path: '/project-details/:id',
        name: 'projectDetails',
        meta: {layout: "home", authRequired: false},
        component: ProjectDetailView,
    }

];