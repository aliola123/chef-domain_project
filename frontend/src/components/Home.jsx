
import '../App.css/Home.css'; 

function Home() {
  return (
    <div className="home">
      <div className="home-toolbar">
        <button className="export-button">
          <span className="icon">&#x1F4BE;</span> {/* Simple disk icon */}
          Export
        </button>
      </div>
      <div className="home-content">
        <h1>Welcome to Chef Domain</h1>
        <p>Explore our delicious recipes and culinary delights.</p>
      </div>
    </div>
  );
}

export default Home;

