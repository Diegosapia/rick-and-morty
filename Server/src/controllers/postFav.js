const { Favorite }= require('../DB_connection')


const postFav = async (req, res)=> {
    try {
        const {name, origin, status, image, species, gender} = req.body;
        if ( !name || !origin || !status || !image || !species || !gender ) {
            return res.status(401).send("Faltan datos");
        }
        const favoriteData = {
            name,
            origin,
            status,
            image,
            species,
            gender,
            isfav :true,
            
        };
         await Favorite.findOrCreate({where:  favoriteData})
    
         const allFavorites = await Favorite.findAll()
        return res.status(200).json(allFavorites)


        } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

module.exports = {
    postFav
}