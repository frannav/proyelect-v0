import styled from 'styled-components'

const View = styled.section`
  height: auto;
  min-height: 100vh;
`

export default function Section({ children }) {
  return (
    <View>
      {children}
    </View>
  )
}