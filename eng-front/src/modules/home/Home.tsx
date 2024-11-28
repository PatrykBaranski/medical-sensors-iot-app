import { FC } from "react";
import { Link } from "react-router";

export const Home: FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full flex flex-col item-center justify-center text-md pt-24 uppercase text-center">
        <h1>Witam na stronie analizy sygnałów biomedycznych</h1>
        <span className="block text-xl p-12">
          Wybierz które typ badanie chcesz przeanalizować
        </span>
      </div>
      <div className="w-[800px] gap-4 rounded-lg md:grid md:grid-cols-2 flex flex-col items-center">
        <Link
          to="/ecg-list"
          className="w-96 h-96 bg-primary-300 border-2 border-primary-500 rounded-md flex items-center justify-center cursor-pointer transition-all hover:bg-primary-600 group duration-500"
        >
          <span className="opacity-100 text-primary-600 text-[100px] group-hover:text-primary-200">
            ECG
          </span>
        </Link>
        <Link
          to="/ecg-list"
          className="w-96 h-96 bg-primary-300 border-2 border-primary-500 rounded-md flex items-center justify-center cursor-pointer transition-all hover:bg-primary-600 group duration-500"
        >
          <span className="opacity-100 text-primary-600 text-[100px] group-hover:text-primary-200">
            PPG
          </span>
        </Link>
        <Link
          to="/ecg-list"
          className="w-96 h-96 bg-primary-300 border-2 border-primary-500 rounded-md flex items-center justify-center cursor-pointer transition-all hover:bg-primary-600 group duration-500"
        >
          <span className="opacity-100 text-primary-600 text-[100px] group-hover:text-primary-200">
            EEG
          </span>
        </Link>
        <Link
          to="/ecg-list"
          className="w-96 h-96 bg-primary-300 border-2 border-primary-500 rounded-md flex items-center justify-center cursor-pointer transition-all hover:bg-primary-600 group duration-500"
        >
          <span className="opacity-100 text-primary-600 text-[100px] group-hover:text-primary-200">
            EMG
          </span>
        </Link>
      </div>
    </div>
  );
};
