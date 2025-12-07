import { useState, useEffect, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface DeckModalProps {
  file: string;
  title: string;
  onClose: () => void;
}

const DeckModal = ({ file, title, onClose }: DeckModalProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(800);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowLeft" && pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    } else if (e.key === "ArrowRight" && pageNumber < numPages) {
      setPageNumber((prev) => prev + 1);
    }
  }, [onClose, pageNumber, numPages]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown]);

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setContainerWidth(width * 0.9);
      } else if (width < 1024) {
        setContainerWidth(Math.min(width * 0.85, 700));
      } else {
        setContainerWidth(Math.min(width * 0.7, 900));
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const onDocumentLoadError = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <div 
      className="modal-overlay animate-fade-in" 
      onClick={onClose}
    >
      <div 
        className="modal-content animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-primary-brand truncate pr-4">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary hover:bg-muted flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto flex items-center justify-center bg-muted/50 p-4">
          {loading && !error && (
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-muted-foreground text-sm">Loading presentation...</p>
            </div>
          )}
          
          {error && (
            <div className="text-center p-8">
              <p className="text-muted-foreground mb-2">Unable to load PDF</p>
              <p className="text-sm text-muted-brand">
                The presentation file may not be available yet.
              </p>
            </div>
          )}

          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={null}
            className={loading || error ? "hidden" : ""}
          >
            <Page 
              pageNumber={pageNumber} 
              width={containerWidth}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </div>

        {/* Navigation Controls */}
        {!error && numPages > 0 && (
          <div className="flex items-center justify-between p-4 border-t border-border bg-background">
            <button
              onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))}
              disabled={pageNumber <= 1}
              className="btn-nav flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>
            
            <span className="text-sm text-muted-foreground">
              Page {pageNumber} of {numPages}
            </span>
            
            <button
              onClick={() => setPageNumber((prev) => Math.min(numPages, prev + 1))}
              disabled={pageNumber >= numPages}
              className="btn-nav flex items-center gap-2"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeckModal;
