import { StrictMode} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './Assets/css/index.css';
import App from './App';

ReactDOM.render(
  <StrictMode>
		<Router>
			<App />
		</Router>
  </StrictMode>,
  document.getElementById('root')
);

