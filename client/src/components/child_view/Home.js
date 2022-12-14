import "../../stylesheets/child/home.css";
import { Coin, Lion, Stock, TaskList, Gift, Investment } from "../svg";
import { Link } from "react-router-dom";
import apis from '../../api'

const { Component } = require("react");

class Home extends Component {
    constructor() {
        super();
        this.state = {
            child: {}
        }
    }

    componentDidMount = async () => {
        await apis.getChildById("636f37e2484eeae6e3b92bd1")
                  .then((res) => this.setState({child: res.data.data}))
                  .catch((err) => console.log(err))
    }

    render() {
        const child = this.state.child
        return (
            <div className="main-container">
                <Link to='/'><h4 className="title">TrackYourChild</h4></Link>
                <div className="sub-container">
                    <div className="profile">
                        <img alt="img" src={Lion} />
                        <h4>Good morning</h4>
                        <h4 style={{ color: "var(--main3)" }}> {child.name}</h4>

                        <div className="profile-card">
                            <h4>Your Progress</h4>
                            <div>
                                <img alt="img" src={Coin} />
                                <h4>{child.coins}</h4>
                            </div>
                            <div>
                                <img alt="img" src={Stock} />
                                <h4>+50</h4>
                            </div>
                            <h4>{child.coins > 0 ? "Keep up the good work!" : "You can do better than that!"}</h4>
                        </div>
                    </div>
                    <div className="button-container">
                        <Link to="/earn">
                            <button id={"earn"}>
                                <img alt="img" src={TaskList} />
                                <h4>Earn Coins</h4>
                            </button>
                        </Link>
                        <Link to="/use">
                            <button id={"use"}>
                                <img alt="img" src={Gift} />
                                <h4>Use Coins</h4>
                            </button>
                        </Link>
                        <Link to="/invest">
                            <button id={"invest"}>
                                <img alt="img" src={Investment} />
                                <h4>Invest Coins</h4>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
