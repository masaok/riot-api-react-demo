const fetch = require('node-fetch')

const { API_KEY } = process.env

const BASE_URL = `https://na1.api.riotgames.com`

// https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntries
const fetchEntries = async (
  queue: string = 'RANKED_SOLO_5x5',
  tier: string = 'IRON',
  division: string = 'IV'
) => {
  // const path = `/lol/champion-mastery/v4/scores/by-summoner/${encryptedSummonerId}`
  const path = `/lol/league/v4/entries/${queue}/${tier}/${division}`
  const fetchURL = `${BASE_URL}${path}?api_key=${API_KEY}`
  const response = await fetch(fetchURL)
  return response.json()
}

export { fetchEntries }
