class ApiError extends Error {
    constructor(status, message, error) {
        super(error);
        this.status = status
        this.message = message
        this.error = error
    }
}

module.exports = {
    ApiError

}









// module.exports = {

//     status: 404,
//     message: 'Not Found'
// }