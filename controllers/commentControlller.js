module.exports = {
    commentList: (req, res)=> {
        let q = "select * from comment;"
        db.query(q, function (error, results) {
            if (error) {
                res.redirect('/')
            }
            res.json(results)
        });
    },

    commentDetails: (req, res) => {
        
        let q = "select * from comment where ID=" + req.params.commentId;
        db.query(q, function (error, results) {
            if (error) {
                res.send(error)
            }
            res.json(results)
        });
        
    }
}