import React, { Component } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./CSS-Forms/style.css";
import firebase from "../api/config";
import Select from "react-select";
import { OPTIONS } from "../data";

export default class Vehicle_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      pickupLocation: "",
      dropoffLocation: "",
      selectedOptions: [],
      modified: false,
      convertable: false,
      operable: false,
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

  handleModified = (modified) => {
    this.setState({ modified: !this.state.modified });
  };

  handleConvertable = (convertable) => {
    this.setState({ convertable: !this.state.convertable });
  };

  handleOperable = (operable) => {
    this.setState({ operable: !this.state.operable });
  };

  handleSubmit(e) {
    e.preventDefault();

    const itemsRef = firebase.firestore().collection("Vehicle_Form");
    const item = {
      description: this.state.description,
      pickupLocation: this.state.pickupLocation,
      dropoffLocation: this.state.dropoffLocation,
      selectedOptions: this.state.selectedOptions,
      operable: this.state.operable,
      convertable: this.state.convertable,
      modified: this.state.modified,
    };
    itemsRef.add(item);
    this.setState({
      description: "",
      pickupLocation: "",
      dropoffLocation: "",
      selectedOptions: [],
      Operable: "",
      convertable: "",
      modified: "",
    });
  }

  render() {
    return (
      <div>
        <form className="main" onSubmit={this.handleSubmit}>
          <section className="background_div_layer">
            <div className="gen-container">
              <p>body type</p>
              <Select options={OPTIONS} onChange={this.handleSelectChange} />
            </div>
          </section>

          <section className="background_div_layer">
            <h2>Description</h2>
            <input
              className="inputClass"
              type="text"
              name="description"
              placeholder="description"
              onChange={this.handleChange}
            />
          </section>

          <section className="background_div_layer">
            <div className="row">
              <label>
                <p>Modified</p>
                <input
                  className="checkbox-label"
                  type="checkbox"
                  id="Modified"
                  onChange={this.handleModified}
                />
              </label>

              <label>
                <p>Convertable</p>
                <input
                  className="checkbox-label"
                  type="checkbox"
                  id="Convertable"
                  onChange={this.handleConvertable}
                />
              </label>

              <label>
                <p>Operable</p>
                <input
                  className="checkbox-label"
                  type="checkbox"
                  id="Operable"
                  onChange={this.handleOperable}
                />
              </label>
            </div>
          </section>

          <section className="background_div_layer">
            <h2>Pickup location</h2>
            <input
              className="inputClass"
              type="text"
              name="pickupLocation"
              placeholder="pickupLocation"
              onChange={this.handleChange}
            />
            <h2>Dropoff location</h2>
            <input
              className="inputClass"
              type="text"
              name="dropoffLocation"
              placeholder="dropoffLocation"
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
                this.state.selectedOptions,
                this.handleModified,
                this.handleConvertable,
                this.handleOperable
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
