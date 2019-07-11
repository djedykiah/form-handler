import React from 'react';


class FormWrapper extends React.Component {
  render() {
    return (
      <div className="form-container">
        {this.props.render()}
      </div>
    )
  }
};

export default FormWrapper;

