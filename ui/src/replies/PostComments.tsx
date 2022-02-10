import graphql from 'babel-plugin-relay/macro'
import { sortBy } from 'lodash'
import { useCallback, useMemo } from 'react'
import { useFragment } from 'react-relay'
import { useNavigate } from 'react-router-dom'
import PostCommentContent from './PostCommentContent'
import { PostComments_post$key } from './__generated__/PostComments_post.graphql'

const userFragment = graphql`
  fragment PostComments_post on Post {
    comments {
      id
      insertedAt
      ...PostCommentContent_comment
    }
  }
`

type Props = {
  post: PostComments_post$key
}

function PostComments(props: Props) {
  const post = useFragment(userFragment, props.post)
  const sortedComments = useMemo(() => sortBy(post.comments, ['insertedAt', 'id']), [post.comments])
  const navigate = useNavigate()

  const handleClick = useCallback(
    (id: string) => {
      navigate(`/post/${id}`)
    },
    [navigate]
  )

  return (
    <>
      {sortedComments.map((comment: any) => (
        <PostCommentContent key={comment.id} comment={comment} onClick={handleClick} />
      ))}
    </>
  )
}

export default PostComments
