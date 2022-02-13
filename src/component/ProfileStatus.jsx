import React, {useState, useEffect} from 'react';

const Status = React.memo( props =>{
  console.log("status" )
  console.log(props)
  let [editMode, SetEditMode] = useState(false);
  let [status, SetStatus] = useState(props.profileStatus);
  useEffect(()=>{
    SetStatus(props.profileStatus);
  },[props.profileStatus])

  const activeChange = ()=>{
    SetEditMode(true);
  }
  const deactiveChange = ()=>{
    SetEditMode(false);
    props.newSetProfileStatus(status);
  }
  const onChangeStatus = (e)=>{
    SetStatus(e.target.value);
  }

    return(
      <div>
        {!editMode
          ?<div onDoubleClick={activeChange}><p>Status:{status === null ? "no status" : status}</p></div>
          :<div><input type="text" onBlur={deactiveChange} value={status} onChange={onChangeStatus} /></div>
        }
        </div>
    );
})
export default Status;
