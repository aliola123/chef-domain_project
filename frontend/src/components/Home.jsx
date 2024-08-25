import MenuCarousel from './MenuCarousel ';
import '../App.css/Home.css'; 



function Home() {
  return (
    <div className="home">
      <div className="home-toolbar">
        
      </div>
      <div className="home-content">
        <h1>Welcome to Chef Domain</h1>
        <p>Explore our delicious recipes and culinary delights.</p>
      </div>
      <MenuCarousel />
    </div>
  );
}

export default Home;

