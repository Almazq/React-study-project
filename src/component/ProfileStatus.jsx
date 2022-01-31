import React from 'react';

class Status extends React.Component{
  state = {
    editMode:false,
    status:this.props.data.profileStatus,
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.status !== this.props.data.profileStatus){
      this.setState({
        status:this.props.data.profileStatus
      })
    }
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
    this.props.data.newSetProfileStatus(this.state.status);
  }
  onChangeStatus = (e)=>{
    let text = e.target.value;
    this.props.data.updateNewStatus(text);
  }
  render(){
    return(
      <div>
        {!this.state.editMode
          ?<div onDoubleClick={this.activeChange}><p>Status:{this.state.status === null ? "no status" :this.state.status}</p></div>
          :<div><input onBlur={this.deactiveChange}type="text" value={this.state.status} onChange={this.onChangeStatus}/></div>
        }


        </div>
    );
  }
}
export default Status;
