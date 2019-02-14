import React, { Component } from 'react';
import './filters.css'
import ACTIONS from "../../redux/filters/filter-actions";
import SOCKET_ACTIONS from "../../redux/socket/socket-actions";
import { connect } from "react-redux";
import DatePicker from "react-datepicker"; // https://www.npmjs.com/package/react-datepicker
import moment from 'moment'
import DateRangePicker from 'react-bootstrap-daterangepicker'; // https://github.com/skratchdot/react-bootstrap-daterangepicker
import "react-datepicker/dist/react-datepicker.css";
import { CalendarToday as Calender } from '@material-ui/icons';
import {

  Button
} from "@material-ui/core";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class Filters extends Component {
  state = { smefilter: '', startdate: '', enddate: '' };
  classes = {}
  constructor(props)
  {
    super(props)
    this.classes = props;
  }
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
  handleChanges = event => {
  
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
  // testingColor = () =>
  // {
  //   this.props.testingColor()
  // }
  testingColor = () =>
  {
    this.props.helloSocket("ss")
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
            {/* <div className="col-md-4">
              <div className="form-group" >
                <label>SME Data Range</label>
                <DateRangePicker className="form-control"
                  startDate={this.state.startdate}
                  endDate={this.state.enddate}
                  onEvent={this.handleEvent}
                  ranges =  {{
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                 }}
                ><input 
                type="text" 
                readOnly 
                value={moment(this.state.startdate).format('DD-MMM-YYYY') + ' to ' + moment(this.state.enddate).format('DD-MMM-YYYY')}
                className="form-control" style={{backgroundColor:'white'}}></input></DateRangePicker>
              </div>
            </div> */}
            <div className="col-md-4" >
            <div className="form-group"  >
            <TextField
              component = {DateRangePicker}
              startDate={this.state.startdate}
              endDate={this.state.enddate}
              onEvent={this.handleEvent}
              ranges =  {{
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
             }}
              label="SME Date Range"
              
              InputLabelProps={{
                style: { left: 16 },
              }}

              className={classNames(this.classes.margin, this.classes.textField)}
              value={moment(this.state.startdate).format('DD-MMM-YYYY') + ' to ' + moment(this.state.enddate).format('DD-MMM-YYYY')}
              autoComplete='nope'
              onChange={this.handleChanges('weightRange')}
              InputProps={{
                endAdornment: <InputAdornment position="start"><Calender/></InputAdornment>,
              }}
              fullWidth
            >
              
            </TextField>
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10"></div>
            <div className="col-md-2" style={{ textAlign: 'right' }}>
              <Button className='btn btn-primary' style={{ textTransform: 'none', background: '#3f51b5', color: 'white', marginBottom: '10px' }} onClick={this.handleSubmit}>Update</Button>
            </div>
            <div className="col-md-2" style={{ textAlign: 'right' }}>
              <Button className='btn btn-primary' style={{ textTransform: 'none', background: '#3f51b5', color: 'white', marginBottom: '10px' }} onClick={this.testingColor}>Color</Button>
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
  testingColor: () => dispatch(ACTIONS.loadColor()),
  helloSocket: (message) => dispatch(SOCKET_ACTIONS.sendMessage(message)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
