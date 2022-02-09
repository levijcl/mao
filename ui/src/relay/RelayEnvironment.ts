import * as withAbsintheSocket from '@absinthe/socket'
import { AbsintheSocket, Notifier, Observer } from 'absinthe__socket'
import { Socket as PhoenixSocket } from 'phoenix'
import {
  Environment,
  GraphQLResponse,
  Network,
  Observable,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from 'relay-runtime'
import { RelayObservable } from 'relay-runtime/lib/network/RelayObservable'
import fetchGraphQL from './fetchGraphQL'

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL!

async function fetchRelay(params: RequestParameters, variables: Variables) {
  return fetchGraphQL(params.text, variables)
}

const absintheSocket = withAbsintheSocket.create(new PhoenixSocket(SOCKET_URL))

const unobserveOrCancelIfNeeded = (
  socket: AbsintheSocket,
  notifier?: Notifier<Variables>,
  observer?: Observer<Variables>
) => {
  if (notifier && observer) {
    withAbsintheSocket.unobserveOrCancel(socket, notifier, observer)
  }
}

const subscribe = (request: RequestParameters, variables: Variables) => {
  const notifier = withAbsintheSocket.send(absintheSocket, {
    operation: request.text!,
    variables,
  })
  const observable = withAbsintheSocket.toObservable(absintheSocket, notifier, {
    onError: () => {
      return
    },
    onStart: () => {
      return
    },
    unsubscribe: unobserveOrCancelIfNeeded,
  })

  return Observable.from(observable) as RelayObservable<GraphQLResponse>
}

export default new Environment({
  network: Network.create(fetchRelay, subscribe),
  store: new Store(new RecordSource()),
})
