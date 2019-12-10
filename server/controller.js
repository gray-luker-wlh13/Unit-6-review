module.exports = {
    getPosts: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');
        db.get_posts(id).then(posts => {
            res.status(200).send(posts)
        })
        .catch(err => res.status(500).send(err))
    },

    addPosts: (req, res) => {
        const db = req.app.get('db');
        const {image_url} = req.body;
        const {id} = req.params;
        
        db.create_post([id, image_url]).then(post => {
            res.status(200).send(post)
        })
        .catch(err => res.status(500).send(err))
    }
}