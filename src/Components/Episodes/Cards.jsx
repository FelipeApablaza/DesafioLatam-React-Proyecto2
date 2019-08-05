import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getEpisodesAction, cleanEpisodesAction } from '../../store/Episodes/actions'
import Card from './Card'

const url = 'https://rickandmortyapi.com/api/episode/'

const Cards = props => {

    const { getEpisodes, cleanEpisodes, episodesPages, episodesLoading, episodesError } = props

    const [seeMoreButton, setSeeMoreButton] = useState(true)

    const [nextPageUrl, setNextPageUrl] = useState('')

    useEffect(() => {
        getEpisodes(url)
        // console.log('effect2')
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

    return (
        <div>
            <div>
                {
                    episodesPages.map((page) => page.results.map((item, index) => <Card key={index} episode={item} />))
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
    episodesError: episodes.episodesError
})


const mapDispatchToProps = dispatch => ({
    getEpisodes: payload => dispatch(getEpisodesAction(payload)),
    cleanEpisodes: payload => dispatch(cleanEpisodesAction(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards)