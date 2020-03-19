const fetch = require('node-fetch')

const { API_KEY, SUMMONER_NAME } = process.env

const BASE_URL = `https://na1.api.riotgames.com`

// https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName
const fetchSummoner = async () => {
  const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${SUMMONER_NAME}?api_key=${API_KEY}`
  const response = await fetch(url)
  return response.json()
}

// https://developer.riotgames.com/apis#champion-mastery-v4/GET_getAllChampionMasteries
const fetchChampionMasteriesBySummonerID = async (
  encryptedSummonerId: string
) => {
  const path = `/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}`
  const fetchURL = `${BASE_URL}${path}?api_key=${API_KEY}`
  const response = await fetch(fetchURL)
  return response.json()
}

export { fetchSummoner, fetchChampionMasteriesBySummonerID }
