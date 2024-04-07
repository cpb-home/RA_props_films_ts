import './App.css'
import Stars from './components/Stars/Stars'

function App() {

  return (
    <>
      <div className="filmCard">
        <div className='filmCard__img'>
          Картинка<br />
          Передаём 2 звезы
        </div>
        <Stars count={2} />
      </div>
      <div className="filmCard">
        <div className='filmCard__img'>
          Картинка<br />
          Передаём 4 звезы
        </div>
        <Stars count={4} />
      </div>
      <div className="filmCard">
        <div className='filmCard__img'>
          Картинка<br />
          Передаём 0 звёзд
        </div>
        <Stars count={0} />
      </div>
      <div className="filmCard">
        <div className='filmCard__img'>
          Картинка<br />
          Передаём 7 звёзд
        </div>
        <Stars count={7} />
      </div>
    </>
  )
}

export default App;
