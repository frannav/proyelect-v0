import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: ${({theme}) => theme.colors.blue2};
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 630px) {
    flex-direction: column;
    padding: 10px;
  }
`

const Nav_title = styled.h2`
  color: ${({theme}) => theme.colors.white};
  letter-spacing: 5px;
  font-size: 30px;

`

const Nav_links = styled.div`
  display: flex;
  text-align: center;
  margin: 8px;
`

const Nav_link = styled.a`
  margin-left: 3rem;
  margin-right: 3rem;
  text-decoration: none;
  color: ${({theme}) => theme.colors.white};
`

const NavContainer = styled.div`
  margin: 2rem;
`

const Nav_button = styled.a`
  color: ${({theme}) => theme.colors.black};
  text-decoration: none;
  margin-right: 2rem;
  padding: 1rem;
  border-radius: 20px;
  font-size: 1rem;
  letter-spacing: 1px;
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
            <Link href='#services' passHref >
              <Nav_link href="#services">Servicios</Nav_link>
            </Link>
            <Nav_link href='#who'>Quienes somos</Nav_link>
          </Nav_links>
          <NavContainer>
            <Nav_button href='#'>Pide tu presupuesto</Nav_button>
          </NavContainer>
        </Nav>
      </section>
  )
}