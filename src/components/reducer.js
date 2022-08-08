export const initialState = {
    user: null,
    playLists: [],
    playing: false,
    item: null,
    //REMOVE AFTER finishing developing......
    // token: "BQAAb2rjqazwWksRefKpRblFWphFghkI_caIQw6ympXbqz7I9_CloWAo5nsi_gAgLd8U02F5X4Qc9B_TG1CIV_aEWStXI1XwQ7YJ7kNpEGYPvOvX_CQ_ZJ2pPBn5YTGoSqQgwnvoKx9Ewyct_ouynKgcG7LzDpUkdA79j48MFI8qvFMWY6D2"
}

const reducer = (state,action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state, 
                token: action.token
            }; 
        case 'SET_PLAYLIST':
            return {
                ...state,
                playLists: action.playLists
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };      
        default: 
            return state    
    }
}

export default reducer