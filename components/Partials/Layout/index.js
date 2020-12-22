import styled from 'styled-components'
import Footer from '../../Footer'
import Navbar from '../../Navbar'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  overflow-x: scroll;
  padding: 0;
  width: 100%;
`

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <section>
        { children }
      </section>
      <Footer />
    </Container>
  )
}

