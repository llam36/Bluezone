import './App.css';

function App() {
  
  return (
    <div className="App">
      <div>  
        <header className = "App-Title">
          <h1 style={{paddingRight: "50px"}}>BLUEZONE</h1>
        </header>
      </div>

      <div className="wrap">
        <button class="button"
                onClick = {event =>  window.location.href='http://127.0.0.1:5500/HackGT8/index.html'}
                >DASHBOARD 
        </button>
      </div>
      
      <header className="App-header">
        <p className = "Statement"
            style={{paddingTop: "8vh"}}>
          This website is created to be used as a tool to combat misinformation
          <p>during the COVID-19 pandemic regarding the vacinacion among Americans</p>
        </p>
      </header>
    </div>
  );
}

export default App;
