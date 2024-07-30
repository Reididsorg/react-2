import { Outlet, Link, useParams } from 'react-router-dom'

function Survey() {
  const questionNumber = useParams().questionNumber
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <div>
        <h2>Question {questionNumber}</h2>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {questionNumberInt === 10 ? (
          <Link to="/results">Résultats</Link>
        ) : (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        )}
      </div>
      <div>
        <h2>Couleurs</h2>
        <Link to="client">Couleur Client</Link>
        <Link to="freelance">Couleur Freelance</Link>
        <Outlet />
      </div>
    </div>
  )
}

export default Survey
