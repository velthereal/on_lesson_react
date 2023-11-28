// import RegistrationForm from "../RegistrationForm";
import Products from '../Products';
import RefInput from '../RefInput';
import Modal from "../Modal";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main-wrapper">
        {/* <RegistrationForm /> */}
        <Products />
		{/* <RefInput /> */}
		<Modal />
      </div>
    </div>
  );
};

export default Main;
