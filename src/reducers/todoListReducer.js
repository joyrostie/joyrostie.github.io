import * as types from '../constants/ActionTypes'

const todoListReducer = (state = {}, action) => {
    switch (action.type) {
        case types.HANDLE_ITEM:
            const itemText = action.text
            let newItem = { text: itemText, key: Date.now(), readonly: true }
            return {
                ...state,
                currentItem: newItem
            }
        case types.ADD_ITEM:
            if (state.currentItem.text !=='') {
                return {
                    ...state,
                    items: [...state.items, state.currentItem],
                    currentItem: { text: '', key: 0, readonly: true }
                }
            } else return state
        case types.REM_ITEM:
            return {
                ...state,
                items: state.items.filter(items => items.key !== action.key)
            }
        case types.TOG_ITEM:
            return {
                ...state,
                items: saveItem(state.items, action)
            }
        default:
            return state
    }
}

const saveItem = (items, action) => {
    const newItems = JSON.parse(JSON.stringify(items))
    const editedItem = newItems.find(items => items.key === action.key)
    editedItem.readonly = !editedItem.readonly
    return newItems
}

export default todoListReducer