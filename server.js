const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 模擬的 BMW 車型資料
const bmwModels = [
  { series: '3 Series', model: '320i', fuelType: 'Petrol', basePrice: 40000 },
  { series: '3 Series', model: '330e', fuelType: 'Hybrid', basePrice: 45000 },
  { series: '5 Series', model: '520d', fuelType: 'Diesel', basePrice: 55000 },
  { series: 'X Series', model: 'X5', fuelType: 'Petrol', basePrice: 70000 },
];

// 查詢全部車型
app.get('/v1/models', (req, res) => {
  res.json(bmwModels);
});

// 查詢指定系列
app.get('/v1/models/:series', (req, res) => {
  const series = req.params.series.toLowerCase();
  const filtered = bmwModels.filter(m => m.series.toLowerCase().includes(series));
  res.json(filtered);
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`BMW API is running on port ${PORT}`);
});
