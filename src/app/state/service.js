

export function getStates(){
    return fetch("http://localhost:7070/api/states")
    .then(response=>{
        return response.json();
    })
}

export function getStateById(id){
    return fetch("http://localhost:7070/api/states/"+id)
    .then(response=>{
        return response.json();
    })
}





export function updateState(updatedState,headers=undefined){
    return fetch("http://localhost:7070/api/states/"+updatedState.id,
    {
        method: 'PUT',
        headers: Object.assign({
                    'Content-Type': 'application/json'
                 }, headers),
        body: JSON.stringify(updatedState)
    }
    )
    .then(response=>{
        return response.json();
    })
   
  
}

export function createState(state,headers=undefined){
    return fetch("http://localhost:7070/api/states",
    {
        method: 'POST',
        headers: Object.assign({
                    'Content-Type': 'application/json'
                 }, headers),
        body: JSON.stringify(state)
    }
    )
    // .then(response=>{
    //     console.log("response is ", response);
    //     retu
    // })
   
  
}