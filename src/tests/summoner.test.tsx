import { fetchSummoner } from '../common/api'
// const fetch = require('node-fetch')

// const { API_KEY } = process.env

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

// export {}
