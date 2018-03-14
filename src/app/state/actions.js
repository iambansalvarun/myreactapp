import * as ActionTypes from "./action-types";

import * as service from "./service";

export function initStates(states){
    console.log("init state list called")
    return {

        type: ActionTypes.INIT_STATES,
        payload: {
            states: states
        }
    }
}
export function initStateView(state){
    console.log("initstateview called")
    return {

        type: ActionTypes.INIT_STATEVIEW,
        payload: {
            state: state
        }
    }
}


export function initStateUpdate(state){
    console.log("initstateupdatecalled")
    return {

        type: ActionTypes.INIT_STATEUPDATE,
        payload: {
            state: state
        }
    }
}


export function loading(status){
    return {
        type: ActionTypes.LOADING,
        payload: {
            status: status
        }
    }
}


export function initError(error) {
    return {
        type: ActionTypes.ERROR,
        payload: {
            error: error
        }
    }
}

export function fetchStates() {
    
    return function(dispatch, getState) {
     
    
        dispatch(loading(true));
        service.getStates()
        .then (states => {
            let action = initStates(states);
            console.log(" states ", states);
            //action object
            dispatch(action);
            dispatch(loading(false));
        });

    }
}


export function saveUpdatedState(state) {
    
    return function(dispatch, getState) {
     
        dispatch(loading(true));
        service.updateState(state)
        .then (state => {
            let action = initStateView(state);
            console.log(" states ", state);
            //action object
            dispatch(action);
            dispatch(loading(false));
        });

    }
}


export function getUpdatedState(id) {
    
    return function(dispatch, getState) {
     
        dispatch(loading(true));
        service.getStateById(id)
        .then (state => {
            let action = initStateUpdate(state);
            console.log(" state ", state);
            //action object
            dispatch(action);
            dispatch(loading(false));
        });

    }
}
// export function updateState(state) {
//     return {
//         type: ActionTypes.INIT_STATEUPDATE,
//         state: state
//     }
// }



export function getStateById(id) {
    
    return function(dispatch, getState) {
     
    
        dispatch(loading(true));
        service.getStateById(id)
        .then (state => {
            let action = initStateView(state);
            console.log(" state ", state);
            //action object
            dispatch(action);
            dispatch(loading(false));
        });

    }
}