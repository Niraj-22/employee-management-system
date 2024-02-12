import { useEffect, useState } from "react";
import PrivateLayOut from "./Layout/PrivateLayOut";
import { AgChartsReact } from "ag-charts-react";
import { useSelector } from "react-redux";

const DashBoard = () => {
  const [completedCounter, setCompletedCounter] = useState(0);
  const [ongoingCounter, setOngoingCounter] = useState(0);
  const [onholdCounter, setOnholdCounter] = useState(0);
  const [options, setOptions] = useState();

  const taskData = useSelector((state) => state.task[0]) || [];

  useEffect(() => {
    taskData.map((i) => {
      if (i.select == "COMPLETED") {
        setCompletedCounter((prev) => prev + 1);
      } else if (i.select == "ONGOING") {
        setOngoingCounter((prev) => prev + 1);
      } else if (i.select == "ONHOLD") {
        setOnholdCounter((prev) => prev + 1);
      }
    });
  }, []);
  useEffect(() => {
    const getData = [
      { asset: "Completed", amount: completedCounter, yield: 6 },
      { asset: "Ongoing", amount: ongoingCounter, yield: 9 },
      { asset: "On hold", amount: onholdCounter, yield: 10 },
    ];
    setOptions({
      data: getData,
      title: {
        text: "Task Composition",
      },
      series: [
        {
          type: "pie",
          angleKey: "amount",
          radiusKey: "yield",
          calloutLabelKey: "asset",
          sectorLabelKey: "amount",
          sectorLabel: {
            color: "white",
            fontWeight: "bold",
          },
        },
      ],
    });
  }, [completedCounter, ongoingCounter, onholdCounter]);

  return (
    <div>
      <PrivateLayOut />
      <p>
        <i>Dashboard</i>
      </p>
      {completedCounter > 0 || ongoingCounter > 0 || onholdCounter > 0 ? (
        <AgChartsReact options={options} />
      ) : (
        "No data to Visualize"
      )}
    </div>
  );
};

export default DashBoard;
