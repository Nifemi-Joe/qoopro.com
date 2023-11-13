import LoginView from "@/views/auth/LoginView";
import SignUpView from "@/views/auth/SignUpView";
import SuccessView from "@/views/auth/SuccessView";
import VerifyMailView from "@/views/auth/VerifyMailView";
export default [
    {
        path: "/login",
        name: 'LoginView',
        meta: {layout: "home", authRequired: false},
        component: LoginView,
    },
    {
        path: '/sign-up',
        name: 'signupview',
        meta: {layout: "home", authRequired: false},
        component: SignUpView,
    },
    {
        path: '/success',
        name: 'SuccessView',
        meta: {layout: "home", authRequired: false},
        component: SuccessView,
    },
    {
        path: '/verify-email',
        name: 'VerifyMailView',
        meta: {layout: "home", authRequired: false},
        component: VerifyMailView,
    },
];