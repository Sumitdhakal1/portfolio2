
import "../../styles/home/home.scss";
const Home = () => {
  return (
    <div className="container">
      <div className="warpper">
        <div className="font-info">
          <span className="font-name">Neue Helvetica</span>
          <div className="f-details">
            <span>59 styles</span>
            <span>•</span>
            <span className="by-linotype">By Linotype</span>
          </div>
        </div>
        <div className="product-labels">
          <div className="bestseller">#1 Bestseller</div>
          <div className="off">5% off</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
