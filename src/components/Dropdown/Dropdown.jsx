import Select from "react-select";
import css from "./Dropdown.module.css";
import PropTypes from "prop-types";
import { filterValues } from "../FilterUser/filterValues";
// import { filterValues } from "../filterUser/filterValues";

const options = [filterValues.all, filterValues.follow, filterValues.following];

function Dropdown({ selectedOption, setSelectedOption }) {
  const handleChange = (e) => {
    setSelectedOption(e.value);
  };
  return (
    <div className={css.dropdown_container}>
      <Select
        defaultValue={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
}
export default Dropdown;

Dropdown.propTypes = {
  selectedOption: PropTypes.object,
  setSelectedOption: PropTypes.func,
};
