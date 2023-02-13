import React from 'react'
import { StyledContainer } from './index.styles'
// Styles

const MyComponent = (props) => {
  return (
    <StyledContainer className={props.className}>MyComponent</StyledContainer>
  )
}

export default MyComponent