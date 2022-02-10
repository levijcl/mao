import { Card, CardActionArea, CardContent, styled, Typography } from '@mui/material'
import graphql from 'babel-plugin-relay/macro'
import { useCallback } from 'react'
import { useFragment } from 'react-relay'
import { getTimeAgo } from '../app/time'
import { PostCommentContent_comment$key } from './__generated__/PostCommentContent_comment.graphql'

const StyledCard = styled(Card)({
  background: '#6A7484',
  marginBottom: '0.8rem',
})

const Content = styled(Typography)({
  fontSize: '1.4rem',
})

const Timestamp = styled(Typography)({
  color: '#CCCCCC',
  fontSize: '0.7rem',
})

const userFragment = graphql`
  fragment PostCommentContent_comment on Post {
    id
    content
    insertedAt
  }
`

type Props = {
  comment: PostCommentContent_comment$key
  onClick: (id: string) => void
}

function PostCommentContent(props: Props) {
  const { onClick, comment } = props
  const { id, content, insertedAt } = useFragment(userFragment, comment)

  const handleClick = useCallback(() => {
    onClick(id)
  }, [onClick, id])

  return (
    <StyledCard>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Content variant="body1" color="primary" data-testid="postCommentContent">
            {content}
          </Content>
          <Timestamp variant="subtitle2">{getTimeAgo(new Date(insertedAt))}</Timestamp>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  )
}

export default PostCommentContent
