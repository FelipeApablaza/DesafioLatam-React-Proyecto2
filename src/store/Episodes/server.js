import axios from 'axios'

export const getEpisodes = async url => await axios.get(url)

export const getUser = async url => await axios.get(url)