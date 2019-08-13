import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getCharactersAction, cleanCharactersAction, getUserAction } from '../../store/Characters/actions'
import Card from './Card'
import axios from 'axios'

const url = 'https://rickandmortyapi.com/api/character/'
const userUrl = 'http://localhost:3000/users/'

const Cards = props => {

    const { favoriteCharacters, getCharacters, cleanCharacters, charactersPages, charactersLoading, charactersError, getUser } = props

    const [seeMoreButton, setSeeMoreButton] = useState(true)

    const [nextPageUrl, setNextPageUrl] = useState('')

    useEffect(() => {
        getUser(userUrl)
    }, [getUser])

    useEffect(() => {
        getCharacters(url)
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

    const userId = localStorage.getItem('id')

    const handlerOnFav = async (id) => {
      const thisUser = await axios.get(userUrl+userId) 
      if (thisUser.data.favoriteCharacters.includes(id.toString())){
        const newFav = thisUser.data.favoriteCharacters.filter((item) => item!==id.toString())
        thisUser.data.favoriteCharacters = newFav
    } else {
          thisUser.data.favoriteCharacters.push(id.toString())
      }
      await axios.put(userUrl+userId, {...thisUser.data})
      getUser(userUrl)
    }

    return (
        <div>
            <div style={{ textAlign: 'justify' }} >
                {
                    charactersPages.map((page) => page.results.map((item, index) => <Card key={index} character={item} fav={favoriteCharacters.includes((item.id).toString()) ? 'heart': 'unheart'} handler={handlerOnFav}/>))
                }
            </div>
            <div>
                {charactersLoading ? 'Loading' :
                    charactersError ? 'Error' :
                        <button style={{ display: 'inline-block', margin: 'auto auto'}}disabled={seeMoreButton} onClick={handlerOnClick}>See More</button>
                }
            </div>
        </div >
    )

}

const mapStateToProps = ({ characters }) => ({
    charactersPages: characters.charactersPages,
    charactersLoading: characters.charactersLoading,
    charactersError: characters.charactersError,
    favoriteCharacters: characters.favoriteCharacters
})


const mapDispatchToProps = dispatch => ({
    getCharacters: payload => dispatch(getCharactersAction(payload)),
    cleanCharacters: payload => dispatch(cleanCharactersAction(payload)),
    getUser: payload => dispatch(getUserAction(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards)