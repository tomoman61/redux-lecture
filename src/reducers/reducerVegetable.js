import { SELL_VEGETABLE } from './actionTypes'

const ReducerVegetable = (state=[], action) => {
    switch (action.type) {
        case SELL_VEGETABLE: return {
            ...state,
            numOfVegetable: state.numOfVegetable - 1
        }
        default: return state
    }
}

export default ReducerVegetable
