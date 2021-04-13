import React, { Component } from "react";
import "./CSS-Forms/style.css";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import firebase from "../api/config";
import Select from "react-select";

import { SIZE_UNIT, WEIGHT_UNIT } from "../data";

export default class House_Hold_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      furniture: "",
      length: "",
      width: "",
      height: "",
      weight: "",
      selectedOptions: [],
      number: "",
      pickupLocation: "",
      dropoffLocation: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const itemsRef = firebase.firestore().collection("House_Hold_Form");
    const item = {
      furniture: this.state.furniture,
      length: this.state.length,
      width: this.state.width,
      height: this.state.height,
      number: this.state.number,
      weight: this.state.weight,
      pickupLocation: this.state.pickupLocation,
      dropoffLocation: this.state.dropoffLocation,
      selectedOptions: this.state.selectedOptions,
    };
    itemsRef.add(item);
    this.setState({
      furniture: "",
      length: "",
      width: "",
      height: "",
      number: "",
      weight: "",
      pickupLocation: "",
      dropoffLocation: "",
      selectedOptions: [],
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSelectChange = (tag) => {
    this.setState({
      selectedOptions: [tag],
    });
  };

  render() {
    return (
      <div>
        <form className="main" onSubmit={this.handleSubmit}>
          <section className="background_div_layer">
            <div className="gen-container">
              <p>size</p>
              <Select options={SIZE_UNIT} onChange={this.handleSelectChange} />
            </div>

            <div className="gen-container">
              <p>Weight</p>
              <Select
                options={WEIGHT_UNIT}
                onChange={this.handleSelectChange}
              />
            </div>
          </section>

          <section className="background_div_layer">
            <p className="title">Where are you shipping from?</p>
            <div className="row">
              <div className="width">
                <input
                  className="inputClass"
                  type="text"
                  name="origin"
                  placeholder="origin"
                  onChange={this.handleChange}
                />
              </div>

              <div className="width">
                <input
                  className="inputClass"
                  type="text"
                  name="city"
                  placeholder="city"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </section>

          <section className="background_div_layer">
            <p className="title">Where are you shipping to?</p>
            <div className="row">
              <div className="width">
                <input
                  className="inputClass"
                  type="text"
                  name="origin"
                  placeholder="origin"
                  onChange={this.handleChange}
                />
              </div>

              <div className="width">
                <input
                  className="inputClass"
                  type="text"
                  name="city"
                  placeholder="city"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </section>

          <section className="background_div_layer">
            <div className="row">
              <div className="sml-wrapper">
                <input
                  className="inputClass"
                  type="text"
                  name="quantity"
                  placeholder="quantity"
                  onChange={this.handleChange}
                />
              </div>
              <div className="sml-wrapper">
                <input
                  className="inputClass"
                  type="text"
                  name="length"
                  placeholder="length"
                  onChange={this.handleChange}
                />
              </div>
              <div className="sml-wrapper">
                <input
                  className="inputClass"
                  type="text"
                  name="height"
                  placeholder="height"
                  onChange={this.handleChange}
                />
              </div>
              <div className="sml-wrapper">
                <input
                  className="inputClass"
                  type="text"
                  name="width"
                  placeholder="width"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </section>

          <button
            type="submit"
            className="button"
            onSubmit={() =>
              this.writeUserData(
                this.state.furniture,
                this.state.length,
                this.state.width,
                this.state.height,
                this.selectedOptions,
                this.number
              )
            }
          >
            <span>Submit</span>
          </button>
        </form>
      </div>
    );
  }
}
