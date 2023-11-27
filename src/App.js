import './App.css';
import Lead from './lead/Lead'
import Starratings from './starratings/Starratings';

function App() {
  return (
    <div className="App" role="main">
      <div className="grid">
        <Lead />
        <Starratings />
        <div className="box_customer"><div>three</div></div>
        <div className="box_customer"><div>four</div></div>
        <div className="box_customer"><div>five</div></div>
      </div>
    </div>
  );
}

export default App;
