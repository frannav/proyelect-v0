import styled from 'styled-components'

const BackgroundImgContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* opacity: 0.9; */
  div {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #8E8E90;
    opacity: 0.6;
  }
`

const Text = styled.h2`
  position: absolute;
  text-align: center;
  letter-spacing: -2px;
  word-spacing: 7px;
  font-size: 5rem;
  color: ${({theme}) => theme.colors.white};
  /* background-color: ${({theme}) => theme.colors.white}; */

  border-radius: 10px;
  padding: 0 0.4rem;
`

export default function BackgroundImgSection() {
  return (
    <>
      <BackgroundImgContainer img={'./2.jpg'}>
        <div>

        </div>
        <Text>Construimos tus sueños</Text>
      </BackgroundImgContainer>
    </>
  )
}