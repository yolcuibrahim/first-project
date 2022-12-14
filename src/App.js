
import './App.css';
import Card from './component/Card/Card';
import Header from './component/Header/Header';


function App() {
  return (
    <div className='App'>
      <Header />
      <div className='cards'>
        <Card title="araba" description= "hızlı" />
        <Card title="telefon" description="akıllı"/>
        <Card title="bilgisayar" description="yeni nesil"/>
        <Card title="elma" description="yeşil"/>
        <Card title="bardak" description="cam"/>
        <Card title="kalem" description="tükenmez"/>

      </div>
    </div>
  );
}

export default App;
