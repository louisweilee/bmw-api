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

// ✅ 新增 Compare 兩台車型
app.get('/v1/compare/:model1/:model2', (req, res) => {
  const { model1, model2 } = req.params;
  res.json({
    model1,
    model2,
    differences: [
      { feature: '動力類型', model1: '汽油', model2: '油電混合' },
      { feature: '基本售價', model1: '40,000 美元', model2: '45,000 美元' }
    ]
  });
});

// ✅ 新增 Configurator 查詢車型配備
app.get('/v1/configurator/:model', (req, res) => {
  const { model } = req.params;
  res.json({
    model,
    colors: ['黑色', '白色', '藍色'],
    packages: ['科技套件', '駕駛輔助套件'],
    options: ['全景天窗', 'Harman Kardon 音響']
  });
});

// 最後保持原本的 listen
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
