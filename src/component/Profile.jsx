import React from 'react';
import Status from './ProfileStatus';
import {useFormik} from 'formik';

let Profile = (props) => {
  const formik = useFormik({
    initialValues:{
      post:""
    },
    onSubmit:(values)=>{
      props.addPostActionCreat(values.post);
    }
  })

  return(
    <form onSubmit={formik.handleSubmit}>
      <div className='content-conteiner'>
        <img className="img-wal" src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/>
        <div className="content">
          <img  className="content__ava"src={props.photosSmall}/>
          <div className='content-info'>
            <h3>{props.fullname}</h3>
            <p className="p">Date of Birth: 2021</p>
            <p>City: Seoul</p>
            <p>Homosapien: true</p>
            <Status profileStatus={props.profileStatus} newSetProfileStatus={props.newSetProfileStatus}/>
          </div>
          <div className="content-conteiner__comment">
            <h3>Comment</h3>
            <input type="text" className="input__comment" name="post" value={formik.values.post} onChange={formik.handleChange}/>
            <button type="submit">Add</button>
          </div>
          <ProfilePosts posts={props.posts} />
        </div>
        <status />

      </div>
    </form>
  );
}
const ProfilePosts = React.memo(props =>{
  let postMap =
    props.posts.map(post => <div className="post" key = {post.id}>{post.posts}</div>);
  return(
    <div className="posts">
      {postMap}
    </div>
  )
})
export default Profile;
