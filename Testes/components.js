


const storage = require('./storage.js');
const frontEndPath = path.resolve (__dirname, '..', 'frontend', 'index.html');
const port = 5000;

function is404(res) {
    res.writeHead (404);
    res.write ('404 Not found');
    res.end();
}

const router = {
    get: {
        '/': (_req, res) => {
            const data = storage.read();
            res.setHeader('Acess-Control-Allow-Origin', '*');
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(data));
        }
    },

    post: {
        '/': (_req, res) => {
            const chunks = [];
            req.on('data', chunk => chunks.push(chunk.toString()))
        }
    }
}