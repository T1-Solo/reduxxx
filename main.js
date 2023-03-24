const redux = require("redux")
const logger = require("redux-logger").default
const applyMiddleWhere = redux.applyMiddleware
let createStore = redux.createStore
const combineReducers = redux.combineReducers

const initialState = {
    macNumber : 10,
    macPhoneNumber:10
}

const Action_Mac = () => {
    return {
        type : "macBok"
    }
}
const Action_Phone = () => {
    return {
        type : "iphone"
    }
}
const Reducer_Mac = (state=initialState , action) =>{
    switch(action.type){
        case "MacBok" :{
            return {
                ...state,
                macNumber:state.macNumber-1
            }
        }break;
        default : return state
    }
}
const Reducer_Phone = (state=initialState , action) =>{
    switch(action.type){
        case "iphone":{
            return {
                ...state,
                macPhoneNumber : state.macPhoneNumber-1
            }
        }
    }
}
const combine = combineReducers({
    //bu o'ziga obyekt qabul qiladi
    mac: Reducer_Mac,
    phone : Reducer_Phone
})
const store = createStore(combine , applyMiddleWhere(logger))
store.subscribe(() => console.log(state.getState()))
store.dispatch(Action_Mac())
store.dispatch(Action_Phone())
//Action bu bizga object return qaytaradi
// const Action_Mac = () => {
//     return {
//         type : "MacBok"
//     }
// }
// const Action_Reducer = (state=initialState, action)=>{
//     switch(action.type){
//         case "MacBok":{
//             return {
//                 ...state,
//                 macNumber: state.macNumber-1
//             }
//         }break;
//         default: return state
//     }
// }

// let store = createStore(Action_Reducer)
// store.subscribe(() => console.log(store.getState()))
// store.dispatch(Action_Mac())
