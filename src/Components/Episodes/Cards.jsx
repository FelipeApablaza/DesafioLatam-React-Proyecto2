import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getEpisodesAction, cleanEpisodesAction, getUserAction } from '../../store/Episodes/actions'
import Card from './Card'
import axios from 'axios'


const url = 'https://rickandmortyapi.com/api/episode/'
const userUrl = 'http://localhost:3000/users/'

const Cards = props => {

    const { favoriteEpisodes, getEpisodes, cleanEpisodes, episodesPages, episodesLoading, episodesError, getUser } = props

    const [seeMoreButton, setSeeMoreButton] = useState(true)

    const [nextPageUrl, setNextPageUrl] = useState('')

    useEffect(() => {
        getUser(userUrl)
    }, [getUser])

    useEffect(() => {
        getEpisodes(url)
    }, [getEpisodes])

    useEffect(() => {
        if (episodesPages.length > 0) {
            const { next } = episodesPages.slice(-1)[0].info
            if (next !== '') {
                setSeeMoreButton(false)
                setNextPageUrl(next)
            } else {
                setSeeMoreButton(true)
                setNextPageUrl('')
            }
        }
        // console.log('effect1')
    }, [episodesPages])


    useEffect(() => {
        return () => cleanEpisodes()
    }, [cleanEpisodes])

    const handlerOnClick = () => {
        getEpisodes(nextPageUrl)
    }

    const userId = localStorage.getItem('id')

    const handlerOnFav = async (id) => {
      const thisUser = await axios.get(userUrl+userId) 
      if (thisUser.data.favoriteEpisodes.includes(id.toString())){
        const newFav = thisUser.data.favoriteEpisodes.filter((item) => item!==id.toString())
        thisUser.data.favoriteEpisodes = newFav
    } else {
          thisUser.data.favoriteEpisodes.push(id.toString())
      }
      await axios.put(userUrl+userId, {...thisUser.data})
      getUser(userUrl)
    }

    return (
        <div>
            <div>
                {
                    episodesPages.map((page) => page.results.map((item, index) => <Card key={index} episode={item} fav={favoriteEpisodes.includes((item.id).toString()) ? 'heart': 'unheart'} handler={handlerOnFav}/>))
                }
            </div>
            <div>
                {episodesLoading ? 'Loading' :
                    episodesError ? 'Error' :
                        <button disabled={seeMoreButton} onClick={handlerOnClick}>See More</button>}
            </div>
        </div >
    )

}

const mapStateToProps = ({ episodes }) => ({
    episodesPages: episodes.episodesPages,
    episodesLoading: episodes.episodesLoading,
    episodesError: episodes.episodesError,
    favoriteEpisodes: episodes.favoriteEpisodes
})


const mapDispatchToProps = dispatch => ({
    getEpisodes: payload => dispatch(getEpisodesAction(payload)),
    cleanEpisodes: payload => dispatch(cleanEpisodesAction(payload)),
    getUser: payload => dispatch(getUserAction(payload))

})

export default connect(mapStateToProps, mapDispatchToProps)(Cards)