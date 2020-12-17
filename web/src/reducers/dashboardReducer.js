export default function infoReducer(status={},action){
    switch (action.type) {
        case 'GET_INFO':
            return action.payload
        default:
            return status
    }
}   