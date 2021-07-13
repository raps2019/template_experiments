import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './globalStyles/GlobalStyles';
import ViewportProvider from './contexts/ViewportProvider';
import { ThemeStore, Theme } from './contexts/ThemeStore';
import Home from './components/pages/home/Home';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <>
      <ViewportProvider>
        <ThemeStore>
          <Theme>
            <Router>
              <GlobalStyle />
              <Navbar></Navbar>
              <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/work" component={Work}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
              </Switch>
              </AnimatePresence>
            </Router>
          </Theme>
        </ThemeStore>
      </ViewportProvider>
    </>
  );
}

export default App;
