import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import { observer } from "mobx-react-lite"
import { Ctx, Store } from './store/use-store';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Projects } from './components/projects';
import { Certificates } from './components/certificates';
import { Contacts } from './components/contacts';
import { TitlePanel } from './components/title-panel';

const App = observer(() => {
  return (
    <Ctx.Provider value={Store}>
      <Header />
      <TitlePanel />
      <Projects />
      <Certificates />
      <Contacts />
      <Footer />
    </Ctx.Provider>
  )
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
