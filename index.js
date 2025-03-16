import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    res.render('index.ejs');
});

app.get('/get-classes', async (req, res) => {
    const result = await axios.get('https://www.dnd5eapi.co/api/2014/classes').then((res) => res.data);
    res.render('index.ejs', { content: result.results, endPoint: '/get-classes' });
});

app.get('/get-features', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 30;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = await axios.get('https://www.dnd5eapi.co/api/2014/features').then((res) => res.data);
    const limitedResults = result.results.slice(startIndex, endIndex);
    res.render('index.ejs', {
        content: limitedResults,
        count: result.count,
        endPoint: '/get-features',
    });
});

app.get('/get-monsters', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 30;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const result = await axios.get('https://www.dnd5eapi.co/api/2014/monsters').then((res) => res.data);
    const limitedResults = result.results.slice(startIndex, endIndex);
    res.render('index.ejs', {
        content: limitedResults,
        count: result.count,
        endPoint: '/get-monsters',
    });
});

app.get('/get-spells', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 30;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const result = await axios.get('https://www.dnd5eapi.co/api/2014/spells').then((res) => res.data);
    const limitedResults = result.results.slice(startIndex, endIndex);
    res.render('index.ejs', {
        content: limitedResults,
        count: result.count,
        endPoint: '/get-spells',
    });
});

app.get('/get-classes/:id', async (req, res) => {
    const id = req.params.id;
    const result = await axios.get('https://www.dnd5eapi.co/api/2014/classes/' + id);
    res.render('classes.ejs', { classesData: result.data });
});

app.get('/get-features/:id', async (req, res) => {
    const id = req.params.id;
    const result = await axios.get('https://www.dnd5eapi.co/api/2014/features/' + id);
    res.render('features.ejs', { featuresData: result.data });
});

app.get('/get-monsters/:id', async (req, res) => {
    const id = req.params.id;
    const result = await axios.get('https://www.dnd5eapi.co/api/2014/monsters/' + id);
    res.render('monsters.ejs', { monstersData: result.data });
});

app.get('/get-spells/:id', async (req, res) => {
    const id = req.params.id;
    const result = await axios.get('https://www.dnd5eapi.co/api/2014/spells/' + id);
    res.render('spells.ejs', { spellsData: result.data });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
