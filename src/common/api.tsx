
const fetch = require('node-fetch')

const { API_KEY, SUMMONER_NAME } = process.env

// https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName
const fetchSummoner = async () => {
    const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${SUMMONER_NAME}?api_key=${API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

export {
    fetchSummoner
}