import { FC } from "react";
import { Link } from "react-router";

export const Home: FC = () => {
  return (
    <div>
      <div className="w-full flex flex-col item-center justify-center text-md py-24 uppercase text-center">
        <h1>Witam na stronie analizy sygnałów biomedycznych</h1>
        <span className="block text-xl p-12">
          Wybierz które typ badanie chcesz przeanalizować
        </span>
      </div>
      <div className="px-48">
        <Link
          to="/ecg-list"
          className="w-96 h-96 bg-primary-200 rounded-md flex items-center justify-center cursor-pointer transition-all hover:bg-primary-600 group duration-500"
        >
          <span className="opacity-100 text-primary-600 text-[100px] group-hover:text-primary-200">
            ECG
          </span>
        </Link>
      </div>
    </div>
  );
};
