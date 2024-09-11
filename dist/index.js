import http from 'http';
import app from './app.js';
const server = http.createServer(app);
const port = process.env.PORT || 5000;
app.get('/', (_req, res) => {
    res.send(`Express + TypeScript Server | anagrams api is running on port ${port}`);
});
server.listen(port, () => console.log(`anagrams api is running on port ${port}`));
