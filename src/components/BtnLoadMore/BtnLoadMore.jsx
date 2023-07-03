import PropTypes from "prop-types";

export function BtnLoadMore({ onLoadMore }) {
  function handleClick() {
    onLoadMore();
  }
  return (
    <button
      type="button"
      //   className={css.button_load_more}
      onClick={handleClick}
    >
      <span>Load more</span>
    </button>
  );
}
BtnLoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
