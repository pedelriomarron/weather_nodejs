
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('./yargs/yargs').argv

const getInfo = async (direccion) => {

    try {
        const l = await lugar.getLugarLatLon(argv.direccion)
        const c = await clima.getClima(l.lat, l.lon)
        console.log(`La temperatura en ${l.direccion} es de ${c}º`)
        return { lugar: l, temperatura: c }

    } catch (error) {
        return `No se pudo encontrar`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(err => console.log(err))
