class CustomerRequest{
    static readById = {
        customerId: null
    }

    static update = {
        customerId: null,
        customerFirstName: null,
        customerLastName: null,
        customerPhoneNumber: null,
        customerDateOfBirth: null,
        customerGender: null,
        customerCountry: null,
        customerCountryCode: null,
        customerPhoto: null
    }
}

export default CustomerRequest;