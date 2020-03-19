import {
  fetchSummoner,
  fetchChampionMasteriesBySummonerID,
  fetchTotalChampionMasteryBySummonerID
} from '../common/api'

interface Summoner {
  id: string
  name: string
}

let summoner: Summoner

beforeEach(async () => {
  summoner = await fetchSummoner()
})

// https://developer.riotgames.com/apis#lol-status-v3/GET_getShardData
describe('fetchSummoner', () => {
  it('fetches properly', async () => {
    expect(typeof summoner.id).toBe('string')
    expect(summoner.name).toEqual(process.env.SUMMONER_NAME)
  })
})

// https://developer.riotgames.com/apis#champion-mastery-v4/GET_getAllChampionMasteries
describe('fetchChampionMasteriesBySummonerID', () => {
  it('fetches properly', async () => {
    const masteries = await fetchChampionMasteriesBySummonerID(summoner.id)
    // console.log(masteries)

    expect(masteries instanceof Array).toBeTruthy()
    if (masteries.length > 0) {
      expect(isNaN(masteries[0].championId)).toBeFalsy()
      expect(typeof masteries[0].championId === 'number').toBeTruthy()
      expect(typeof masteries[0].championPoints === 'number').toBeTruthy()
    }
  })
})

// https://developer.riotgames.com/apis#champion-mastery-v4/GET_getAllChampionMasteries
describe('fetchTotalChampionMasteryBySummonerID', () => {
  it('fetches properly', async () => {
    const masteryLevel = await fetchTotalChampionMasteryBySummonerID(
      summoner.id
    )
    // console.log(masteryLevel)

    expect(typeof masteryLevel === 'number').toBeTruthy()
  })
})

// TODO: Refactor this file into modules that match the Riot API Documentation breakdown
