import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { X, Download } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface DeckModalProps {
  deckFile: string;
  title: string;
  onClose: () => void;
}

export default function DeckModal({ deckFile, title, onClose }: DeckModalProps) {
  const [numPages, setNumPages] = useState<number>(0);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = deckFile;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-[90vh] relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download size={18} />
              Download PDF
            </button>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-3xl font-light w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              ×
            </button>
          </div>
        </div>

        {/* Scrollable PDF Container */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <div className="flex flex-col items-center gap-4">
            <Document
              file={deckFile}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              loading={
                <div className="flex items-center justify-center h-64">
                  <p className="text-gray-500">Loading PDF...</p>
                </div>
              }
            >
              {Array.from(new Array(numPages), (_, index) => (
                <div key={`page_${index + 1}`} className="bg-white shadow-md mb-4">
                  <Page
                    pageNumber={index + 1}
                    width={window.innerWidth > 768 ? 800 : window.innerWidth * 0.85}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </div>
              ))}
            </Document>
          </div>
        </div>

        {/* Page Count Footer */}
        <div className="p-3 border-t border-gray-200 text-center text-sm text-gray-600">
          {numPages > 0 && `${numPages} pages`}
        </div>
      </div>
    </div>
  );
}