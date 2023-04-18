import { Footer } from '@/componentes/Footer'
import { Main } from '@/componentes/Main'
import { SideBar } from '@/componentes/SideBar'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">

      <div className="flex flex-1">
        <SideBar />

        <Main/>
      </div>
      <Footer />
    </div>
  )
}
