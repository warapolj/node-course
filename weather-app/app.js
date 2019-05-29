const geocode = require('./utils/geocode')
const forecast = require('./utils/forecase')

const address = process.argv[2]

if(!address) {
    console.log('Please provide an address.')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if(error) return console.log(error)
    
        const units = 'si'
    
        forecast(latitude, longitude, units, (error, forecastData) => {
            if(error) return console.log(error)
    
            console.log(location)
            console.log(forecastData)
        })
    })
}

