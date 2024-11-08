import React, { useState } from 'react';
import { Calculator, ArrowRight, X, DollarSign } from 'lucide-react';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [keywords, setKeywords] = useState('');
  const [pages, setPages] = useState('');
  const [competition, setCompetition] = useState('medium');
  const [totalCost, setTotalCost] = useState(0);

  const calculateCost = () => {
    const baseRate = 1000;
    const keywordMultiplier = Math.max(1, parseInt(keywords) / 10);
    const pageMultiplier = Math.max(1, parseInt(pages) / 5);
    const competitionRates = { low: 1, medium: 1.5, high: 2 };
    
    const cost = baseRate * keywordMultiplier * pageMultiplier * competitionRates[competition];
    setTotalCost(Math.round(cost));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Want to Skyrocket Your SEO?</h2>
            <p className="mb-6">Book your FREE SEO Strategy Session with me, Julian Goldie, and let's create a custom plan for your business.</p>
            <a
              href="https://go.juliangoldie.com/strategy-session"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
            >
              Book Free Strategy Session <ArrowRight size={20} />
            </a>
          </div>
        </div>
      )}

      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">SEO Cost Calculator</h1>
            <a
              href="https://go.juliangoldie.com/strategy-session"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              Free Strategy Session <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Hi! I'm Julian Goldie, and I've helped hundreds of businesses improve their SEO. I created this SEO Cost Calculator to help you understand the investment needed for your SEO campaign. Simply input your details below to get an estimate.
          </p>

          {/* Calculator Tool */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <div className="grid gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Target Keywords
                </label>
                <input
                  type="number"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="e.g., 10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Pages to Optimize
                </label>
                <input
                  type="number"
                  value={pages}
                  onChange={(e) => setPages(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="e.g., 5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Competition Level
                </label>
                <select
                  value={competition}
                  onChange={(e) => setCompetition(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="low">Low Competition</option>
                  <option value="medium">Medium Competition</option>
                  <option value="high">High Competition</option>
                </select>
              </div>
              <button
                onClick={calculateCost}
                className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
              >
                <Calculator size={20} />
                Calculate SEO Cost
              </button>
            </div>
            {totalCost > 0 && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <DollarSign size={24} />
                  Estimated Monthly SEO Investment:
                </h3>
                <p className="text-3xl font-bold text-blue-600">${totalCost}</p>
              </div>
            )}
          </div>

          <h2 className="text-2xl font-bold mb-4">How to Use the SEO Cost Calculator</h2>
          <p>
            Using my SEO Cost Calculator is simple! Just follow these steps:
          </p>
          <ol className="list-decimal pl-6 mb-6">
            <li>Enter the number of keywords you want to target</li>
            <li>Input how many pages need optimization</li>
            <li>Select your market's competition level</li>
            <li>Click "Calculate SEO Cost" to see your estimate</li>
          </ol>

          <h2 className="text-2xl font-bold mb-4">Understanding Your SEO Investment</h2>
          <p>
            The SEO Cost Calculator helps you plan your budget by considering key factors that affect SEO pricing. Remember, this is an estimate - your actual costs might vary based on your specific needs.
          </p>

          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Why does the SEO Cost Calculator show these prices?</h3>
              <p>The calculator considers industry standards, competition levels, and the scope of work needed for effective SEO campaigns.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Is this the final price I'll pay for SEO services?</h3>
              <p>The SEO Cost Calculator provides an estimate. Your actual investment might vary based on your specific needs and goals.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">How accurate is the SEO Cost Calculator?</h3>
              <p>The calculator gives you a ballpark figure based on industry averages and my experience working with hundreds of clients.</p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your SEO Journey?</h2>
            <p className="mb-6">
              Let's discuss how we can customize an SEO strategy for your business. Book a free strategy session with me, and I'll help you create a plan that fits your goals and budget.
            </p>
            <a
              href="https://go.juliangoldie.com/strategy-session"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              Book Your Free Strategy Session <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;