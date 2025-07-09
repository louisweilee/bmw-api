const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/v1/models', (req, res) => {
  res.json([
    { series: "3 Series", model: "320i", fuelType: "汽油", basePrice: 40000 },
    { series: "3 Series", model: "330e", fuelType: "油電混合", basePrice: 45000 },
    { series: "5 Series", model: "520i", fuelType: "汽油", basePrice: 52000 }
  ]);
});

app.get('/v1/models/:series', (req, res) => {
  const series = req.params.series;
  const models = {
    "3": [
      { model: "320i", fuelType: "汽油", basePrice: 40000 },
      { model: "330e", fuelType: "油電混合", basePrice: 45000 }
    ],
    "5": [
      { model: "520i", fuelType: "汽油", basePrice: 52000 }
    ]
  };
  res.json(models[series] || []);
});

app.get('/v1/news', (req, res) => {
  res.json([
    { title: "全新 BMW iX3 正式上市！", date: "2025-07-01" },
    { title: "BMW ConnectedDrive 功能升級", date: "2025-06-15" }
  ]);
});

app.get('/v1/dealers', (req, res) => {
  res.json([
    { name: "台北 BMW 旗艦展示中心", address: "台北市信義區" },
    { name: "高雄 BMW 展示中心", address: "高雄市左營區" }
  ]);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
