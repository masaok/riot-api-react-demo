import { API_KEY, BASE_URL } from './constants'

export const createFetchURL = (path: string) => {
  return `${BASE_URL}${path}?api_key=${API_KEY}`
}
