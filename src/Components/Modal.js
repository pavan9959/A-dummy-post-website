import { useContext } from "react";
import "./css/Signup.css";
import LoginForm from "./Login";
import Signup from "./Signup";
import { MyContext } from "../MyContext";
const Modal = () => {
  const { state, setState } = useContext(MyContext);
  return (
    <div className="signup-modal">
      {state.modalType === "login" && <LoginForm hideLogo={true} />}
      {state.modalType === "signup" && <Signup />}
    </div>
  );
};
export default Modal;
