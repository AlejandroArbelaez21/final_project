import firebase from '../fb'

export function getUsers(){
    return(dispatch) => {

      dispatch({
        type:"BLOGS_LOADING_STATUS",
        payload:true
      })

      firebase.database().ref('/user').on('value', snapshot => {
        dispatch({
            type: "BLOGS_FETCH",
            payload: snapshot.val()
        })
        dispatch({
          type:"BLOGS_LOADING_STATUS",
          payload:false
        })
      })
    }
}

export function postUser(title, content, debt, description){
    return(dispatch) => {
        firebase.database().ref('/user').push({title, content, debt, description})
    }
}

export function deleteUsers(key){
  return(dispatch) => {
      firebase.database().ref(`/user/${key}`).remove()
  }
}

export function editUser(title, content, key, description){
  return(dispatch) => {
      firebase.database().ref(`/user`).child(key).update({title, content, key, description})
  }
}