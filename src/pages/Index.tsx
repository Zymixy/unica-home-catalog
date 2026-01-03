import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BackToTop from "@/components/BackToTop";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Unique Rental Places | Pisos Únicos en Madrid</title>
        <meta name="description" content="Descubre pisos únicos y exclusivos en las mejores zonas de Madrid. Catálogo inmobiliario premium." />
      </Helmet>
      <div className="h-screen overflow-hidden">
        <Header />
        <main>
          <Hero />
        </main>
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
