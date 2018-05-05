import {ACTION_PING} from '../Action/actionList'

const sampleReducer=(state,action)=>{
    switch (action.type) {
        case ACTION_PING:
            return {...state,Message:action.Message}
        case 'add_repo':
            return action.repos    
        default:
            return null
    }
}

export default sampleReducer;