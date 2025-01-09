const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(404).json({ error: "url is required" });

    const shortUrl = shortid.generate(); // Use `generate` for creating a short ID
    try {
        const newUrl = await URL.create({
            shortUrl: shortUrl, // Matches schema field
            redirectUrl: body.url, // Matches schema field
            visitHistory: [], // Matches schema field
        });
        return res.render("home",{
            id:shortUrl
        })
        return res.json({ id: newUrl.shortUrl });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


async function handleGetAnalytics(req,res){
    const shortid = req.params.shortid;
    const result = await URL.findOne({shortUrl: shortid})
    return res.json({totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}

module.exports = {
    handleGenerateShortUrl,
    handleGetAnalytics
};
