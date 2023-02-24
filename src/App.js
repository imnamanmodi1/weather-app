import "./stylesheets/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppData from "./components/AppData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <Header />
      </header>
      <AppData />
      <Footer />
    </div>
  );
}

export default App;
