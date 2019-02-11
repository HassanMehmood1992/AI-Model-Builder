import React, { Component } from 'react';
import './model-specs.css'
import ACTIONS from "../../redux/model-specs/model-specs-actions";
import { connect } from "react-redux";
import {

  Button
} from "@material-ui/core";

class ModelSpecs extends Component {
  state = { modelcategory: '', modeltype: '', optimizationmatric: '' };
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
    alert('model specs updated')
    event.preventDefault();
  };
  componentWillMount() {
    console.log(this.props.AppStore)


    this.setState({ modelcategory: this.props.AppStore.modelspec.modelcategory, modeltype: this.props.AppStore.modelspec.modeltype, optimizationmatric: this.props.AppStore.modelspec.optimizationmatric });

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
          <div className="row">
            <div className="col-md-4">
              <div className="form-group" >
                <label>Model Category</label>
                <select className="form-control"
                  defaultValue={this.state.modelcategory}
                  name="modelcategory"
                  onChange={this.handleChange}>
                  <option>Binomial</option>
                  <option>Continuous</option>
                  <option>Two Steps</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group" >
                <label>Model Type</label>
                <select className="form-control"
                  defaultValue={this.state.modeltype}
                  name="modeltype"
                  onChange={this.handleChange}>
                  <option>Binomial</option>
                  <option>Continuous</option>
                  <option>Two Steps</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingTop: 20 }}>
            <div className="col-md-12">
              <h4 className="page-heading">Optimization Matric</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group" >
                <label>Matric</label>
                <input className="form-control" type="text"
                  defaultValue={this.state.optimizationmatric}
                  name="optimizationmatric"
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
  setModelSpecs: item => dispatch(ACTIONS.setModelSpecs(item))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModelSpecs);
