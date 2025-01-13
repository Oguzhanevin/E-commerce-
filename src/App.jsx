import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <i className="fas fa-home"></i>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
            <p className="mt-4 text-lg text-gray-700">Tailwind CSS is working correctly.</p>
          </div>
        </header>

        {/* Routing işlemlerini burada yapın */}
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* Diğer route'lar eklenebilir */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
