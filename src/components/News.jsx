import React, { useState, useEffect } from 'react';

export const News = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const news = async () => {
        const url = `https://newsapi.org/v2/top-headlines?q=money&apiKey=1fcab70e84bb4836a81623b43bacab53`;
        const response = await fetch(url);
        const rdata = await response.json();
        setData(rdata.articles || []);
      };
      news();
    }
  }, [open]);

  if (open) {
    return (
      <div className="fixed bottom-20 right-4 md:right-6 w-11/12 md:w-80 bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.3)] bg-gradient-to-t from-green-600 to-yellow-400 rounded-2xl overflow-hidden z-50">
        <div className="bg-green-600 text-white p-3 flex justify-between items-center font-extrabold">
          <span>Headlines</span>
          <button onClick={() => setOpen(false)}>&times;</button>
        </div>
        <div className="p-4 h-64 overflow-y-auto text-sm">
          {data.length === 0 ? (
            <p>No news available.</p>
          ) : (
            data.map((item) => (
              <div
                key={item.url}
                className="bg-white shadow-md rounded-lg overflow-hidden w-full mb-2 p-2 flex items-start gap-2"
              >
                {item.urlToImage && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.urlToImage}
                      className="w-16 h-12 object-cover rounded"
                      alt=""
                    />
                  </a>
                )}
                <div className="text-xs">{item.title}</div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  } else {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-4 md:right-6 bg-green-600 text-white px-4 py-2 text-sm md:text-base rounded-full shadow-lg hover:bg-green-700 transition"
      >
        News
      </button>
    );
  }
};
