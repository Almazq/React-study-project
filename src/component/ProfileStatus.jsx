import React from 'react';

class Status extends React.Component{
  state = {
    editMode:false
  }
  activeChange = ()=>{
    this.setState({
      editMode:true
    })
  }
  deactiveChange = ()=>{
    this.setState({
      editMode:false
    })
    this.props.data.newSetProfileStatus(this.props.data.profileStatus);
  }
  onChangeStatus = (e)=>{
    let text = e.target.value;
    this.props.data.updateNewStatus(text);
  }
  render(){
    return(
      <div>
        {!this.state.editMode
          ?<div onDoubleClick={this.activeChange}><p>Status:{this.props.data.profileStatus === null ? "no status" :this.props.data.profileStatus}</p></div>
          :<div><input onBlur={this.deactiveChange}type="text" value={this.props.data.profileStatus} onChange={this.onChangeStatus}/></div>
        }


        </div>
    );
  }
}
export default Status;
