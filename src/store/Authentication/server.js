import axios from 'axios'

export const getUsers = async url => await axios.get(url)
export const putUser = async ({ url, name, email }) => await axios.post(url, {
    "name": name,
    "email": email,
    "favoriteEpisodes": [],
    "episodesWatched": [],
    "favoriteCharacters": []
})