const axios = require('axios');





let getLugarLatLon = async (dir) => {

    const encodeCity = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeCity}`,
        headers: { 'X-RapidAPI-key': '83fcb17d2fmshd325833d0519b7fp15dfdejsn0faf774c489f' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0]
    const direccion = data.name
    const lat = data.lat
    const lon = data.lon


    return {
        direccion,
        lat,
        lon
    }


}

module.exports = {
    getLugarLatLon
}