module.exports = {
    get: (req, res) => {
        res.render('reference', {
            page: res.req.url
        })
    }
}