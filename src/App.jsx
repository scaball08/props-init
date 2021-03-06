import Saludo from './components/Saludo'
import Comentario from "./components/Comentario" 

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona="sergio"  edad={14} />
      <Saludo persona="luis"  edad={19} />
      <Saludo persona="angel"  edad={10} />
      <hr/>
      <Comentario
      urlImg="https://i.picsum.photos/id/1/64/64.jpg?hmac=7ChCAGHjVSfIFEvKkAoAQynKqHSps7T5mcKfmb06ips" 
      persona="sergio"
      texto="Lorem ipsum dolor sit, amet consectetur adipisicing."
      />
      <Comentario
      urlImg="https://i.picsum.photos/id/1/64/64.jpg?hmac=7ChCAGHjVSfIFEvKkAoAQynKqHSps7T5mcKfmb06ips" 
      persona="Angel"
      texto="Lorem ipsum dolor sit, amet consectetur adipisicing."
      />
      <Comentario
      urlImg="https://i.picsum.photos/id/1/64/64.jpg?hmac=7ChCAGHjVSfIFEvKkAoAQynKqHSps7T5mcKfmb06ips" 
      persona="Luis"
      texto="Lorem ipsum dolor sit, amet consectetur adipisicing."
      />

    </div>
  );
}

export default App;
