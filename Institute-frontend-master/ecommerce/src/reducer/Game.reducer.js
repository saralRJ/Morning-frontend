const initialData ={
    gameName: 'football'

}

export const gameReducer = (state= initialData, action) => {
    switch (action.type){
        case 'Change_game':
            return {gameName: action.payload}
            default:
                return state;
    }
}