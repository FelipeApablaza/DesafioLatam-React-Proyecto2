import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getEpisodesAction } from '../../store/Episodes/actions'

const url = 'https://rickandmortyapi.com/api/episode/'

const List = props => {

    const { getEpisodes, episodes, episodesLoading, episodesError } = props

    useEffect(() => {
        getEpisodes(url)
    }, [getEpisodes])


    if (episodesLoading) return <div>Loading</div>
    else if (episodesError) return <div>Error</div>
    else if (!episodesError) return <div>Success</div>
    else return <div>OK</div>

}

const mapStateToProps = state => ({
    episodes: state.episodes.episodes,
    episodesLoading: state.episodes.episodesLoading,
    episodesError: state.episodes.episodesError
})


const mapDispatchToProps = dispatch => ({
    getEpisodes: payload => dispatch(getEpisodesAction(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)