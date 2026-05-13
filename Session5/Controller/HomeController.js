//  these controller are real request handler functions

function HomeResponse (req, res) {
    res.send("Express js sWelcomes you to the website change things here");
}

function AboutResponse (req, res) {
    res.send("About Page : utkarsh create this page email: thakurutkarash2@gmail.com");
}

module.exports = { HomeResponse, AboutResponse }