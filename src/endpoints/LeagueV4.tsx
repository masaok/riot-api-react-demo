import { createFetchURL } from '../common/helpers'

const fetch = require('node-fetch')

// https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntries
const fetchEntries = async (
  queue: string = 'RANKED_SOLO_5x5',
  tier: string = 'IRON',
  division: string = 'IV'
) => {
  const path = `/lol/league/v4/entries/${queue}/${tier}/${division}`
  const fetchURL = createFetchURL(path)
  const response = await fetch(fetchURL)
  return response.json()
}

export { fetchEntries }
