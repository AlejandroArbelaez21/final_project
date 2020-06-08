import firebase from '../fb'

export function getBlogs(){
    return(dispatch) => {

      dispatch({
        type:"BLOGS_LOADING_STATUS",
        payload:true
      })

      firebase.database().ref('/tendero').on('value', snapshot => {
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

export function postBlogs(title, content, debt){
    return(dispatch) => {
        firebase.database().ref('/tendero').push({title, content, debt})
    }
}

export function deleteBlog(key){
  return(dispatch) => {
      firebase.database().ref(`/tendero/${key}`).remove()
  }
}

export function editBlog(title, content, key){
  return(dispatch) => {
      firebase.database().ref(`/tendero`).child(key).update({title, content})
  }
}