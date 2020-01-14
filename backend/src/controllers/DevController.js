const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

/* 
 index: (Lista)
 show: (Único registro)           
 store: (Criar) 
 update: (Alterar)
 destroy: (Deletar)
 */
module.exports = {
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs)
    },
    

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body

        // Pedindo usuarios ao github com axios
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
        // Continua depois que o await retornar algo

        const { name = login, avatar_url, bio } = apiResponse.data

        const techsArray = parseStringAsArray(techs)

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }

        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        })

        return response.json(dev)
    },

    async update() {

    },

    async destroy() {
        
    }
}
