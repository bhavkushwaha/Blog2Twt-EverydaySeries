'use client';

import { useState } from 'react';
import { UserButton } from '@clerk/nextjs';


export default function HomePage() {
  const [blogPost, setBlogPost] = useState('');
  const [generatedTweet, setGeneratedTweet] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateTweet = async () => {
    if (!blogPost.trim()) {
      alert('Please enter a blog post to convert.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/generateTweet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: blogPost }),
      });

      if (!response.ok) throw new Error('Failed to generate tweet');

      const data = await response.json();
      setGeneratedTweet(data.tweet);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while generating the tweet.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white text-center py-4 text-xl font-semibold">
        Blog to Tweet Converter
      </header>

      <main className="flex-grow flex flex-col items-center px-4 py-8">
        {/* The UserButton is responsible for managing sign-in and sign-out */}
        <UserButton afterSignOutUrl="/" />
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 space-y-4">
          <textarea
            value={blogPost}
            onChange={(e) => setBlogPost(e.target.value)}
            placeholder="Paste your blog post here..."
            className="w-full h-40 p-4 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            onClick={handleGenerateTweet}
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {loading ? 'Generating...' : 'Generate Tweet'}
          </button>
        </div>

        <div className="mt-6 w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
          {generatedTweet ? (
            <>
              <h2 className="text-lg font-semibold mb-2">Generated Tweet:</h2>
              <p className="text-gray-800">{generatedTweet}</p>
            </>
          ) : (
            <p className="text-gray-500 italic text-center">
              Your tweet will appear here.
            </p>
          )}
        </div>
      </main>

      <footer className="bg-blue-600 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Blog to Tweet App
      </footer>
    </div>
  );
}
