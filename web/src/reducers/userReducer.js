export default function loginReducer(state={},actions){
    switch (actions.type) {
        case 'LOGIN':
            return actions.payload
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}