import express from 'express';

const PORT = 3000;
const expressApp = express();

expressApp.post('/upload', (req, res) => {
    // Content-Type: multipart/form-data;boundary=------------------------d74496d66958873e
    console.log(req.headers['content-type']);

    const boundary = req.headers['content-type'].split('boundary=')[1];

    let body = '';
    req.on('data', (chunk) => (body += chunk));

    req.on('end', () => {
        body.split(boundary).map((data, index) => console.log(index, data));

        res.sendStatus(200);
    });
});

expressApp.listen(PORT, () =>
    console.log(`Servidor levantado en el puerto ${PORT}`)
);
