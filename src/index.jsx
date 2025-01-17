import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
// On ajoute nos composants
import ClientForm from './components/Color/ClientColor'
import FreelanceForm from './components/Color/FreelanceColor'
import { createGlobalStyle } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root'))

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

root.render(
  // <React.StrictMode>
  <Router>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/survey/:questionNumber" element={<Survey />}>
        {/* Nous imbriquons nos composants dans survey */}
        <Route path="client" element={<ClientForm />} />
        <Route path="freelance" element={<FreelanceForm />} />
      </Route>
      <Route path="/freelances" element={<Freelances />} />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>,
  // </React.StrictMode>,
)
