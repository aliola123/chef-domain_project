
import { Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import './Home.css'; 

function Home() {
  return (
    <div className="home">
      <div className="home-toolbar">
        <Button startIcon={<FileDownloadIcon />} color="inherit">
          Export
        </Button>
      </div>
      <div className="home-content">
        <h1>Welcome to Chef Domain</h1>
        <p>Explore our delicious recipes and culinary delights.</p>
      </div>
    </div>
  );
}

export default Home;
