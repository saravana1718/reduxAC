export const depositMoney=(amount)=>{
    return(dispatch)=>{
     dispatch({
        type:"deposit",
        payload:amount
    })
}
}
export const withDrawMoney=(amount)=>{
    
    return (dispatch)=>{
    dispatch({
        type:"widhraw",
        payload:amount 
    })
}

}
export const changeUser=(name)=>{
return (dispatch)=>{
    dispatch({
        type:"userChanged",
        payload:name
    })
}

}