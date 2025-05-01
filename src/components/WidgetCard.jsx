import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { BarChart4 } from "lucide-react";

const COLORS = [
  "#0073FF",
  "#E4EAFE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF4D4D",
];

const pieDataSamples = {
  "Cloud Accounts": [
    { name: "Connected", value: 2 },
    { name: "Not Connected", value: 2 },
  ],
  "Cloud Account Risk Assessment": [
    { name: "Failed", value: 1689 },
    { name: "Warning", value: 681 },
    { name: "Not available", value: 36 },
    { name: "Passed", value: 7253 },
  ],
};

const WidgetCard = ({ title, category }) => {
  const isCSPM = category === "cspm";
  const data = pieDataSamples[title];

  if (isCSPM && data) {
    return (
      <div className="rounded-2xl bg-white p-6 w-full shadow-sm min-h-[200px]">
        <h3 className="font-semibold text-sm">{title}</h3>
        <div className="flex items-center justify-between mt-4">
          <ResponsiveContainer width={120} height={120}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                outerRadius={50}
                innerRadius={35}
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label
                  position="center"
                  content={({ viewBox }) => {
                    const { cx, cy } = viewBox;
                    const total = data.reduce((acc, cur) => acc + cur.value, 0);
                    return (
                      <>
                        <text
                          x={cx}
                          y={cy - 6}
                          textAnchor="middle"
                          dominantBaseline="central"
                          className="text-sm font-semibold"
                        >
                          {total}
                        </text>
                        <text
                          x={cx}
                          y={cy + 10}
                          textAnchor="middle"
                          dominantBaseline="central"
                          className="text-xs text-gray-500"
                        >
                          Total
                        </text>
                      </>
                    );
                  }}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="text-sm space-y-1">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span>
                  {item.name} ({item.value})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-2xl bg-white p-4 w-full shadow-sm">
      <h3 className="font-semibold text-sm">{title}</h3>
      <div className="flex flex-col items-center justify-center mt-8">
        <BarChart4 className="w-8 h-8 text-gray-400" />
        <p className="text-sm text-gray-500 mt-2">No Graph data available!</p>
      </div>
    </div>
  );
};

export default WidgetCard;
