import React, { Component } from 'react';
import './model-lists.css'
import 'typeface-roboto';
import { ChevronRight } from '@material-ui/icons';
import M from '../../assets/M.png';

import { Link} from 'react-router-dom';


class ModelLists extends Component {
  state = {
      models:[{id:1,name:'Model Name',stan:'Binomial-noncentered',optimizationMatric:'Optimization Matric: IsSale'},
      {id:2,name:'Model Name',stan:'Binomial-noncentered',optimizationMatric:'Optimization Matric: IsSale'},
      {id:3,name:'Model Name',stan:'Binomial-noncentered',optimizationMatric:'Optimization Matric: IsSale'},
      {id:4,name:'Model Name',stan:'Binomial-noncentered',optimizationMatric:'Optimization Matric: IsSale'},
      {id:5,name:'Model Name',stan:'Binomial-noncentered',optimizationMatric:'Optimization Matric: IsSale'},
      {id:6,name:'Model Name',stan:'Binomial-noncentered',optimizationMatric:'Optimization Matric: IsSale'},
      {id:7,name:'Model Name',stan:'Binomial-noncentered',optimizationMatric:'Optimization Matric: IsSale'}]
  };
  render() {
    return (
      <div style={{ marginTop: 100, width: '100%' }}>
       {this.state.models.map((model) => (
        <div className="row" key={model.id} style={{marginTop:10}}>
          <div className="col-md-2"></div>
          <div className="col-md-8 card" style={{ padding: 0 }}>
            <div className="" style={{ paddingBottom: '5px', position: 'relative', paddingRight: '30px', paddingLeft: '10px' }}>
              <div style={{ clear: 'both' }}>
                <div style={{ width: 32, float: 'left' }}>
                  <img src={M} style={{ height: 50, width: 50, float: 'left', margin: "5px 0px 0px 0px" }} />
                </div>
                <div style={{ marginLeft: 37 }}>
                  <h2 style={{ margin: "5px 5px 0px 20px", overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '1.4rem', fontWeight: 'normal' }}>{model.name}</h2>
                  <h2 style={{ margin: "5px 5px 0px 20px", overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '1.2rem', fontWeight: 'normal' }}>{model.stan}</h2>
                </div>
              </div>
              <p style={{ margin: 2, paddingLeft: 3, fontSize: '1rem', fontWeight: 'normal', color: '#6f6f6f' }}>
                {model.optimizationMatric}
                  </p>
            </div>
            <Link to={`/main/modelList/${model.id}/model`} style={{ position: 'absolute', right: 5, top: '30%', marginTop: '-10px', zIndex: 1,color:'black' }}>
              <ChevronRight style={{ height: 50, width: 50, float: 'left', margin: "5px 0px 0px 0px" }} />
            </Link>
          </div>
        </div>
        ))}
      </div>
    );
  }
}

export default ModelLists;
