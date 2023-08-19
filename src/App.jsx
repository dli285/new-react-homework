import React, {useState} from 'react';
import './styles/main.css';
import Welcome from './pages/Welcome';
import StepOne from './pages/StepOne'
import StepTwo from './pages/StepTwo'
import StepThree from './pages/StepThree'

function App() {
  const [currentPage, setCurrentPage] = useState(0)

  const rerenderCurrentPage = () => {
    switch (currentPage) {
      case 0:
        return <Welcome onGoNextPage={() => setCurrentPage(1)}/>
      case 1:
        return <StepOne  onGoNextPage={() => setCurrentPage(2)}/>
      case 3:
        return <StepThree  onGoNextPage={() => setCurrentPage(3)}/>
      default:
        break;
    }
  }

  return (
    <div className="App">
      {rerenderCurrentPage()}
    </div>
  );
}

export default App;
