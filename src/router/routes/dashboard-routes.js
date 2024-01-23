import HomeView from "@/views/dashboard/HomeView";
import NotificationsView from "@/views/dashboard/NotificationsView";
import ProjectsView from "@/views/dashboard/ProjectsView";
import SettingsView from "@/views/dashboard/SettingsView";
import TaskView from "@/views/dashboard/TaskView";
import TeamView from "@/views/dashboard/TeamView";
import TaskDetails from "@/views/task/TaskDetails.vue";
export default [
    {
        path: '/home',
        name: 'HomeView',
        meta: {layout: "home", authRequired: false},
        component: HomeView,
    },
    {
        path: '/notifications',
        name: 'notifications',
        meta: {layout: "home", authRequired: false},
        component: NotificationsView,
    },
    {
        path: '/projects',
        name: 'ProjectsView',
        meta: {layout: "home", authRequired: false},
        component: ProjectsView,
    },
    {
        path: '/settings',
        name: 'settings',
        meta: {layout: "home", authRequired: false},
        component: SettingsView,
    },
    {
        path: '/notifications',
        name: 'NotificationView',
        meta: {layout: "home", authRequired: false},
        component: NotificationsView,
    },
    {
        path: '/task',
        name: 'TaskView',
        meta: {layout: "home", authRequired: false},
        component: TaskView,
    },
    {
        path: '/view-task/:id',
        name: 'ViewTaskView',
        meta: {layout: "home", authRequired: false},
        component: TaskDetails,
    },
    {
        path: '/team',
        name: 'TeamView',
        meta: {layout: "home", authRequired: false},
        component: TeamView,
    },

];