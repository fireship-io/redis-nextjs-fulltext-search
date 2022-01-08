import { getCar } from '../lib/redis'
import styles from '../styles/Home.module.css'
import CarForm from '../lib/CarForm'
import SearchForm from '../lib/SearchForm'

export async function getServerSideProps() {
  const album = await getCar('01FRNACF8S7JDJMJXMTYH4F0SB')
  return {
    props: {
      album: album.entityData,
    },
  }
}

export default function Home(props) {
  return (
    <main>

      <CarForm />

      <SearchForm />
    </main>
  )
}
