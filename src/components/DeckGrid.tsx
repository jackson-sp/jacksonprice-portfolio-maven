import { useState } from "react";
import DeckCard from "./DeckCard";
import DeckModal from "./DeckModal";
import content from "@/data/content.json";

const DeckGrid = () => {
  const { decks } = content;
  const [selectedDeck, setSelectedDeck] = useState<{ file: string; title: string } | null>(null);

  const handleViewDeck = (file: string, title: string) => {
    setSelectedDeck({ file, title });
  };

  const handleCloseModal = () => {
    setSelectedDeck(null);
  };

  return (
    <>
      <section className="container-portfolio pb-20 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" style={{ gridAutoRows: '1fr' }}>
          {decks.map((deck, index) => (
            <div 
              key={deck.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className="h-full"
            >
              <DeckCard
                {...deck}
                onViewDeck={handleViewDeck}
              />
            </div>
          ))}
        </div>
      </section>

      {selectedDeck && (
      <DeckModal
        deckFile={selectedDeck.file}
        title={selectedDeck.title}
        onClose={handleCloseModal}
      />
      )}
    </>
  );
};

export default DeckGrid;
