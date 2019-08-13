import axios from 'axios'

export const getCharacters = async url => await axios.get(url)

export const getUser = async url => await axios.get(url)