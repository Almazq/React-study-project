import React, {useState, useEffect} from 'react';

const Status = (props)=>{
  let [editMode, SetEditMode] = useState(false)
  let [status, SetStatus] = useState(props.data.profileStatus)
  useEffect(()=>{
    SetStatus(props.data.profileStatus)
  },[props.data.profileStatus])
  const activeChange =()=>{
    SetEditMode(true);
  }
  const deactiveChange =()=>{
    SetEditMode(false);
    props.data.newSetProfileStatus(status);
  }
  const onChangeStatus = (e)=>{
    let text = e.target.value;
    SetStatus(text);
  }

    return(
      <div>
        {!editMode
          ?<div onDoubleClick={activeChange}><p>Status:{status === null ? "no status" : status}</p></div>
          :<div><input type="text" onBlur={deactiveChange} value={status} onChange={onChangeStatus} /></div>
        }


        </div>
    );
}
export default Status;
