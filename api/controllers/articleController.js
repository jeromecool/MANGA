module.exports = {
    get: async(req, res) => {
        res.render('article', {
            page: res.req.url
        })
    }
}