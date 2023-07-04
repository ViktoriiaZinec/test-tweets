import { Link } from "react-router-dom";
import css from "./BtnGoBack.module.css";
import GoBackIcon from "../GoBackIcon/GoBackIcon";

export const BtnGoBack = () => {
  return (
    <Link className={css.link_back} to={location.state?.from ?? "/"}>
      <GoBackIcon className={css.icon_back} />
    </Link>
  );
};
