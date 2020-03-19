import { fetchSummoner } from '../common/api'

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
