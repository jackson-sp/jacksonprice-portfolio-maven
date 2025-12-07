import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface DeckCardProps {
  id: string;
  title: string;
  thumbnail: string;
  file: string;
  date: string;
  note: string | null;
  onViewDeck: (file: string, title: string) => void;
}

const DeckCard = ({ id, title, thumbnail, file, date, note, onViewDeck }: DeckCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="deck-card flex flex-col animate-fade-in-up">
      <div className="overflow-hidden rounded-t-xl">
        <AspectRatio ratio={16 / 9}>
          {imageError ? (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Preview</span>
            </div>
          ) : (
            <img
              src={thumbnail}
              alt={`${title} thumbnail`}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          )}
        </AspectRatio>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-card-title text-primary-brand mb-1">
          {title}
        </h3>
        
        {note && (
          <p className="text-card-note text-muted-brand italic mb-1">
            {note}
          </p>
        )}
        
        <p className="text-card-date text-muted-brand mb-4">
          {date}
        </p>
        
        <div className="mt-auto">
          <button
            onClick={() => onViewDeck(file, title)}
            className="btn-primary"
          >
            View Deck
          </button>
        </div>
      </div>
    </article>
  );
};

export default DeckCard;
