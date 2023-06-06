import Image from 'next/image'
import WeatherWidget from '@/components/WeatherWidget'
import Container from '@/components/Container'

export default function Home() {
  return (
    <main>
      <Container>
        <WeatherWidget/>
      </Container>
    </main>
  )
}
