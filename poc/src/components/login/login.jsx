import React, { Component } from 'react';
import './login.css'
import logo from '../../assets/afiniti.png';
import 'typeface-roboto';
import ACTIONS from "../../redux/localstorage/localstorage-actions";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleSubmit = (event) => {
     this.props.setUser( {user:{
      name:'Hassan Mehmood',
      email: 'hassan.mehmood@afiniti.com',
      loginID:'mehmohx'
    }})
    alert('adding default user to local storage')
    this.props.history.push('/main/modelList');
  }
  componentWillMount()
  {
    //  user is not logged in
    if(this.props.AppStore.localStorage.user.email == undefined)
    {
     
    }
    else
    {
      this.props.history.push('/main')
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-3 card" style={{ marginTop: '30vh' }} >
          <div className="row"  style={{ height: 64, backgroundColor: "#3f51b5" }}>
          <div style={{ height: 64}}>
            <div style={{ textAlign: "center", padding: 4 }}>
              <img src={logo} height="55px" style={{ padding: 6 }}></img>
            </div>
          </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group" style={{ paddingTop: 20 }}>
                  <label>User Name</label>
                  <input className="form-control" type="text" defaultValue={this.state.username} onChange={(event) => {
                    this.setState({ username: event.target.value })
                  }} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input className="form-control" type="password" defaultValue={this.state.password} onChange={(event) => {
                    this.setState({ password: event.target.value })
                  }} />
                </div>

                
                <button type="submit" style={{ marginBottom: 20 }} className="btn btn-primary">Login</button>
              </form>
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
  setUser: user => dispatch(ACTIONS.setUser(user)),
  getUser: () => dispatch(ACTIONS.getUser()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
