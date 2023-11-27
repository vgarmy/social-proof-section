import './App.css';
import Customers from './customers/Customers';
import Lead from './lead/Lead'
import Starratings from './starratings/Starratings';

function App() {
  return (
    <div className="App" role="main">
      <div className="grid">
        <Lead />
        <Starratings />
        <Customers />
      </div>
    </div>
  );
}

export default App;
