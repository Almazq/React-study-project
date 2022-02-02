import React from 'react';
import {useFormik} from 'formik';
import {connect} from "react-redux";
import {authLoginThunkCreator} from ".././redux/auth-reducer.js";
import {Navigate} from 'react-router-dom';

const LoginForm =(props)=>{
  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    onSubmit:(values)=>{
      props.getInfoSubmit(values)
    }
  })
    return(
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
          </div>
          <div>
            <input name="password" type="password" onChange={formik.handleChange} value={formik.values.password} />
          </div>
          <div>
            {props.loginStatus ? "" :"error"}
          </div>
          <div>
            <button type="submit">login</button>
          </div>
        </form>
    );
}
const Login = (props)=>{
  const getInfoSubmit = (values)=>{
    props.authLoginThunkCreator(values.email,values.password)
  }
  if(props.isAuth){
    return <Navigate to="/Profile/me" />
  }
  return(
    <div>
      <h1>login</h1>
      <LoginForm getInfoSubmit={getInfoSubmit} loginStatus={props.loginStatus}/>
    </div>
  )
}
const mapStateToProps = (state)=>{
  return{
    isAuth:state.auth.isAuth,
    loginStatus:state.auth.loginStatus,
  }
}

export default connect(mapStateToProps,{authLoginThunkCreator})(Login);
