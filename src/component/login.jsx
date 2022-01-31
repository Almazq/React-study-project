import React from 'react';
import {useFormik} from 'formik';

const LoginForm =()=>{
  const formik = useFormik({
    initialValues:{
      login:"",
      password:""
    },
    onSubmit:(values)=>{
      console.log(values)
    }
  })
    return(
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input name="login" type="text" onChange={formik.handleChange} value={formik.values.login}/>
          </div>
          <div>
            <input name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
          </div>
          <div>
            <button type="submit">login</button>
          </div>
        </form>
    );
}
const Login = (props)=>{
  return(
    <div>
      <h1>login</h1>
      <LoginForm />
    </div>
  )
}
// this.state.isChekbox ? this.setState({isChekbox:false}):this.setState({isChekbox:true})}}
// <div>
//   <input id="isChekbox" type="checkbox"
//     onClick={()=>{this.state.isChekbox ? this.setState({isChekbox:false}):this.setState({isChekbox:true})}} />
// </div>

export default Login;
