import './home.scss';
import Background from '../assets/Chan-bg-img.png'

const Home = () => {
    return (
        <div className="container">
            <div classname="">
                <div className="image-container">
                    <img src={Background} alt="" style={{width: "100vw", opacity: "0.7"}}/>
                </div>
                <div className="content-container">
                    <div className="heading-container">
                        <h1 style={{color: "white"}}>CHANDIGARH</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
