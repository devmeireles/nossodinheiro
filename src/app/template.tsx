import Footer from "@/components/navigation/Footer";
import HeaderNavigation from "@/components/navigation/HeaderNavigation";

interface TemplateProps {
  children: React.ReactNode
}

const Template = ({ children }: TemplateProps) => {
  return (
    <div className="app bg-gray-100">
      <header>
        <HeaderNavigation />
      </header>

      <main>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Template;