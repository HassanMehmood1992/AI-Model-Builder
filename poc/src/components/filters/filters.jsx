import React, { Component } from 'react';
import './filters.css'
import ACTIONS from "../../redux/filters/filter-actions";
import { connect } from "react-redux";
import DatePicker from "react-datepicker"; // https://www.npmjs.com/package/react-datepicker
import moment from 'moment'
import DateRangePicker from 'react-bootstrap-daterangepicker'; // https://github.com/skratchdot/react-bootstrap-daterangepicker
import "react-datepicker/dist/react-datepicker.css";
import {

  Button
} from "@material-ui/core";

class Filters extends Component {
  state = { smefilter: '', startdate: '', enddate: '' };
  handleDelete = () => {
    //delete the task from the store
  };
  handleStartDateChange = (date) => {
    this.setState({
      startdate: date
    });
  }
  handleEndDateChange = (date) => {
    this.setState({
      enddate: date
    });
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    console.log(this.state);
    this.props.setFilters(this.state);
    this.props.globalCall(this.state)
    alert('filters updated')
    event.preventDefault();
  };
  handleEvent = (event, picker) => {
    console.log(picker.startDate);
    this.setState({
      startdate: picker.startDate,
      enddate: picker.endDate
    });
    console.log(this.state)
  }
  componentWillMount() {
    console.log(this.props.AppStore.filters)
    const hh = this.props.AppStore.filters.smefilter;

    this.setState({ smefilter: this.props.AppStore.filters.smefilter, startdate: this.props.AppStore.filters.startdate, enddate: this.props.AppStore.filters.enddate });

  }

  render() {
    return (
      <div className="row" style={{ width: '100%' }}>
        <div className="col-md-2"></div>
        <div className="col-md-8 card" >
          <div className="row" style={{ paddingTop: 20 }}>
            <div className="col-md-12">
              <h4 className="page-heading">Filters</h4>
            </div>
          </div>
          <div className="form-group" >
            <label>SME Filter</label>
            <textarea className="form-control" type="text"
              defaultValue={this.state.smefilter}
              name="smefilter"
              onChange={this.handleChange} />
          </div>
          <div className="row" style={{ paddingTop: 20 }}>
            <div className="col-md-12">
              <h4 className="page-heading">Data Date Range (min-max)</h4>
            </div>
          </div>
          {/* <div className="row">
          
            <div className="col-md-4">
              <div className="form-group" >
                <label>Start Date</label>
                <DatePicker className="form-control"
                  selected={this.state.startdate}
                  onChange={this.handleStartDateChange}
                  dateFormat="dd-MMM-YYYY"
                   />
              </div>
            </div>
            <div className="col-md-2">
            <div className="form-group">
            <label style={{visibility:'hidden'}}>No title</label>
              <div style={{textAlign:'center',paddingTop:'5px'}}>to</div>
            </div></div>
            <div className="col-md-4">
              <div className="form-group" >
                <label >End Date</label>
                <DatePicker className="form-control"
                  selected={this.state.enddate}
                  onChange={this.handleEndDateChange}
                  dateFormat="dd-MMM-YYYY"
                   />
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-4">
              <div className="form-group" >
                <label>SME Data Range</label>
                <DateRangePicker className="form-control"
                  startDate={this.state.startdate}
                  endDate={this.state.enddate}
                  onEvent={this.handleEvent}
                ><input type="text" defaultValue={moment(this.state.startdate).format('DD-MMM-YYYY') + ' to ' + moment(this.state.enddate).format('DD-MMM-YYYY')} className="form-control"></input></DateRangePicker>
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
  setFilters: item => dispatch(ACTIONS.setFilters(item)),
  globalCall: item => dispatch(ACTIONS.globalCall(item)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
