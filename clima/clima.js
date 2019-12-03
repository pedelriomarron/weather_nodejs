const axios = require('axios');


const getClima = async (lat, lon) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e36fd04d4b14a08bfd11b0828c75f55d&units=metric`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}