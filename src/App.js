import React from 'react';
import AppRouter from './screens/AppRouter';
import { AppContextProvider } from './components/utils/AppContext';
// import 'normalize.css/normalize.css';
import './styles/styles.scss';

const App = () => <AppContextProvider render= {appContext => <AppRouter />} />

export default App
