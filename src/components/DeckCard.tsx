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
    <article className="deck-card flex flex-col animate-fade-in-up h-full">
      <div className="overflow-hidden rounded-t-xl bg-gray-50">
        <AspectRatio ratio={16 / 9}>
          {imageError ? (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Preview</span>
            </div>
          ) : (
            <img
              src={thumbnail}
              alt={`${title} thumbnail`}
              className="w-full h-full object-contain p-4"
              onError={() => setImageError(true)}
            />
          )}
        </AspectRatio>
      </div>
      
      <div className="p-6 flex flex-col flex-1 min-h-[200px]">
        <h3 className="text-card-title text-primary mb-1">
          {title}
        </h3>
        
        <p className="text-card-date text-muted-brand mb-1">
        {date}
        </p>

        {note && (
         <p className="text-card-note text-muted-brand italic mb-4">
          {note}
         </p>
        )}
        
        <div className="mt-auto">
          <button
            onClick={() => onViewDeck(file, title)}
            className="btn-primary"
          >
            View
          </button>
        </div>
      </div>
    </article>
  );
};

export default DeckCard;
