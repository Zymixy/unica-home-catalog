import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>UNICA | Pisos Únicos en Madrid</title>
        <meta name="description" content="Descubre pisos únicos y exclusivos en las mejores zonas de Madrid. Catálogo inmobiliario premium." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </>
  );
};

export default Index;
