import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DeckGrid from "@/components/DeckGrid";
import Workflow from "@/components/Workflow";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <DeckGrid />
        <Workflow />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
