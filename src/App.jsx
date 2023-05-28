import logo from './logo.svg';
import Header from './Header/Header';
import Main from './Main/Main';
import Teams from './Teams/Teams';
import Players from './Players/Players';
import Games from './Games/Games';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
	<>
	<Header></Header>
	<Routes>
		<Route path='/' element={<Main/>} />
		<Route path='/players'element={<Players/>} />
		<Route path='/teams' element={<Teams/>} />
		<Route path='/games' element={<Games/>}/>
	</Routes>
	</>
	
  ) 
}
export default App;
