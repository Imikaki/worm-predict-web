import React from "react";
import { ProcessInput } from "../Backend";
import * as Options from "./Options";

class Form extends React.Component {
    state = {
        ChooseModel: "",
        ChooseLocation: "",
        ChooseDate: "",
        ChooseAge: "",
    };

    handleChange = (event: any) => {
        const {
            name,
            value
        } = event.target;
        
        this.setState({
            [name]: value,
        });
    }

    results = null;

    handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(this.state);
        console.log(this.state.ChooseAge);
        alert("Submitted");
        this.results = ProcessInput(this.state);
        console.log(this.results);
    }



    render() {
        let {
            ChooseModel,
            ChooseLocation,
            ChooseDate,
            ChooseAge,
        } = this.state;
        return (
            <div className="form">
                <div>
                    <p>
                        Welcome to predict app. 
                        Please fill in the form below to get the prediction.
                    </p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="model>">Choose Model</label>
                        <select id="model" name="ChooseModel" value={ChooseModel} onChange={this.handleChange}>
                            {Options.selectModel}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="location">Choose Location</label>
                        <select id="location" name="ChooseLocation" value={ChooseLocation} onChange={this.handleChange}>
                            {Options.selectLocation}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="date">Choose Date</label>
                        <input type="date" id="ChooseDate" name="ChooseDate" value={ChooseDate} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="age">Choose Age</label>
                        <select id="age" name="ChooseAge" value={ChooseAge} onChange={this.handleChange}>
                            {Options.selectAge}
                        </select>
                    </div>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;