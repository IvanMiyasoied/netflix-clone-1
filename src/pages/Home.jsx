import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from './Requests'


const Home = () => {
  return (
    <>
     <Main />
     <Row title='UpComming' fetchURL={requests.requestUpcoming}/>
     <Row title='Popular' fetchURL={requests.requestPopular}/>
     <Row title='Trending' fetchURL={requests.requestTrending}/>
     <Row title='TopRated' fetchURL={requests.requesrTopRated}/>
     <Row title='Genres' fetchURL={requests.requestGenres}/>
    </>
  )
}

export default Home