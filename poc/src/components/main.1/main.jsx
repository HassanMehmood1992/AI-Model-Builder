import React, { Component } from 'react';
import './main.css'
import axios from 'axios'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
  return(
      <div>
      <AppBar position="static">
          <Toolbar>
              <Typography variant="title" color="inherit">
                Afiniti
              </Typography>
          </Toolbar>
      </AppBar>
      </div>
  )
}

class Main extends Component {
  state = {
    width: 10,
    height: 10,
    iterations: 5,
    initializeWith: '3',
    device: 'GPU',
    selectedOption: 'ONES',
    dimensions:'',
    outputiterations:'',
    timeunit:'',
    total_latency:'',
    avg_latency:''
  };

  handle = (event) => {
    this.setState({ InitializeWith: event.target.value }); // onChange={this.handleChange}
  }

  handleSubmit = (event) => {
    let api = 'http://192.168.8.101:3000/api/v1/';
    let method = 'gemm?'
    let args = 'width=' + this.state.width + '&height=' + this.state.height + '&device=' + this.state.device + '&init_with=' + this.state.selectedOption + '&init_number=' + this.state.initializeWith + '&iterations=' + this.state.iterations;
    let request = api + method + args
    axios.get(request)
      .then(response => { 
        this.setState({
          dimensions:response.data.dimensions,
          outputiterations:response.data.iterations,
          timeunit:response.data.time_unit,
          total_latency:response.data.total_latency,
          avg_latency:response.data.avg_latency,
        })
         
    })
    event.preventDefault();
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });

  }
  render() {
    return (
      <div>
      <NavBar>
      </NavBar>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 card" style={{ marginTop: 20 }} >
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group" style={{ paddingTop: 20 }}>
                  <label>Width</label>
                  <input className="form-control" type="text" defaultValue={this.state.width} onChange={(event) => {
                    this.setState({ width: event.target.value })
                  }} />
                </div>
                <div className="form-group">
                  <label>Height</label>
                  <input className="form-control" type="text" defaultValue={this.state.height} onChange={(event) => {
                    this.setState({ height: event.target.value })
                  }} />
                </div>
                <div className="form-group">
                  <label>Iterations</label>
                  <input className="form-control" type="text" defaultValue={this.state.iterations} onChange={(event) => {
                    this.setState({ iterations: event.target.value })
                  }} />
                </div>
                <div className="form-group">
                  <label>Device</label>
                  <select className="form-control" onChange={(event) => {
                    this.setState({ device: event.target.value })
                  }}>
                    <option>CPU</option>
                    <option>GPU</option>
                    <option>JULIA</option>
                    <option>JULIA_GPU</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Initialize With</label>
                  <div className="radio">
                    <input type="radio" value="ONES" checked={this.state.selectedOption === 'ONES'} onChange={this.handleOptionChange} />
                    ONES
                  </div>
                  <div className="radio">
                    <input type="radio" value="RANDOM" checked={this.state.selectedOption === 'RANDOM'} onChange={this.handleOptionChange} />
                    RANDOM
                  </div>
                  <div className="radio">
                    <input style={{ marginBottom: 20 }} type="radio" value="NUMBER" checked={this.state.selectedOption === 'NUMBER'} onChange={this.handleOptionChange} />
                    NUMBER
                  </div>
                  {this.state.selectedOption !== 'NUMBER' ? '' : <input className="form-control" type="text" placeholder="Enter number value here" defaultValue={this.state.initializeWith} />}
                </div>
                <button type="submit" style={{ marginBottom: 20 }} className="btn btn-primary">Submit</button>
              </form>
            </div>
            <div className="col-md-6">
            <div className="page-header" style={{ marginTop: 20 }}>
              <h4>Output</h4>
            </div>
            <div className="row">
              <div className="col-md-6">
              Dimensions
              </div>
              <div className="col-md-6">
                {this.state.dimensions}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
              Iterations
              </div>
              <div className="col-md-6">
              {this.state.outputiterations}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
              Total Latency
              </div>
              <div className="col-md-6">
              {this.state.total_latency}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
              Average Latency
              </div>
              <div className="col-md-6">
              {this.state.avg_latency}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
              Time Unit
              </div>
              <div className="col-md-6">
              {this.state.timeunit}
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>
      </div>
    );
  }
}

export default Main;
