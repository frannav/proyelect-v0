import styled from 'styled-components'

const Nav = styled.nav`
  background-color: ${({theme}) => theme.colors.blue2};
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

const Nav_title = styled.h1`
  color: ${({theme}) => theme.colors.white};
`

const Nav_links = styled.div`
  display: flex;
  text-align: center;
`

const Nav_link = styled.a`
  margin-left: 3rem;
  margin-right: 3rem;
  text-decoration: none;
  color: ${({theme}) => theme.colors.white};
`

const Nav_button = styled.a`
  color: ${({theme}) => theme.colors.black};
  text-decoration: none;
  margin-right: 2rem;
  padding: .5rem;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.white};
`

export default function Navbar() {
  return (
    <section>
        <Nav>
          <div>
            <Nav_title>Proyelect</Nav_title>
          </div>
          <Nav_links>
            <Nav_link href="#">Servicios</Nav_link>
            <Nav_link href="#">Quienes somos</Nav_link>
          </Nav_links>
          <div>
            <Nav_button href="#">Pide tu presupuesto</Nav_button>
          </div>
        </Nav>
      </section>
  )
}