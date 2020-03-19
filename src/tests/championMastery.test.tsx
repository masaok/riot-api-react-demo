import {
  fetchSummoner,
  fetchChampionMasteriesBySummonerID
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
  })
})
