import ReplyIcon from '@mui/icons-material/Reply'
import { Link, styled } from '@mui/material'
import graphql from 'babel-plugin-relay/macro'
import { useCallback } from 'react'
import { useFragment } from 'react-relay'
import { useNavigate } from 'react-router-dom'
import { ReplyToLink_post$key } from './__generated__/ReplyToLink_post.graphql'

const StyledLink = styled(Link)({
  padding: '0px 16px',
  color: '#FFFFFF3A',
  display: 'flex',
  alignItems: 'center',
})

const userFragment = graphql`
  fragment ReplyToLink_post on Post {
    id
  }
`

type Props = {
  post: ReplyToLink_post$key | null
}

function ReplyToLink(props: Props) {
  const post = useFragment(userFragment, props.post)
  const navigate = useNavigate()

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (!post) {
        return
      }

      e.stopPropagation()
      navigate(`/post/${post.id}`)
    },
    [navigate, post]
  )

  return (
    <StyledLink onClick={handleClick}>
      <ReplyIcon />
      Reply to
    </StyledLink>
  )
}

export default ReplyToLink
