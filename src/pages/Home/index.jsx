import { useState } from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Balloon = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: #e20202;
  // 4. Récupération de la prop 'size' de Balloon pour utiliser sa valeur dans le css
  transform: scale(${({ size }) => size});
`

function Home() {
  // 1. State 'size' initié à la taille 1
  const [size, setSize] = useState(1)

  return (
    <HomeContainer>
      {/* 2. onClick : Fonction fléchée qui invoque la méthode setSize du state en augmentant le paramètre de 0.1 (+10%) */}
      <h1 onClick={() => setSize(size + 0.1)}> Page d'accueil 🏡</h1>
      {/* 3. Utilisation du state 'size' en tant que prop pour transmettre sa valeur au composant <Balloon /> */}
      <Balloon size={size} />
    </HomeContainer>
  )
}

export default Home
