import React from 'react'
import PropTypes from 'prop-types'
import './NameTags.css'

function NameTags(props) {
  if (props.empty) {
    return (
      <div className='nameTag'>
        <p>All of the names were empty.</p>
      </div>
    );
  }
  let greeting = '';
  switch (props.language) {
    case 'english':
      greeting = 'Hi, my name is';
      break;
    case 'french':
      greeting = 'Bonjour, je m\'appelle';
      break;
    case 'german':
      greeting = 'Hallo, ich bin';
      break;
    case 'spanish':
      greeting = 'Hola, yo soy';
      break;
    case 'italian':
      greeting = 'Buon giorno, mi chiamo';
      break;
    default:
      greeting = 'Hi, my name is';
  }
  return (
    <div className='nameTag'>
      <p className='nameTag__greeting'>{greeting}</p>
      <p className='nameTag__name'>{props.name}</p>
    </div>
  );
}

NameTags.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
}

export default NameTags
