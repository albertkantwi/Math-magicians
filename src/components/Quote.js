import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const category = 'dad';
    const apiKey = 'GvOQshMcCXvn/q1dlbv2lA==YGpct0k5i11OyNEg';

    const getQuote = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: {
              'X-Api-Key': apiKey,
              'Content-Type': 'application/json',
            },
          },
        );

        if (!response.ok) {
          setError('Network response was not ok');
          setLoading(false);
          return;
        }

        const data = await response.json();

        if (data && data.length > 0) {
          const randomQuote = data[0];

          setQuote(randomQuote.quote);
          setAuthor(randomQuote.author);
          setLoading(false);
          setError(null);
        }
      } catch (error) {
        setError('Error fetching quote');
        setLoading(false);
        throw new Error('Error fetching quote', error);
      }
    };

    getQuote();
  }, []);

  return (
    <div id="quote-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {error ? (
            <p>
              Error:
              {' '}
              {error}
            </p>
          ) : (
            <>
              <h3 className="quote">{quote}</h3>
              <h2 className="quote-author">{author}</h2>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Quote;
