import React from 'react';
// import { BrowserRouter } from 'react-router-dom'; 
//bootstrap
import '../../my-first-app/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { DadaProvider } from './components/Tree/MyContext';
import Son from './components/Tree/Son';

const App = () => {

  return (
    <div className="text-center">

       <DadaProvider value = "Dada send to message puti">
         
         <Son/>
         
          </DadaProvider>

    </div>
  );
}

export default App;


