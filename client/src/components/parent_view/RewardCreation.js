import "../../stylesheets/parent/create_task.css";

import apis from "../../api";
import { Link } from "react-router-dom";

const { Component } = require("react");

class ParentRewardCreate extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            category: "",
            coins: 0
        };
    }

    render() {
        const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;

            this.setState({ [name]: value });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            const picked = this.state;
            picked["coins"] = Number(picked["coins"]);
            console.log(picked);
            apis.insertReward(picked)
                .then((window.location = "/parent/rewards"))
                .catch((err) => console.log(err));
        };
        
        return (
            <div className="parent-main-container">
                <div className="navbar">
                    <h4 className="title">TrackYourChild</h4>
                    <ul className="tabs">
                        <Link to="/parent">
                            <li>Children</li>
                        </Link>
                        <Link to="/parent/tasks">
                            <li>Tasks</li>
                        </Link>
                        <Link to="/parent/rewards">
                            <li>Rewards</li>
                        </Link>
                    </ul>
                    <div className="navbar-footer">
                        Copyright © 2022
                        <br />
                        TrackYourChild
                    </div>
                </div>

                <div className="parent-task-create-container">
                    <h4>Create a new reward</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <label>Name:</label>
                            <textarea
                                name="name"
                                onChange={handleChange}
                                type="text"
                                required
                            ></textarea>
                        </div>

                        <div className="form-row">
                            <label>Category:</label>
                            <input
                                name="category"
                                onChange={handleChange}
                                type="text"
                                required
                            ></input>
                        </div>

                        <div className="form-row">
                            <label>Coins:</label>
                            <input
                                type="number"
                                name="coins"
                                onChange={handleChange}
                                required
                            ></input>
                        </div>

                        <button type="submit">Create</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default ParentRewardCreate;
