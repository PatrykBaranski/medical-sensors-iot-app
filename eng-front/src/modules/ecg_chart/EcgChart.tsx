import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import { ButtonPrimary } from "../../components";
import { useFetchData } from "../../hooks/useFetchData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart - Multi Axis",
    },
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true,
        },
        mode: "x",
      },
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

type EcgApiType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { ecg_list: string }[];
};

const getConvertDataToArray = (data: EcgApiType | undefined) => {
  const labels: number[] = [];
  const convertedData = data?.results[0].ecg_list
    .replace("[", "")
    .replace("]", "")
    .split(", ")
    .map((el, i) => {
      labels.push(i);
      return +el.replaceAll("'", "");
    });

  if (convertedData) {
    return { data: convertedData, labels };
  }
};

export const EcgChart = () => {
  const [currentEcg, setCurrentEcg] = useState("ecgs");
  const data = useFetchData<EcgApiType>(currentEcg);
  const ecgs = useMemo(() => getConvertDataToArray(data), [data]);

  const dataxdd = {
    labels: ecgs?.labels,
    datasets: [
      {
        label: "Dataset 1",
        data: ecgs?.data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
    ],
  };

  if (!ecgs) return <h1>Loading</h1>;

  return (
    <div className="w-screen h-screen">
      <div className="h-4/5">
        <Line options={options} data={dataxdd} />
      </div>
      <div className="w-full flex gap-7 justify-center">
        <ButtonPrimary
          text="Poprzednie badanie"
          onClick={() => {
            if (!data?.previous) return;
            setCurrentEcg(data.previous.split("/").slice(-2).join("/"));
          }}
        />
        <ButtonPrimary
          onClick={() => {
            if (!data?.next) return;
            setCurrentEcg(data.next.split("/").slice(-2).join("/"));
          }}
          text="Następne badanie"
        />
      </div>
    </div>
  );
};
