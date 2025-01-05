import Hero from "@/components/Hero"
import Header from "../components/Header"
import HomePage from "@/pages/HomePage"

type Props = {
  children: React.ReactNode
  showHero?: boolean
}

const Layout = ({children, showHero = false}: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {showHero && <Hero />}
            <div className="container mx-auto flex-1 py-10">{children}</div>
        </div>
    )
  
}

export default Layout;