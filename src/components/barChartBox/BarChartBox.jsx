import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./BarChartBox.scss";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

const BarChartBox = (props) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ backgroundColor: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Define PropTypes for type checking
BarChartBox.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  chartData: PropTypes.array.isRequired,
};

export default BarChartBox;
