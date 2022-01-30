import PropTypes from 'prop-types';
//children refers to text within button
//type: submit for example
//version relates to classes that wil be added
//disabled bool taht will prevent it from being active..
function Button({children, version, type, isDisabled}) {
  return <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
          </button>;
}

Button.propTypes={
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  isDisabled: PropTypes.bool.isRequired,
  type: PropTypes.string
}

Button.defaultProps ={
  version: `primary`,
  type: `button`,
  isDisabled: `false`
}

export default Button;
