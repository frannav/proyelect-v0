import Layout from '../components/Partials/Layout'
import Section from '../components/Partials/Section'
import BackgroundImgSection from '../components/BackgroundImgSection'
import InfoSection from '../components/InfoSection'
import CardsSection from '../components/CardsSection'

import styled from 'styled-components'


export default function Home() {
  return (
    <Layout>
      <Section>
        <BackgroundImgSection />
      </Section>
      <Section>
        <CardsSection />
      </Section>
      <Section>
        <InfoSection />
      </Section>
    </Layout>
  )
}
