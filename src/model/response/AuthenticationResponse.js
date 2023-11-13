import BaseResponse from "@/model/response/BaseResponse";

class AuthenticationResponse extends BaseResponse {
    login = {
        customerId: null,
        customerFirstName: null,
        customerLastName: null,
        customerEmail: null,
        customerCountry: null,
        customerCountryCode: null,
        customerStatus: null,
        customerCreatedAt: null,
        customerUpdatedAt: null,
        token: null
    }


    userInfo = {
        succeeded: null,
        responseMessage: null,
        account: {
            firstName: null,
            lastName: null,
            address: null,
            email: null,
            phoneNumber: null,
            twoFactorEnabled: null
        }
    }


    account = {
        accountId: null,
        accountCustomerId: null,
        accountNumber: null,
        accountName: null,
        accountType: null,
        accountClass: null,
        accountCurrency: null,
        accountBalance: null,
        accountLastAccessTimestamp: null,
        accountStatus: null,
        accountBankCode: null,
        accountBranchCode: null,
        accountCreatedDate: null,
        accountUpdatedDate: null,
        accountDateOpened: null,
        accountGlCategory: null,
        accountGlLevel1Code: null,
        accountGlLevel2Code: null,
        accountAllowNegativeBalance: null,
        accountLedgerBalance: null,
        accountMaker: null,
        accountAllowCredit: null,
        accountAllowDebit: null,
        accountPhone: null,
        accountChecker: null
    }
}

export default AuthenticationResponse