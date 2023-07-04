import PropTypes from "prop-types";

const GoBackIcon = ({ className }) => {
  return (
    <svg id="back" viewBox="0 0 32 32" className={className}>
      <path d="M23.808 32c3.554-6.439 4.153-16.26-9.808-15.932v7.932l-12-12 12-12v7.762c16.718-0.436 18.58 14.757 9.808 24.238z"></path>
    </svg>
  );
};
export default GoBackIcon;

GoBackIcon.propTypes = {
  className: PropTypes.string,
};
