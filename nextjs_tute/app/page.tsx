import Image from 'next/image'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main className="mx-10">
      <h1>Hello world !!</h1>
      <ProductCard />
    </main>
  )
}
