import graphql from 'babel-plugin-relay/macro'
import { loadQuery, usePreloadedQuery } from 'react-relay'
import RelayEnvironment from './relay/RelayEnvironment'
import { AppQuery as AppQueryType } from './__generated__/AppQuery.graphql'

const AppQuery = graphql`
  query AppQuery {
    helloWorld
  }
`

const preloadedQuery = loadQuery<AppQueryType>(RelayEnvironment, AppQuery, {})

function App() {
  const data = usePreloadedQuery(AppQuery, preloadedQuery)

  return <>{data.helloWorld}</>
}

export default App
