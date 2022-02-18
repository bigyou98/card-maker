import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "service/auth_service";
import firebaseApp from "service/firebase";
import ImgUploader from "service/img_uploader";
import RealTimeDB from "service/real_tiem_db";
import ImgFileInput from "components/image_file_input/ImgFileInput";

// const authService = new AuthService(firebaseApp);
const authService = new AuthService();
const imgUploader = new ImgUploader();
const realTimeDB = new RealTimeDB();

const FileInput = (props) => (
  <ImgFileInput {...props} imgUploader={imgUploader} />
);
ReactDOM.render(
  <React.StrictMode>
    <App
      FileInput={FileInput}
      authService={authService}
      realTimeDB={realTimeDB}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
