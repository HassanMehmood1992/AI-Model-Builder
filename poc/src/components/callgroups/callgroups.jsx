import React, { Component } from 'react';
import './callgroups.css'
import ACTIONS from "../../redux/callgroups/callgroups-actions";
import { connect } from "react-redux";
import {

  Button
} from "@material-ui/core";
class Callgroups extends Component {
  state  = { cgtable: '', filter: ''};
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    console.log(this.state);
    this.props.setCallgroups(this.state);
    //this.props.globalCall(this.state)
    alert('call groups updated')
    event.preventDefault();
  };
  componentWillMount() {
    console.log(this.props.AppStore.filters)
    const hh = this.props.AppStore.filters.smefilter;

    this.setState({ cgtable: this.props.AppStore.callgroup.cgtable, filter: this.props.AppStore.callgroup.filter });

  }
  render() {
    return (
      <div className="row" style={{ width: '100%' }}>
        <div className="col-md-2"></div>
        <div className="col-md-8 card" >
          <div className="row" style={{ paddingTop: 20 }}>
            <div className="col-md-12">
              <h4 className="page-heading">Callgroups</h4>
            </div>
          </div>
          <div className="form-group" >
            <label>Call group table</label>
            <input className="form-control" type="text"
              defaultValue={this.state.cgtable}
              name="cgtable"
              onChange={this.handleChange} />
          </div>
          <div className="row" style={{ paddingTop: 20 }}>
            <div className="col-md-12">
              <h4 className="page-heading">Callgroup Filters</h4>
            </div>
          </div>
          <div className="row">
          
            <div className="col-md-4" >
            <div className="form-group" >
            <label>Call group table</label>
            <input className="form-control" type="text"
              defaultValue={this.state.filter}
              name="filter"
              placeholder="iscurrent = 1"
              onChange={this.handleChange} />
          </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10"></div>
            <div className="col-md-2" style={{ textAlign: 'right' }}>
              <Button className='btn btn-primary' style={{ textTransform: 'none', background: '#3f51b5', color: 'white', marginBottom: '10px' }} onClick={this.handleSubmit}>Update</Button>
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
  setCallgroups: item => dispatch(ACTIONS.setCallgroups(item))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callgroups);
