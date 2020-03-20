import { fetchEntries } from './LeagueV4'

interface Summoner {
  id: string
  name: string
}

// https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntries
describe('fetchEntries', () => {
  it('fetches properly', async () => {
    const entries = await fetchEntries()
    // console.log(entries[0])
    expect(entries).toBeInstanceOf(Array)
    expect(entries.length).toBeGreaterThan(0)
    expect(entries[0].queueType).toEqual('RANKED_SOLO_5x5')
    expect(entries[0].tier).toEqual('IRON')
    expect(entries[0].rank).toEqual('IV')
  })
})
