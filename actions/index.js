import firebase from '../fb'

export function getBlogs(){
    return(dispatch) => {

      dispatch({
        type:"BLOGS_LOADING_STATUS",
        payload:true
      })

      firebase.database().ref('/courier').on('value', snapshot => {
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

export function postBlogs(id, title, age, content, description, image, motoInfo){
    return(dispatch) => {
        firebase.database().ref('/courier').push({id, title, age, content, description, image, motoInfo})
    }
}

export function deleteBlog(key){
  return(dispatch) => {
      firebase.database().ref(`/courier/${key}`).remove()
  }
}

export function editBlog(title, content, key, description){
  return(dispatch) => {
      firebase.database().ref(`/courier`).child(key).update({title, content, key, description})
  }
}

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

export function getMotos(){
  return(dispatch) => {

    dispatch({
      type:"BLOGS_LOADING_STATUS",
      payload:true
    })

    firebase.database().ref('/moto').on('value', snapshot => {
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

export function getMotoInfo(key){
  return(dispatch) => {

    dispatch({
      type:"BLOGS_LOADING_STATUS",
      payload:true
    })

    firebase.database().ref('/moto' + key).on('value', snapshot => {
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
