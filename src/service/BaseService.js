   //
   import axios from "axios";
   import StoreUtils from "@/util/baseUtils/StoreUtils";
   import RouterUtils from "@/util/baseUtils/RouterUtils";
   import BaseNotification from "@/components/notification/BaseNotification";

   const apiClient = axios.create({
     baseURL: "https://81o019i4q4.execute-api.us-east-1.amazonaws.com/dev/",
     withCredentials: false,
     headers: {
        Accept: "application/json",
     },
   });

   apiClient.interceptors.request.use((config) => {
     config.headers.Authorization = StoreUtils.rootGetters(StoreUtils.getters.auth.getToken);
     return config;
   });

   apiClient.interceptors.response.use((config) => {
     if (config.data.responseCode === '115' && location.pathName !== "/login"){
       BaseNotification.fireToast('error', 'Expired Session... Please login again').then(()=>{
         RouterUtils.navigateTo(RouterUtils.routes.auth.loginview.path)
       })
     }
     return config;

   });

   const s3ApiClient = axios.create({
     baseURL: "https://m2nz1o078e.execute-api.us-east-1.amazonaws.com/prod/",
     withCredentials: false,
     headers: {
       Accept: "application/json",
       // "Content-Type": "application/json",
     },
   });

   s3ApiClient.interceptors.request.use((config) => {
     // config.headers.Authorization = StoreUtils.rootGetters(StoreUtils.getters.auth.getToken);
     return config;
   });
   s3ApiClient.interceptors.response.use((config) => {
       if (config.data.responseCode === '115'){
           BaseNotification.fireToast('error', 'Expired Session... Please login again').then(()=>{
               // RouterUtils.navigateTo(RouterUtils.routes.auth.loginview.path);
           })
       }
       return config;

   });

   export default {
     apiClient: apiClient,
     s3ApiClient: s3ApiClient,
   };


