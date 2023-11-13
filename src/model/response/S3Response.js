import BaseResponse from "@/model/response/BaseResponse";

class S3Response extends BaseResponse {
    uploadBase64Response() {
        return {
            url: null,
            customerType: null,
            responseCode: null,
            responseMessage: null,
        };
    }
}

export default S3Response;