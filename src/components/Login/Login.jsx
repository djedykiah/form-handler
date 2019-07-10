import React, { Component } from 'react'; 

import FormLegend from '../FormLegend';
import FormInput from '../FormInput';

export default class Login extends Component {



	render() { 

		return (
			<div>
				<FormLegend  value="Вход в систему"/> 
				<FormInput
					label="name"
					name="name"
          errorMessage = "invalid name"
          type="text"
				/>
        <FormInput
					label="password"
					name="password"
          errorMessage = "invalid password"
          type="password"
				/>

		</div>
		)
	}
}

