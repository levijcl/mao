import { Card, CardContent, styled, Typography } from '@mui/material'
import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import { getTimeAgo } from '../app/time'
import { PostContent_post$key } from './__generated__/PostContent_post.graphql'

const query = graphql`
  fragment PostContent_post on Post {
    content
    insertedAt
  }
`

const StyledCard = styled(Card)({
  background: '#40516E',
  marginBottom: '0.8rem',
  contentVisibility: 'auto',
})

const Timestamp = styled(Typography)({
  color: '#AAAAAA',
})

type Props = {
  post: PostContent_post$key
}

function PostContent(props: Props) {
  const { content, insertedAt } = useFragment(query, props.post)

  return (
    <StyledCard data-testid="postContent">
      <CardContent>
        <Typography variant="body1" color="primary">
          {content}
        </Typography>
        <Timestamp variant="subtitle2">{getTimeAgo(new Date(insertedAt))}</Timestamp>
      </CardContent>
    </StyledCard>
  )
}
export default PostContent
