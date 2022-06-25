import React, { Component } from 'react'

export class countryForm extends Component {
    state={
        data:this.props.data
    }
  render() {
      const{data}=this.state;
      const{country}=this.state.data;
    return (
        <React.Fragment>
        <div className="form-group">
                <label>Contry</label>
                <select className="form-control"name="country"id="country"value={country}
                onChange={this.handelChange}>
                    <option disabled value="">Select the Country</option>
                    {data.map((ele)=><option>{ele.country}</option>)}
                </select>
            </div>
            </React.Fragment>
  
    )
  }
}

export default countryForm
