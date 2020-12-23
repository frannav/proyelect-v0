import styled from 'styled-components'

const InfoContainer = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  align-items: center;
  @media (max-width: 630px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const ImgContainer = styled.div`
  min-width: 15rem;
  margin-left: 4rem;
  margin-right: 1rem;
  width: 100%;
  height: 500px;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  @media (max-width: 630px) {
    flex-direction: column;
    margin-left: 2rem;
    margin-right: 2rem;
    width: 80%;
    height: 300px;
  }
`

const TextContainer = styled.div`
  max-width: 15rem;
  min-width: 15rem;
  margin-right: 4rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 630px) {
    max-width: 25rem;
    min-width: 25rem;
  }
`

export default function InfoSection() {
  return (
    <>
      <InfoContainer>
        <ImgContainer img={'./5.jpg'}>
          
        </ImgContainer>
        <TextContainer>
          <h2>¿Quienes somos?</h2>
          <p>Lorem ipsum ipsum lorem lore lo lo lo lo lo lo Lorem ipsum ipsum lorem lore lo lo lo lo lo lo Lorem ipsum ipsum lorem lore lo lo lo lo lo lo Lorem ipsum ipsum lorem lore lo lo lo lo lo lo Lorem ipsum ipsum lorem lore lo lo lo lo lo lo</p>
        </TextContainer>
      </InfoContainer>
    </>
  )
}