import express from 'express';
import ReactDOMServer from 'react-dom/server';
import App from '../client/App.js';
const app = express();
const port = 3000;

app.use(express.static('client/dist'));

const rendered = ReactDOMServer.renderToString(App)
const html = `
<html>
    <head>
        <title>React SSR</title>
    </head>
    <body>
        <div id="app">${rendered}</div>
        <script src="app.js"></script>
    </body>
</html>
`;

app.get('/', (req, res) => res.send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));