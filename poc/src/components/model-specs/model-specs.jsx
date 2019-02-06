import React, { Component } from 'react';
import './model-specs.css'
import ACTIONS from "../../redux/model-specs/model-specs-actions";
import { connect } from "react-redux";
import {

  Button
} from "@material-ui/core";

class ModelSpecs extends Component{
  state = { modelname: '', modelstartdate: '', modelenddate: '' };
  handleDelete = () => {
    //delete the task from the store
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    console.log(this.state);
    this.props.setModelSpecs(this.state);
    alert('filters updated')
    event.preventDefault();
  };
  componentWillMount() {
    console.log(this.props.AppStore)


    this.setState({ modelname: this.props.AppStore.modelspec.modelname, modelstartdate: this.props.AppStore.modelspec.modelstartdate, modelenddate: this.props.AppStore.modelspec.modelenddate });
    
  }

  render() {
    return (
      <div className="row" style={{ width: '100%' }}>
        <div className="col-md-2"></div>
        <div className="col-md-8 card" >
          <div className="row" style={{ paddingTop: 20 }}>
            <div className="col-md-12">
              <h4 className="page-heading">Model Specs</h4>
            </div>
          </div>
          <div className="form-group" >
            <label>SME Filter</label>
            <textarea className="form-control" type="text"
              defaultValue={this.state.modelname}
              name="modelname"
              onChange={this.handleChange} />
          </div>
          <div className="row" style={{ paddingTop: 20 }}>
            <div className="col-md-12">
              <h4 className="page-heading">Data Date Range (min-max)</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group" >
                <label>Model Start Date</label>
                <input className="form-control" type="text"
                  defaultValue={this.state.modelstartdate}
                  name="modelstartdate"
                  onChange={this.handleChange} />
              </div>
            </div>
            <div className="col-md-2">
            <div className="form-group">
            <label style={{visibility:'hidden'}}>No title</label>
              <div style={{textAlign:'center',paddingTop:'5px'}}>to</div>
            </div></div>
            <div className="col-md-4">
              <div className="form-group" >
                <label >Model End Date</label>
                <input className="form-control" type="text" defaultValue={this.state.modelenddate}
                  name="modelenddate"
                  onChange={this.handleChange} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10"></div>
            <div className="col-md-2" style={{textAlign:'right'}}>
              <Button  className='btn btn-primary' style={{ textTransform:'none', background:'#3f51b5', color:'white',marginBottom:'10px'}} onClick={this.handleSubmit}>Update</Button>
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
  setModelSpecs: item => dispatch(ACTIONS.setModelSpecs(item))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModelSpecs);
