import Header from './components/Header'
import Footer from './components/Footer'
import BannerPage from './components/BannerPage';
function App() {
  return (
    <div>
      <Header/>
      <BannerPage/>
      <Footer/>
      {/* <div className="container-fluid">
      <div class="row">
        <div class="col-sm-6 order-sm-2">
        </div>
        <div class="col-sm-6 order-sm-1">
        </div>
      </div>
      </div> */}
    </div>
  );
}

export default App;
