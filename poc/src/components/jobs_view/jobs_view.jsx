import React, { Component } from 'react';
import './jobs_view.css'
import SOCKET_ACTIONS from "../../redux/socket/socket-actions";
import { connect } from "react-redux";
import {

  Button
} from "@material-ui/core";

class ViewJob extends Component {
  state = {
    job:{id:1,name:'Job Title',description:'Description for job',status:'Completed'},
    logs:[{id:1,log:'asd'}]
};
componentDidMount()
{
    //job id passed as params in url
    //alert(this.props.match.params.id)
}
subRoom = () =>{
  this.props.sub('myroom')
 }
 unsubRoom = () =>{
 this.props.unsub('myroom')
 }
  render() {
    return (
      <div style={{ width: '100%' }}>
       <div className="row" >
          <div className="col-md-2" style={{ textAlign: 'right' }}>
              <Button className='btn btn-primary' style={{ textTransform: 'none', background: '#3f51b5', color: 'white', marginBottom: '10px' }} onClick={this.subRoom}>Sub</Button>
            </div>
            <div className="col-md-2" style={{ textAlign: 'right' }}>
              <Button className='btn btn-primary' style={{ textTransform: 'none', background: '#3f51b5', color: 'white', marginBottom: '10px' }} onClick={this.unsubRoom}>unSub</Button>
            </div>
            </div>
       <div className="row" style={{marginTop:10}}>
         <div className="col-md-2"></div>
         <div className="col-md-8 card" style={{ padding: 0 }}>
     
             <div className="row">
               <div className="col-md-6">
                 <h2 style={{ margin: "10px 0px 0px 10px", overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '1.4rem', fontWeight: 'normal' }}>{this.state.job.name}</h2>
               </div>
               <div className="col-md-6">
               <a style={{color:'black',textAlign:'right' }}>
                  <h2 style={{ margin: "10px 10px 0px 0px", overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '1.4rem', fontWeight: 'normal' }}>{this.state.job.status}</h2>
                </a>
               </div>
              
             </div>
             <p style={{ margin: 2, paddingLeft: 10, fontSize: '1rem', fontWeight: 'normal', color: '#6f6f6f' }}>
               {this.state.job.description}
            </p>
            <div style={{ margin: 2, paddingLeft: 3, fontSize: '1rem', fontWeight: 'normal', color: '#6f6f6f' }}>
              <ul style={{paddingLeft:18}}>
              {this.props.AppStore.socket.socket.joblogs.map((log) => ( 
                <li key={log.id} >
                  {log.log}
                </li>
                ))}
              </ul>
            </div>
          
           
           
         </div>
         
       </div>
       
     </div>
    );
  }
}

const mapStateToProps = state => ({
  AppStore: state
});
const mapDispatchToProps = dispatch => ({

  sub: (room) => dispatch(SOCKET_ACTIONS.subToRoom(room)),
  unsub: (room) => dispatch(SOCKET_ACTIONS.unsubRoom(room)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewJob);

