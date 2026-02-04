import { useState } from 'react';

const SearchBar = ({ value, onChange }) => {
  const [input, setInput] = useState(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(input);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <div className="relative max-w-3xl mx-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for news, topics, or keywords..."
          className="w-full px-6 py-5 pl-14 pr-14 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 text-lg bg-white shadow-lg transition-all duration-300"
        />
        <svg
          className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {input && (
          <button
            type="button"
            onClick={() => {
              setInput('');
              onChange('');
            }}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
