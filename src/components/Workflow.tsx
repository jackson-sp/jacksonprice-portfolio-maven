import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Workflow = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Add ESC key listener
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  return (
    <>
      {/* Button to open modal */}
      <section className="container-portfolio py-12 text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
        >
          How I Created This Site
        </button>
      </section>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
              <h2 className="text-3xl font-bold text-primary">Site Development Workflow</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl font-light w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Stage 1 */}
              <div className="bg-gray-50 rounded-xl p-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">Strategy & Planning</h3>
                    <p className="text-sm text-primary font-medium mb-3">Claude</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Write PRD</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Create prompts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Plan architecture</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-center text-primary text-3xl animate-bounce">↓</div>

              {/* Stage 2 */}
              <div className="bg-gray-50 rounded-xl p-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">Rapid Prototyping</h3>
                    <p className="text-sm text-primary font-medium mb-3">Lovable</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Generate initial code</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>One comprehensive prompt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Export to GitHub</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-center text-primary text-3xl animate-bounce">↓</div>

              {/* Stage 3 */}
              <div className="bg-gray-50 rounded-xl p-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">Version Control</h3>
                    <p className="text-sm text-primary font-medium mb-3">GitHub</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Store all code</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Track changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Source of truth</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-center text-primary text-3xl animate-bounce">↓</div>

              {/* Stage 4 */}
              <div className="bg-gray-50 rounded-xl p-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">Polish & Debug</h3>
                    <p className="text-sm text-primary font-medium mb-3">Cursor</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Fix bugs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Add features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Fine-tune styling</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-center text-primary text-3xl animate-bounce">↓</div>

              {/* Stage 5 */}
              <div className="bg-gray-50 rounded-xl p-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">Deploy</h3>
                    <p className="text-sm text-primary font-medium mb-3">Vercel</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Auto-deploy on push</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Live site</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Custom domain</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Workflow;