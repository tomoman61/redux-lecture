import { SELL_MEAT } from './actionTypes'

const ReducerMeat = (state=[], action) => {
    switch (action.type) {
        case SELL_MEAT: return {
            ...state,
            numOfMeat: state.numOfMeat - 1
        }
        default: return state
    }
}
export default ReducerMeat
