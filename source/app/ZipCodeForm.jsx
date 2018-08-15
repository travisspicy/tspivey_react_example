import React from 'react';

class ZipCodeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A zipcode was entered ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
	<div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Zipcode:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
	</div>
    );
  }
}

export default ZipCodeForm;
