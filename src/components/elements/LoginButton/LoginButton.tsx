import React from "react";
import LoginIcon from "./LoginIcon";
import styles from "./loginbutton.module.css";

interface Props {
  onClick: () => void,
}

const LoginButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className={styles.loginButton} onClick={onClick}>
      <LoginIcon fill="#1677FF" width="20" height="20" />
      <span className={styles.text}>LOGIN</span>
    </button>
  );
}

export default LoginButton;
