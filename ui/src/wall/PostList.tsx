import { styled } from '@mui/material/styles'
import graphql from 'babel-plugin-relay/macro'
import { useCallback } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { usePaginationFragment } from 'react-relay'
import { useNavigate } from 'react-router-dom'
import PostListItem from './PostListItem'
import { PostList_root$key } from './__generated__/PostList_root.graphql'

const Background = styled('div')({
  marginBottom: '0.4rem',
})

const userFragment = graphql`
  fragment PostList_root on RootQueryType
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 10 }
    cursor: { type: "String", defaultValue: null }
  )
  @refetchable(queryName: "PostListPaginationQuery") {
    posts: listPosts(first: $count, after: $cursor) @connection(key: "PostList_root_posts") {
      edges {
        node {
          id
          ...PostListItem_post
        }
      }
    }
  }
`

type Props = {
  root: PostList_root$key
}

function PostList(props: Props) {
  const { data, loadNext, hasNext } = usePaginationFragment(userFragment, props.root)
  const navigate = useNavigate()

  const handlePostClick = useCallback(
    (id: string) => {
      navigate(`/post/${id}`)
    },
    [navigate]
  )

  const handleLoadNext = useCallback(() => {
    loadNext(5)
  }, [loadNext])

  return (
    <Background>
      <InfiniteScroll
        dataLength={data.posts?.edges?.length || 0}
        next={handleLoadNext}
        hasMore={hasNext}
        loader={<h4>Loading...</h4>}
      >
        {data.posts?.edges?.map(
          (edge) =>
            edge?.node && (
              <PostListItem key={edge.node.id} post={edge.node} onPostClick={handlePostClick} />
            )
        )}
      </InfiniteScroll>
    </Background>
  )
}

export default PostList
