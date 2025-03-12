import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    res.render('index.ejs', { content: 'Select any thing from above' });
});

app.get('/get-classes', async (req, res) => {
    const result = await axios.get('https://www.dnd5eapi.co/api/2014/classes');
    res.render('index.ejs', { content: result.data, endPoint: '/get-classes' });
});

app.get('/get-features', async (req, res) => {
    const result = await axios.get('https://www.dnd5eapi.co/api/2014/features');
    res.render('index.ejs', {
        content: result.data,
        endPoint: '/get-features',
    });
});

app.get('/get-monsters', async (req, res) => {
    const result = await axios.get('https://www.dnd5eapi.co/api/2014/monsters');
    res.render('index.ejs', {
        content: result.data,
        endPoint: '/get-monsters',
    });
});

app.get('/get-spells', async (req, res) => {
    const result = await axios.get('https://www.dnd5eapi.co/api/2014/spells');
    res.render('index.ejs', { content: result.data, endPoint: '/get-spells' });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
