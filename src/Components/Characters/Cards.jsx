import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getCharactersAction, cleanCharactersAction } from '../../store/Characters/actions'
import Card from './Card'

const url = 'https://rickandmortyapi.com/api/character/'

const Cards = props => {

    const { getCharacters, cleanCharacters, charactersPages, charactersLoading, charactersError } = props

    const [seeMoreButton, setSeeMoreButton] = useState(true)

    const [nextPageUrl, setNextPageUrl] = useState('')

    useEffect(() => {
        getCharacters(url)
        // console.log('effect2')
    }, [getCharacters])

    useEffect(() => {
        if (charactersPages.length > 0) {
            const { next } = charactersPages.slice(-1)[0].info
            if (next !== '') {
                setSeeMoreButton(false)
                setNextPageUrl(next)
            } else {
                setSeeMoreButton(true)
                setNextPageUrl('')
            }
        }
        // console.log('effect1')
    }, [charactersPages])


    useEffect(() => {
        return () => cleanCharacters()
    }, [cleanCharacters])

    const handlerOnClick = () => {
        getCharacters(nextPageUrl)
    }

    return (
        <div>
            <div>
                {
                    charactersPages.map((page) => page.results.map((item, index) => <Card key={index} character={item} />))
                }
            </div>
            <div>
                {charactersLoading ? 'Loading' :
                    charactersError ? 'Error' :
                        <button disabled={seeMoreButton} onClick={handlerOnClick}>See More</button>}
            </div>
        </div >
    )

}

const mapStateToProps = ({ characters }) => ({
    charactersPages: characters.charactersPages,
    charactersLoading: characters.charactersLoading,
    charactersError: characters.charactersError
})


const mapDispatchToProps = dispatch => ({
    getCharacters: payload => dispatch(getCharactersAction(payload)),
    cleanCharacters: payload => dispatch(cleanCharactersAction(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards)