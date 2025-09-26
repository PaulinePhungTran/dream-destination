import "./App.css";
import DestinationCard from "./components/DestinationCard";
import DESTINATIONS from "./data/destinations";

function App() {
  return (
    <div className="page">
      <header className="hero">
        <h1 className="title">🛫 Dream Destination 🛬</h1>
        <p className="tagline">Ten unique and fun places for you to experiences</p>
      </header>

      <main className="content">
        <section className="grid">
          {DESTINATIONS.map((item) => (
            <DestinationCard key={item.id} {...item} />
          ))}
        </section>
      </main>

      <footer className="footer">
        <small>
          Built for Week 1: Community Board — Theme: Dream Destination
        </small>
      </footer>
    </div>
  );
}

export default App;
