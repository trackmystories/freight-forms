import React, { Component } from "react";
import "./CSS-Forms/style.css";
import firebase from "../api/config";
import Select from "react-select";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import {
  RESIDENCE_TYPE,
  PICKUP_FLOOR_TYPE,
  DELIIVERY_STORIES,
  NUMBER_OF_BEDROOMS,
} from "../data";

export default class Moves_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      selectedOptions: [],
      pickupLocation: "",
      dropoffLocation: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();

    const itemsRef = firebase.firestore().collection("Moves_Form");
    const item = {
      description: this.state.description,
      selectedOptions: this.state.selectedOptions,
      pickupLocation: this.state.pickupLocation,
      dropoffLocation: this.state.dropoffLocation,
    };
    itemsRef.add(item);
    this.setState({
      description: "",
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
  render() {
    return (
      <div>
        <form className="main" onSubmit={this.handleSubmit}>
          <section className="background_div_layer">
            <div className="gen-container">
              <p>Residence type</p>
              <Select
                options={RESIDENCE_TYPE}
                onChange={this.handleSelectChange}
              />
            </div>
          </section>

          <section className="background_div_layer">
            <div className="gen-container">
              <p>Delivery Stories</p>
              <Select
                options={DELIIVERY_STORIES}
                onChange={this.handleSelectChange}
              />
            </div>
          </section>

          <section className="background_div_layer">
            <div className="gen-container">
              <p>Number of bedrooms</p>
              <Select
                options={NUMBER_OF_BEDROOMS}
                onChange={this.handleSelectChange}
              />
            </div>
          </section>

          <section className="background_div_layer">
            <div className="gen-container">
              <p>Pickup floor type</p>
              <Select
                options={PICKUP_FLOOR_TYPE}
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
            <input
              className="inputClass"
              type="text"
              name="description"
              placeholder="description"
              onChange={this.handleChange}
            />
          </section>

          <button
            type="submit"
            className="button"
            onSubmit={() =>
              this.writeUserData(
                this.state.description,
                this.state.pickupLocation,
                this.state.dropoffLocation,
                this.state.selectedOptions
              )
            }
          >
            <span>Continue</span>
          </button>
        </form>
      </div>
    );
  }
}
