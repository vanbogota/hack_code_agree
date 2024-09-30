import './App.css';
import { Header } from './components/Header/Header';
import { MainSection } from './components/MainSection/MainSection';

const App = () => {
  return (
    <>
      <div className="bg-black-900 pb-10">
        <Header />
        <MainSection />
      </div>
    </>
  );
};

export default App;
