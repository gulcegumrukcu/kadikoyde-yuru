const express = require('express');
const app = express();
const port = 3000;

// Define a route to fetch the credits information
app.get('/credits', (req, res) => {
    const creditsInfo = {
        title1: 'fikir/kod/görseller/ses',
        paragraph1: 'gülce g.',
        title2: 'senaryo',
        paragraph2: 'yiğit e.',
        title3: 'tam destek',
        paragraph3: 'alper ü.',
        paragraph4: 'pelin t.',
        paragraph5: 'tayfun e.',
    };
    // Set the Access-Control-Allow-Origin header to allow requests from your frontend origin
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.json(creditsInfo);
});

// Placeholder route handler for the root URL
app.get('/', (req, res) => {
    res.send('Hello World!'); // Placeholder response
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
