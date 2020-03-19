import {
  fetchSummoner,
  fetchChampionMasteriesBySummonerID
} from '../common/api'

let summoner: { id: string }

beforeEach(async () => {
  summoner = await fetchSummoner()
})

// https://developer.riotgames.com/apis#lol-status-v3/GET_getShardData
describe('fetchSummoner', () => {
  it('fetches properly', async () => {
    const summoner = await fetchSummoner()
    // console.log(summoner)

    const summonerId = summoner.id
    expect(typeof summonerId).toBe('string')
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
