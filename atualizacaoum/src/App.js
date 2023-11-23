import Home from './Pages/Home'
import F1 from './Pages/F1'
import {Route, Routes } from "react-router-dom";
import Usopen from './Pages/USopen';
import Brasileiro from './Pages/Brasileirao';
import Liberta from './Pages/Libertadores';
import CopaBr from './Pages/CopaBr';
import NFL from './Pages/NFL';
import SuperLF from './Pages/SuperligaFem';
import SuperLM from './Pages/SuperligaMasc';
import AbaCampo from './Pages/Campo';
import AbaPista from './Pages/Pista';
import AbaQuadra from './Pages/Quadra';
import AbaRingue from './Pages/Ringue';
import AbaAqua from './Pages/Aquatico';
import Olim2024 from './Pages/Olim2024';
import Esportes from './Pages/EsportesOlim'
import Curio from './Pages/Curiosidades/indes';
import LoginPage from './Pages/Login';
import FuncionamentoOlim from './Pages/FuncioOlim';
import BrasilOlim from './Pages/BrasilOlim';
import CopaMundo from './Pages/CopaMundo';
import Espanha from './Pages/Espanha';
import ParaOlim from './Pages/ParaOlim';
import FIFA from './Pages/FIFA';
import Pan from './Pages/Pan';
import Marta from './Pages/Marta';
import Ney from './Pages/Neymar';
import Mulher from './Pages/Mulheres';
import Doping from './Pages/Doping';


function App() {
  return (
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='f1' element={<F1/>} />
       <Route path='us' element={<Usopen/>}/>
       <Route path='brasileirao' element={<Brasileiro/>}/>
       <Route path='liberta' element={<Liberta/>}/>
       <Route path='CopaBr' element={<CopaBr/>}/>
       <Route path='Nfl' element={<NFL/>}/>
       <Route path='SuperLF' element={<SuperLF/>}/>
       <Route path='SuperLM' element={<SuperLM/>}/>
       <Route path='AbaAqua' element={<AbaAqua/>}/>
       <Route path='AbaCampo' element={<AbaCampo/>}/>
       <Route path='AbaPista' element={<AbaPista/>}/>
       <Route path='AbaQuadra' element={<AbaQuadra/>}/>
       <Route path='AbaRingue' element={<AbaRingue/>}/>
       <Route path='Olim2024' element={<Olim2024/>}/>
       <Route path='Esportes' element={<Esportes/>}/>
       <Route path='Curiosidades' element={<Curio/>}/>
       <Route path='Login' element={<LoginPage/>}/>
       <Route path='Funciona' element={<FuncionamentoOlim/>}/>
       <Route path='BrasilOlim' element={<BrasilOlim/>}/>
       <Route path='copa' element={<CopaMundo/>}/>
       <Route path='assedio' element={<Espanha/>}/>
       <Route path='para' element={<ParaOlim/>}/>
       <Route path='BestFifa' element={<FIFA/>}/>
       <Route path='pan' element={<Pan/>}/>
       <Route path='marta' element={<Marta/>}/>
       <Route path='neymar' element={<Ney/>}/>
       <Route path='mulheres' element={<Mulher/>}/>
       <Route path='doping' element={<Doping/>}/>
     </Routes>
  );
}

export default App;
