import React from "react";
import {
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Test 1",
    uv: 80,
    test: 80,
    Oops: 48,
    WPF: 60,
    "ASP.NET MVC": 40,
  },
  {
    name: "Test 2",
    uv: 60,
    test: 60,
    Oops: 44.2,
    WPF: 40,
    "ASP.NET MVC": 36,
  },
  {
    name: "Test 3",
    uv: 40,
    test: 98,
    Oops: 45.8,
    WPF: 55.6,
    "ASP.NET MVC": 30,
  },
  {
    name: "Test 4",
    uv: 55.6,
    test: 78.2,
    Oops: 40,
    WPF: 37.8,
    "ASP.NET MVC": 34,
  },
  {
    name: "Test 5",
    uv: 37.8,
    test: 96,
    Oops: 43.6,
    WPF: 47.8,
    "ASP.NET MVC": 28,
  },
  {
    name: "Test 6",
    uv: 47.8,
    test: 76,
    Oops: 50,
    WPF: 69.8,
    "ASP.NET MVC": 42,
  },
  {
    name: "Test 7",
    uv: 69.8,
    test: 86,
    Oops: 42,
    WPF: 80,
    "ASP.NET MVC": 44,
  },
];

const ColumnLineChart = () => {
  return (
    <div className="max-w-full px-8 border border-gray-300 rounded-sm shadow-md">
      <h2 className="text-3xl font-bold mb-8 mt-5 text-center text-gray-800">
        My Performance
      </h2>

      {/* Select dropdowns */}
      <div className="flex justify-between mb-5">
        <div className="w-1/2 pr-2">
          <label className="block mb-1 text-gray-600">
            Technology
            <select className="w-full p-2 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200">
              <option value="DotNet">DotNet</option>
              <option value="Java">Java</option>
            </select>
          </label>
        </div>

        <div className="w-1/2 pl-2">
          <label className="block mb-1 text-gray-600">
            Module
            <select className="w-full p-2 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200">
              <option value="DotNet">DotNet</option>
              <option value="Java">Java</option>
            </select>
          </label>
        </div>
      </div>

      <div className="flex justify-between mb-5">
        <div className="w-1/2 pr-2">
          <label className="block mb-1 text-gray-600">
            Topic
            <select className="w-full p-2 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200">
              <option value="Technology">Technology</option>
              <option value="Science">Science</option>
            </select>
          </label>
        </div>

        <div className="w-1/2 pl-2">
          <label className="block mb-1 text-gray-600">
            Subtopic
            <select className="w-full p-2 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200">
              <option value="Programming">Programming</option>
              <option value="Database">Database</option>
            </select>
          </label>
        </div>
      </div>

      <div>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
            <Tooltip
              formatter={(value) => `${value}%`}
              contentStyle={{
                borderRadius: "6px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
                padding: "12px 16px",
                border: "1px solid #e0e0e0",
              }}
              itemStyle={{
                display: "flex",
                alignItems: "center",
                marginBottom: "4px",
              }}
              labelStyle={{ fontWeight: "bold", marginBottom: "5px" }}
              nameStyle={{ marginRight: "8px" }}
              valueStyle={{ fontWeight: "bold" }}
            />
            <Legend
              wrapperStyle={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                fontSize: "14px",
                color: "#666666",
              }}
            >
              <div className="flex items-center mx-2">
                <div className="w-2.5 h-2.5 bg-[#0759856f] mr-1.5 rounded"></div>
                test
              </div>
              <div className="flex items-center mx-2">
                <div className="w-2.5 h-2.5 bg-orange-500 mr-1.5 rounded"></div>
                Oops
              </div>
              <div className="flex items-center mx-2">
                <div className="w-2.5 h-2.5 bg-green-800 mr-1.5 rounded"></div>
                WPF
              </div>
              <div className="flex items-center mx-2">
                <div className="w-2.5 h-2.5 bg-red-500 mr-1.5 rounded"></div>
                ASP.NET MVC
              </div>
            </Legend>
            <Bar dataKey="test" fill="#1d42a2" />
            <Line
              type="monotone"
              dataKey="Oops"
              stroke="#ff7300"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="WPF"
              stroke="#387908"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="ASP.NET MVC"
              stroke="#ff0000"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ColumnLineChart;
