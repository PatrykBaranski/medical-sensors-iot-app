import { BrowserRouter, Route, Routes } from "react-router";
import { EcgChart } from "./modules/ecg/ecg_chart/EcgChart";
import { EcgList } from "./modules/ecg/ecg_list/EcgList";
import { Home } from "./modules/home/Home";

const App = () => {
  return (
    <div className="bg-gradient-to-tr from-primary-200 w-screen h-screen p-12">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecg-list" element={<EcgList />} />
          <Route path="/ecg/:id" element={<EcgChart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
