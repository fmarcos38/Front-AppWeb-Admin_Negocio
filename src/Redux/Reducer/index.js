const initialStore = {};

export default function rootReducer(store = initialStore, action){
    switch(action.type){
        default:
            return store;
    }
};