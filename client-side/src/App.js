import MainPage from './main/MainPage';

function App() {

  const handleUploadComplete = (title, serverFilePath) => { 
    setVideoTitle(title);
    setUploadedVideoFile(serverFilePath); 
    setStep("edit");
  };

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
