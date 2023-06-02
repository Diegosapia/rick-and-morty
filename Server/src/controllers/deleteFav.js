const {Favorite} = require('../DB_connection');

const deleteFav = async (req, res)=> {
try {
    const {id} = req.params
    await Favorite.destroy({where : {id} })

return Favorite;

} catch (error) {
    return res.status(500).send({error: error.message})
}


}
module.exports = {
    deleteFav
}