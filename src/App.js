import React from 'react';
import { Switch, Route, link } from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepage.component'

const chapeaux = props => {
    return (
    <div>
        <link to='/detail/0'>Détail zéro</link>
        <button onClick={ () => props.history.push('/detail/push')}>par push</button>
        <h1>Une page</h1>
    </div>
    )
}

const AutrePage = props => {
    console.log(props)
        return (
    <div>
        <h1>Une autre page : {props.match.params.refArticle}</h1>
    </div>
    )
}




function App() {
  return (
    <Switch>
      <Route path='/' component={HomePage} />
      <Route path='/chapeaux' component={chapeaux} />
      <Route path='/detail/:refArticle' component={AutrePage} />
    </Switch>
  );
}

export default App;
