import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Chart data for each month
const chartData = [
  { month: "January", desktop: 50, mobile: 50 },
];

// Normalize the data so that each bar is 100%
const normalizedData = chartData.map((data) => {
  const total = data.desktop + data.mobile;
  return {
    month: data.month,
    desktop: (data.desktop / total) * 100,
    mobile: (data.mobile / total) * 100,
  };
});

// Chart configuration with colors
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#1563eb", // Blue color for desktop
  },
  mobile: {
    label: "Mobile",
    color: "#ff0000", // Red color for mobile
  },
};

export default function HmgHorizontalChart() {
  return (
    <ChartContainer config={chartConfig} className="w-full h-16">
      <BarChart
        layout="vertical"
        width={700} // Adjust the width as needed
        height={300} // Adjust the height as needed
        data={normalizedData}
        margin={{ top: -16, right: 0, left: -60, bottom: 0}}
      >
        <XAxis
          type="number"
          domain={[0, 100]} // The X-axis will show the percentage (0-100%)
          // tickFormatter={(tick) => `${tick}%`}
          tick={false}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          type="category"
          dataKey="month"
          tickLine={false}
          axisLine={false}
        />
        <Bar
          dataKey="desktop"
          stackId="a"
          fill={chartConfig.desktop.color} // Blue color for desktop
        />
        <Bar
          dataKey="mobile"
          stackId="a"
          fill={chartConfig.mobile.color} // Red color for mobile
        />
      </BarChart>
    </ChartContainer>
  );
}
