import React, { Component } from 'react';

export default class FormInput extends Component {
	state = {
    error: false, 
    value: '',
  }; 
  componentDidMount() {
    console.log(this.props.onChange)
  }
	onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
	render() { 
		const { label, errorMessage, type } = this.props;
		const { error, value } = this.state; 
		const isError = error ? "error" : "";
		const errorField = error ? (<span className="error-msg">{errorMessage}</span>) : null;
		return (
			<div className="input-group">
				<label htmlFor="">{label}</label>
				<input  type={type} className={`input ${isError}`} value={value} onChange={this.onChange}/> 
				{errorField}
			</div>
		)
	}
}

