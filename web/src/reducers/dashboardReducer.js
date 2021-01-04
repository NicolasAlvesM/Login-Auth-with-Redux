export default function companyReducer(status=[],action){
    switch (action.type) {
        case 'GET_COMPANIES':
            return action.payload
        case 'ADD_COMPANY':
            return [...status, action.payload]
        default:
            return status
    }
}       