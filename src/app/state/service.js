

export function getStates(){
    console.log("service called")
    return fetch("http://localhost:7070/api/states")
    .then(response=>{
        return response.json();
    })
}

export function getStateById(id){
    console.log("getStateById sevice called")
    return fetch("http://localhost:7070/api/states/"+id)
    .then(response=>{
        return response.json();
    })
}





export function updateState(updatedState,headers=undefined){
    console.log("updateState sevice called")
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
    // return fetchJson("http://localhost:7070/api/states/"+updatedState.id, {
    //     method: 'PUT',
    //     headers: Object.assign({
    //                 'Content-Type': 'application/json'
    //              }, headers),
    //     body: JSON.stringify(updatedState)
    // })
  
}
