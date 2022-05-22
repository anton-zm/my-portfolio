import React, { useEffect, useState } from 'react';
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
import { GoUpBtn } from './components/go-up';
import { StackSection } from './components/stack-section';

const App = observer(() => {
  const [upBtn, setUpBtn] = useState(false)

  const upBtnToggle = () => {
    const pos = window.pageYOffset
    if(pos > document.documentElement.clientHeight){
      setUpBtn(true)
    }else{
      setUpBtn(false)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', upBtnToggle)
     return () => {
       // eslint-disable-next-line no-restricted-globals
       removeEventListener('scroll', upBtnToggle)
     }
  },[])

  return (
    <Ctx.Provider value={Store}>
      <Header />
      <TitlePanel />
      <Projects />
      <StackSection />
      <Certificates />
      <Contacts />
      <Footer />
      {upBtn && <GoUpBtn />}
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
