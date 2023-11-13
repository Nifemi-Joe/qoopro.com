import router from "../../router/index";


class RouterUtils {
  static routes = {
    base: {
      home: {
        path: '/',
        name: 'LandingPage'
      },
    //   // createEntity: {
    //   //   path: '/createEntity',
    //   //   name: 'createEntity'
    //   // },
    },
    auth:{
      signupview: {
        path: '/sign-up',
        name: 'signupview'
      },
      loginview: {
        path: '/login',
        name: 'LoginView'
      },
      successview: {
        path: '/success',
        name: 'SuccessView'
      },
      otpview: {
        path: '/verify-email',
        name: 'VerifyMailView'
      },
      forgotPasswordVerifyEmail: {
        path: '/forgot-password-verify-email',
        name: 'forgotPasswordVerifyEmail'
      },
      forgotPasswordResetPasscode: {
        path: '/forgot-password-reset-passcode',
        name: 'forgotPasswordResetPasscode'
      },
      forgotPassword: {
        path: '/forgot-password',
        name: 'forgotPassword'
      }
    },
    project: {
      createProject:{
        path: '/create-project',
        name: 'createProject'
      },
      fromScratch: {
        path: '/create-project/from-scratch',
        name: 'fromScratch'
      },
      fromWBS: {
        path: '/create-project/from-wbs',
        name: 'fromWBS'
      }
    },
    team: {
      createTeam:{
        path: '/create-team',
        name: 'createTeam'
      },
      fromScratch: {
        path: '/create-team/from-scratch',
        name: 'fromScratch'
      },
      fromWBS: {
        path: '/create-team/from-wbs',
        name: 'fromWBS'
      }
    },
    dashboard: {
      settings: {
        path: '/settings',
        name: 'settings'
      },
      loginAndSecurity: {
        path: '/login-and-security',
        name: 'loginAndSecurity'
      },
      homeView: {
        path: '/home',
        name: 'HomeView'
      },
      myProfile: {
        path: '/my-profile',
        name: 'myProfile'
      },
      notifications: {
        path: '/notifications',
        name: 'notifications'
      },
      projects: {
        path: '/projects',
        name: 'ProjectsView'
      },
      task: {
        path: '/task',
        name: 'TaskView'
      },
      team: {
        path: '/team',
        name: 'TeamView'
      }
    }
  };

  static pageTitles = {
    DEFAULT: "Ruby Loan",
    accountingEntry: {
      CREATE: "Assign Entries",
      EDIT: "Edit Entries"
    }
  };
  static navigateTo(targetRoute) {
    router.push({
      name: targetRoute
    })
  }
  static goBack() {
    router.go(-1);
  }
}
export default RouterUtils;

