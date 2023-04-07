import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ChatPage from './pages/ChatPage';
import { ThemeProvider } from '@emotion/react';
import theme from './utils/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/chat" element={<ChatPage/>} />
            </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
