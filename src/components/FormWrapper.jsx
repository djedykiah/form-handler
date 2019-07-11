import React from 'react';


const FormWrapper = component => (
  <div className="form-container">
    {component.render()}
  </div>
);

export default FormWrapper;
