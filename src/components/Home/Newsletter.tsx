import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your API
      console.log('Subscribing email:', email);
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter to get updates on new game releases, exclusive deals, and gaming news.
            </p>
            
            {isSubmitted ? (
              <div className="bg-green-800 text-white p-4 rounded-lg mb-6">
                Thanks for subscribing! Check your email for confirmation.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy and will never share your email with third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;