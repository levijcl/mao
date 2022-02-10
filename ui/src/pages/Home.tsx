import { styled } from '@mui/material'
import graphql from 'babel-plugin-relay/macro'
import { loadQuery, usePreloadedQuery } from 'react-relay'
import RelayEnvironment from '../relay/RelayEnvironment'
import CreatePostBox from '../wall/CreatePostBox'
import Wall from '../wall/Wall'
import { HomeQuery as HomeQueryType } from './__generated__/HomeQuery.graphql'

const HomeQuery = graphql`
  query HomeQuery {
    ...Wall_root
  }
`

const Root = styled('div')({
  padding: '1rem',
})

const preloadedQuery = loadQuery<HomeQueryType>(RelayEnvironment, HomeQuery, {})

function Home() {
  const data = usePreloadedQuery(HomeQuery, preloadedQuery)

  return (
    <Root>
      <CreatePostBox />
      <Wall root={data} />
    </Root>
  )
}

export default Home
