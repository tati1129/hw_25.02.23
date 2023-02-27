const users = [];

export  const userReducer = (state = users, action) => {
    if (action.type === 'ADD'){
        return [...state, action.payload]
    }else if (action.type === 'DEL'){
        return state.filter(({id}) => id !== action.payload)
    } else {
        return state
    }
}