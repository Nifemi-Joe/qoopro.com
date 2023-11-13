import client from "./BaseService";

export default {
  callUploadBase64Api(payload) {
    // console.log("Service Payload ==>>", payload)
    console.log("callUploadBase64", payload);
    return client.s3ApiClient.post("uploadimage2s3", payload);
  },
};
