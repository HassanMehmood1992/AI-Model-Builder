import React, { Component } from 'react';
import SOCKET_ACTIONS from "../../redux/socket/socket-actions";
import './jobs.css'
import { connect } from "react-redux";
import {

  Button
} from "@material-ui/core";

class Jobs extends Component {
  state = {

  }
  subRoom = () =>{
   this.props.sub('myroom')
  }
  unsubRoom = () =>{
  this.props.unsub('myroom')
  }
  render() {
    return (
      <div className="row" style={{ width: '100%' }}>
        <div className="col-md-2"></div>
        <div className="col-md-8 card" >
          <div className="row" style={{ paddingTop: 20 }}>
            <div className="col-md-12">
              <h4 className="page-heading">Jobs</h4>
            </div>
          </div>
          <div className="row" >
          <div className="col-md-2" style={{ textAlign: 'right' }}>
              <Button className='btn btn-primary' style={{ textTransform: 'none', background: '#3f51b5', color: 'white', marginBottom: '10px' }} onClick={this.subRoom}>Sub</Button>
            </div>
            <div className="col-md-2" style={{ textAlign: 'right' }}>
              <Button className='btn btn-primary' style={{ textTransform: 'none', background: '#3f51b5', color: 'white', marginBottom: '10px' }} onClick={this.unsubRoom}>unSub</Button>
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
)(Jobs);

