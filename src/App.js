import './App.css';
//assets
import shawnImg from './assets/images/testimonio-shawn.png'
import sarahImg from './assets/images/testimonio-sarah.png'
import emmaImg from './assets/images/testimonio-emma.png'
// components
import CardTestimony  from './components/CardTestimony'


function App() {
  return (
    <div className="App">
      <main className='Container'>
        <h1 className='Title'>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <CardTestimony
          name='Shawn Wang'
          country='Singapur'
          image={ shawnImg }
          role='Ingeniero de Software'
          company=""
          testimony='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
        />
        <CardTestimony
          name='Sarah Chima'
          country='Nigeria'
          image={ sarahImg }
          role='Ingeniera de Software'
          company='ChatDesk'
          testimony='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'/>
        <CardTestimony
          name='Emma Bostian'
          country='Suecia'
          image={ emmaImg }
          role='Ingeniera de Software'
          company='Spotify'
          testimony='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'/>
      </main>
    </div>
  );

}


export default App;
