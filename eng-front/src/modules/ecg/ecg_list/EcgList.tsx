import { Link } from "react-router";
import { useFetchData } from "../../../hooks/useFetchData";

type EcgListItemType = {
  results: { id: number }[];
};

export const EcgList = () => {
  const data = useFetchData<EcgListItemType>("ecgs-list");

  if (!data) return <div>loading...</div>;
  const ecgList = data.results;
  return (
    <div className="flex flex-col gap-6">
      <p className="text-xl text-primary-900">
        Lista ogólnie dostępnych badań ECG w naszej bazie:
      </p>
      <ul className="grid grid-cols-6 gap-2">
        {ecgList?.map((ecg, i) => (
          <li key={ecg.id}>
            <Link
              to={`/ecg/${ecg.id}`}
              className="flex items-center gap-2 group hover:bg-primary-300 rounded-full w-fit pr-2 transition-all duration-300"
            >
              <div className="w-8 h-8 bg-primary-300 rounded-full flex items-center justify-center text-white border-primary-500 border group-hover:border-0">
                {i + 1}
              </div>
              <span className="text-primary-700 group-hover:text-white font-semibold duration-300">
                Ecg {ecg.id}
              </span>
            </Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
