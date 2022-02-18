import Main from "./components/main/Main";
import Login from "./components/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App({ authService, FileInput, realTimeDB }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login authService={authService} />} />
        <Route
          path="/main"
          element={
            <Main
              authService={authService}
              FileInput={FileInput}
              realTimeDB={realTimeDB}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
