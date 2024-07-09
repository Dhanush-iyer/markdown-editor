import express from 'express';
import { marked } from 'marked';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/convert', (req, res) => {
    const { markdown } = req.body;
    if (markdown === undefined || markdown === null) {
        return res.status(400).json({ error: 'Markdown input is required' });
    }
    const html = marked(markdown);
    res.json({ html });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
