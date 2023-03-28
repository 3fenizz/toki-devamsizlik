const express = require('express');
const app = express();

app.listen(3000, console.log('Bağlantı kuruldu!'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { title: 'Anasayfa' });
});