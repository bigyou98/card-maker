import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "service/auth_service";
import firebaseApp from "service/firebase";
import ImgUploader from "service/img_uploader";
import ImgFileInput from "components/image_file_input/ImgFileInput";

// const authService = new AuthService(firebaseApp);
const authService = new AuthService();
const imgUploader = new ImgUploader();

// <ImgFileInput /> 컴포넌트에서만 사용하는 기능인 imgUploader를
// 최상단에서 계속 넘겨주는 것이 아닌 방식
// 계속 넘겨주는 것은 똑같지만 추가되는 기능을 계속해서 최상단부터 넘겨받는 것보다는 낫기때문이다.
const FileInput = (props) => (
  <ImgFileInput {...props} imgUploader={imgUploader} />
);
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);
