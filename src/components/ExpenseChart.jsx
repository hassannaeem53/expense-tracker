import React from 'react';
import {
  PieChart,
  ResponsiveContainer,
  Pie,
  Label,
  Cell,
  Tooltip,
} from 'recharts';

function ExpenseChart() {
  const data1 = [
    { label: 'Food', value: 400 },
    { label: 'Transportation', value: 300 },
    { label: 'Housing', value: 300 },
    { label: 'Entertainment', value: 200 },
    { label: 'Other', value: 278 },
  ];

  // Define custom colors for the chart
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            data={data1}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            fill="#8884d8"
            labelLine={false}
            animationBegin={0}
            isAnimationActive={true}
          >
            {data1.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
            <Label
              position="center"
              fill="#ffffff"
              fontSize={20}
              fontWeight="bold"
            >
              Expenses
            </Label>
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;
