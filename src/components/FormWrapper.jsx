import React from 'react';
import Login from './Login';
import Register from './Register';


const FormWrapper = () => {
	return (
		<div className="form-container"> 
			<Login /> 
			<Register />
		</div>
	)
}

export default FormWrapper;
