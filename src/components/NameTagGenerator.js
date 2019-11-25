import React, { Component } from 'react'
import Form from './Form'
import NameTags from './NameTags'

export class NameTagGenerator extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      names: [],
      language: '',
      submitted: false,
    }
  }
  userInputs = (text, language) => {
    this.setState({
      names: text.split(/\n/).filter(name => name !== ''),
      language: language,
      submitted: true,
    });
  }

  handleReset = (event) => {
    this.setState({
      names: [],
      language: '',
      submitted: false,
    });
  }

  render() {
    let style = {
      fontSize: '20px',
      color: '#495057',
      width: '50%',
      margin: '0 auto 1em',
      padding: '0.75em',
      background: '#f1cdb0',
      border: 'none',
      borderRadius: '0.25em',
      cursor: 'pointer',
    }

    let form;
    let button;
    if (!this.state.submitted) {
      form = <Form onSubmit={this.userInputs} />;
    } else if (this.state.name === []) {
      form = <NameTags empty={true} />;
    } else {
      form = this.state.names.map((name, i) => {
        return <NameTags key={i} name={name} language={this.state.language} />
      });
    }
    if (this.state.submitted) {
      button = <button type='submit' 
                  onClick={this.handleReset}
                  style={style}>Generate new nametags!</button>
    }
    return (
      <div>
        <h1>NameTag Generator</h1>
        {form}
        {button}
      </div>
    )
  }
}

export default NameTagGenerator
