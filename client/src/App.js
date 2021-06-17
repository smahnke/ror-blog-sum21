import {Route} from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';

//nav routes
const App = () => (
  <>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About}/>
    {/* make sure this is the last item */}
    <Route component={NoMatch} />
    </Switch>
  </>
)

export default App;
