import { Link } from "react-router-dom";

export const BtnGoBack = () => {
  return (
    <Link
      // className={css.link_back}
      // ref={newStateRef}
      to={location.state?.from ?? "/"}
    >
      {/* <Link className={css.link_back} to={stateRef}> */}
      Go back
    </Link>
  );
};
