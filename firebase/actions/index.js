import firebase from '../fb'

//Calls to firebase
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

export async function postBlogs(id, title, age, content, description, image, motoInfo, time, rate){
    return(dispatch) => {
        firebase.database().ref('/courier').push({id, title, age, content, description, image, motoInfo, time, rate})
    }
}

export function postMotos(brand, content, motoName, motoPrice, originalPrice, revenue){
  return(dispatch) => {
      firebase.database().ref('/moto').push({brand, content, motoName, motoPrice, originalPrice, revenue})
  }
}

export function deleteBlog(key){
  return(dispatch) => {
      firebase.database().ref(`/courier/${key}`).remove()
  }
}

export function editBlog(title, content, key, uid, invest){
  return(dispatch) => {
      firebase.database().ref(`/courier`).child(key).update({title, content, key})
      firebase.database().ref('/user/' + uid).update({invested: invest})
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
