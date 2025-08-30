const express = require('express');
const app = express();
const staticRoute = require('./routes/staticRouter')
const path = require('path')
const port = 8001;

const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const URL = require('./models/url');
// Parse JSON request bodies
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static('./views'))


// routes
app.use('/url', urlRoute);
app.use('/', staticRoute);

app.get('/test', async (req, res) => {
    const allUrls = await URL.find({})
    // const myHtml = `
    // <html>
    // <body>
    // <ul>
    // ${allUrls.map((url) => `<li>${url.shortUrl} -->  ${url.redirectUrl} ---> ${url.visitHistory.length}</li> `).join('')}
    // </ul>
    
    // </body>
    // </html>
    // `
    return res.render('home',{
        urls:allUrls
    })
    // res.send('<H1>Hello folkes</h1>')
})

app.get('/url/:shortId', async (req, res) => {
    try {
        const shortId = req.params.shortId;

        const entry = await URL.findOneAndUpdate(
            { shortUrl: shortId },
            { $push: { visitHistory: { timestamp: Date.now() } } },
            { new: true }
        );

        if (!entry) {
            return res.status(404).send("Short URL not found");
        }

        return res.redirect(entry.redirectUrl);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});




// Connect to MongoDB
connectToMongoDB("mongodb://127.0.0.1:27017/shorturl")
    .then(() => console.log("MongoDB connected..."));

// Start the server
app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log(`Server started at http://localhost:${port}`);
});
