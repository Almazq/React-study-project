 import React from 'react';

let Profile = (props) => { 

  let postalert = ()=>{
    props.addPostActionCreat();
  }
  let postMap = 
    props.posts.map(post => <div className="post">{post.posts}</div>);

  let onChangePost = (e)=>{
    let text = e.target.value;
    props.upDateNewPostActionCreat(text);
  }
  return(
      <div className='content-conteiner'>
        <img className="img-wal" src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/>
        <div className="content">
          <img  className="content__ava"src="https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-funny-anime-avatars-72.jpg"/>
          <div className='content-info'>
            <h3>Almaz B</h3>
            <p className="p">Date of Birth: 2021</p>
            <p>City: Seoul</p>
            <p>Homosapien: true</p>
            <p>Web Site: Google.com</p>
          </div>
          <div className="content-conteiner__comment">
            <h3>Comment</h3>
            <input type="text" className="input__comment" value={props.postValue} onChange={onChangePost}/>
            <button onClick = {postalert}>Add</button>
          </div>
          <div className="posts">
            {postMap}
          </div>
        </div>
      </div>
  );
}
export default Profile;