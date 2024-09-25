import React, { useEffect } from 'react';
import './App.css';
import fullpage from 'fullpage.js';

function App() {
  useEffect(() => {
    const fullpageInstance = new fullpage('#fullpage', {
      licenseKey: 'YOUR_LICENSE_KEY', // Replace with your actual key
      autoScrolling: true,
      scrollHorizontally: true,
    });

    return () => {
      fullpageInstance.destroy('all');
    };
  }, []);

  return (
    <div id="fullpage">
      <div className="section">
        <h1>Section 1</h1>
      </div>
      <div className="section">
        <h1>Section 2</h1>
      </div>
      <div className="section">
        <h1>Section 3</h1>
      </div>
      <main className="p-6">
        <section id="about" className="my-6">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-4">
            Hello! I'm a software developer with a passion for creating web applications.
          </p>
          <ul className="mt-4">
            <li className="mb-4">
              <button className="flex items-center p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                <div className="button-content">
                  <h3 className="text-lg font-bold">Dynamic Game Engine</h3>
                  <div className="playstation-button"></div>
                </div>
              </button>
            </li>
            <li className="mb-4">
              <button className="flex items-center p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                <img src="/path/to/image-compression.png" alt="Image and File Compression Utilities" className="w-16 h-16 object-cover rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-bold">Image and File Compression Utilities</h3>
                </div>
              </button>
            </li>
          </ul>
        </section>
        <section id="contact" className="my-6">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-4">
            You can reach me at <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">your.email@example.com</a>.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;