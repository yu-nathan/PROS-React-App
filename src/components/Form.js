import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Form.css'

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      selectValue: '',
    }
  }

  handleTextChange = (event) => {
    this.setState({
      textValue: event.target.value
    });
  }
  handleSelectChange = (event) => {
    this.setState({
      selectValue: event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.textValue, this.state.selectValue);
  }

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <textarea className='form__control form__control--resize-disabled'
              rows='5' cols='30'
              value={this.state.textValue}
              onChange={this.handleTextChange}
              placeholder='Enter your names, one per line.'
              required>
          </textarea>
          <select className='form__control' value={this.state.selectValue}
              onChange={this.handleSelectChange}
              required>
            <option value='' disabled hidden>Select a language</option>
            <option value='english'>English</option>
            <option value='french'>French</option>
            <option value='german'>German</option>
            <option value='spanish'>Spanish</option>
            <option value='italian'>Italian</option>
          </select>
          <button className='form__button' type='submit'>Generate!</button>
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form
