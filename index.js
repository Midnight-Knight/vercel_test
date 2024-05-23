const express = require('express');

const index = express();
const PORT = process.env.PORT || 8080;


index.get('/', (req, res) => {
    res.send({message: "hello world"});
});

index.listen(PORT, () => {
    console.log(`Сервер запущен на порту: ${PORT}`);
});