import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.scss";
// import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import store from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
