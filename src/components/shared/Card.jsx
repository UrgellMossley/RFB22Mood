import PropTypes from 'prop-types'
function Card({children, reverse}) {
    //Example of conditional styling using react
  return <div className={`card ${reverse && `reverse`}`}>
    {children}
  </div>;   
}
Card.defaultProps={
    reverse: false
}
Card.propTypes={
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}
export default Card;
