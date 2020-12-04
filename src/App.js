import './App.css';
import { useTranslation } from 'react-i18next';
function App() {
  const { t, i18n } = useTranslation();
  const toggleLng = ()=>{
      i18n.languages.map(item=>{
        if(item!==i18n.language){
          i18n.changeLanguage(item);
          return;
        }
      })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('Welcome to React')}</h1>
        <button onClick={toggleLng}>toogle</button>
      </header>
    </div>
  );
}

export default App;
