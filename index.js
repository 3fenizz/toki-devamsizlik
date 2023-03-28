const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log('Bağlantı kuruldu!'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Anasayfa' });
});