import styled from 'styled-components'

const FooterStyles = styled.footer`
  width: 100%;
  background-color: ${({theme}) => theme.colors.blue2};
  color: ${({theme}) => theme.colors.white};
  text-align: center;
`

export default function Footer() {
  return (
    <FooterStyles>
      <h1>Footer</h1>
    </FooterStyles>
  )
}