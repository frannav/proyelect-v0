import styled from 'styled-components'
import data from '../../utils/infoServices'

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  height: auto;
`

const Text = styled.h2`
  font-size: 4rem;
`

const ArticleCollection = styled.div`
  align-items:center;
  margin: 5rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-grow: 1;
  padding: 0.5rem;
  column-gap: 1rem;  
`

const Card = styled.article`
  display: grid;
  grid-template-columns: 350px;
  grid-template-rows: 130px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 8px;
  background: white;
  /* border: 1px solid transparent; */
  box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
  text-align: center;
  transition: 0.5s ease;
  /* cursor: pointer; */
  margin:30px;

  /* & :hover{
    transform: scale(1.15);
    box-shadow: 2px 2px 4px rgba(0,0,0,0.6);
  } */
`
const CardImage = styled.div`
  grid-area: image;
  background: url(${props => props.img});
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-size: cover;
`

const CardText = styled.div`
  grid-area: text;
  margin: 25px;

  p {
    color: grey;
    font-size:15px;
    font-weight: 300;
  }

  h2{
    margin-top:0px;
    font-size:28px;
  }
`

const CardStats = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: ${({theme}) => theme.colors.blue1};
`

const CardValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding:10px;
`

const CardType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding:10px; 
  
`

export default function CardsSection() {
  return (
    <>
      <ServicesContainer>
        <Text>Servicios</Text>
        <div>
          <ArticleCollection>
            {
              data.map(item => 
              <Card key={item.title}>
                <CardImage img={item.imgPath}></CardImage>
                <CardText>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </CardText>
                <CardStats>
                  <CardValue>+500</CardValue>
                  <CardType>Instalaciones</CardType>
                </CardStats>
              </Card>
              )
            }
          </ArticleCollection>
        </div>
      </ServicesContainer>
    </>
  )
}