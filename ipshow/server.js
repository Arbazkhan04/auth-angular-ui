const express = require('express');
const dns = require('dns');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS (if needed)
app.use(cors());

app.get('/resolve', (req, res) => {
    const domain = req.query.domain;

    if (!domain) {
        return res.status(400).send({ error: 'Domain name is required' });
    }

    // Resolve domain to IP address
    dns.resolve4(domain, (err, addresses) => {
        if (err) {
            return res.status(500).send({ error: 'Failed to resolve domain' });
        }
        res.send({ ip: addresses[0] });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
