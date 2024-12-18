import { BrowserRouter } from "react-router-dom";
import Navbar from "./page/navbar/navbar";
import AppRouter from "./page/routes";
import Footer from "./page/footer/footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
