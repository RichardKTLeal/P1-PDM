import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CapturaDados from './CapturaDados';

function App() {
  return (
    <div className="app-fundo">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="app-card p-4">
              <h1 className="titulo text-center mb-4">Hello, Investimentos</h1>

              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <CapturaDados />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;