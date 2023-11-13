import LandingPage from '@/views/LandingPage.vue';
export default [
    {
        path: "/",
        name: 'LandingPage',
        meta: {layout: "home", authRequired: false},
        component: LandingPage,
    },
    // {
    // path: RouterUtils.routes.base.createEntity.path,
    // name: RouterUtils.routes.base.createEntity.name,
    // meta: {layout: "home", authRequired: true},
    // component: CreateEntityView,
    // },
];
