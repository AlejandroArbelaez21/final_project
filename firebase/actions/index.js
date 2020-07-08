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

export function postBlogs(id, title, age, content, description, image, motoInfo, time, rate, investors){
    return(dispatch) => {
        firebase.database().ref('/courier').push({id, title, age, content, description, image, motoInfo, time, rate, investors})
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

export function editBlog(title, content, key, description){
  return(dispatch) => {
      firebase.database().ref(`/courier`).child(key).update({title, content, key, description})
  }
}

export function editUser(uid, key, invest){
  return(dispatch) => {
    const fb = firebase.database().ref('/user/' + uid).update({invested: invested + invest})
    try{
      const fb = firebase.database().ref('/user/' + uid).child('couriers')
      fb.push({key: key}).then(console.log('TRY'));
    }
    catch {
      const fb = firebase.database().ref('/user/' + uid)
      fb.update({couriers: [key]}).then(console.log(fb.child(couriers)));
    }
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
