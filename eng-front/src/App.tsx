import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./modules/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
