import React from 'react';
import PropTypes from 'prop-types'

//use destructuring of props object. Pull out named property that is passed in to the index file
function Header({text,bgColour,textColour}) {
  const headerStyles ={
    backgroundColor: bgColour,
    color: textColour
  }
  return (
    <header style={headerStyles}>
      
      <section className='header-container'>
        <h1>My App</h1>

        <h2>{text}</h2>
      </section>
    </header>
  ) 
};

Header.defaultProps ={
  text: `Feedback UI`,
  bgColour: `rgba(120,53,20,0.4)`,
  textColour: `#b53737`
}
Header.propTypes = {
  text: PropTypes.string,
  bgColour: PropTypes.string,
  textColour: PropTypes.string
}
export default Header 