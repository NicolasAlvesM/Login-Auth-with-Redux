export default function infoReducer(status=[],action){
    switch (action.type) {
        case 'GET_INFO':
            return action.payload
        case 'ADD_INFO':
            return [...status, action.payload]
        default:
            return status
    }
}   