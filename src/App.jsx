import './assets/styles/main.scss'
import QuestionFormsPage from './pages/QuestionFormsPage/QuestionFormsPage'
import AnswerFormsPage from './pages/AnswerFormsPage/AnswerFormsPage'
import SeeAnswersPage from './pages/SeeAnswersPage/SeeAnswersPage'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={QuestionFormsPage} />
        <Route exact path="/answers" component={AnswerFormsPage} />
        <Route exact path="/useranswers" component={SeeAnswersPage} />
      </Switch>
    </div>
  );
}

export default App;
