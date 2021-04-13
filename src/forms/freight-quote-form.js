import React, { Component } from "react";
import "./CSS-Forms/style.css";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import firebase from "../api/config";
import Select from "react-select";

import {
  SHIPPING_MODE,
  SHIPPING_MOVEMENT_TYPE,
  SHIPPING_INCOTERM,
  SHIPPING_PACKAGE_TYPE,
  SHIPPING_UNIT,
  SHIPPING_TYPES,
  HAZARDOUS_GOODS_AND_CLASS,
  CURRENCY,
} from "../data";

export default class Freight_Quote_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movementType: "",
      modeType: "",
      incotermType: "",
      checkedItems: [],
      selectedOptions: [],
      handlePersonalGoods: false,
      handleEventCargo: false,
      hazardousGoods: false,
      pickupLocation: "",
      dropoffLocation: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const itemsRef = firebase.firestore().collection("Freight_Form");
    const item = {
      description: this.state.description,
      pickupLocation: this.state.pickupLocation,
      dropoffLocation: this.state.dropoffLocation,
      selectedOptions: this.state.selectedOptions,
      handlePersonalGoods: this.state.handlePersonalGoods,
      handleEventCargo: this.state.handleEventCargo,
      hazardousGoods: this.state.hazardousGoods,
    };
    itemsRef.add(item);
    this.setState({
      description: "",
      pickupLocation: "",
      dropoffLocation: "",
      selectedOptions: [],
      handlePersonalGoods: "",
      handleEventCargo: "",
      hazardousGoods: "",
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

  handleOperable = (operable) => {
    this.setState({ operable: !this.state.operable });
  };

  handleOperable = (operable) => {
    this.setState({ operable: !this.state.operable });
  };

  handleEventCargo = (operable) => {
    this.setState({ operable: !this.state.operable });
  };

  handlePersonalGoods = (operable) => {
    this.setState({ operable: !this.state.operable });
  };

  handleHazardousGoods = (hazardousGoods) => {
    this.setState({ hazardousGoods: !this.state.hazardousGoods });
  };

  render() {
    return (
      <div>
        <form className="main" onSubmit={this.handleSubmit}>
          <section className="background_div_layer">
            <div className="gen-container">
              <p>movement</p>
              <Select
                options={SHIPPING_MOVEMENT_TYPE}
                onChange={this.handleSelectChange}
              />
            </div>

            <div className="gen-container">
              <p>mode</p>
              <Select
                options={SHIPPING_MODE}
                onChange={this.handleSelectChange}
              />
            </div>

            <div className="gen-container">
              <p>incoterm</p>
              <Select
                options={SHIPPING_MODE}
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
            <p className="title">What are you shipping?</p>
            <div className="row">
              <div className="gen-container">
                <p>Package type</p>
                <Select
                  options={SHIPPING_PACKAGE_TYPE}
                  onChange={this.handleSelectChange}
                />
              </div>

              <div className="gen-container">
                <p>Units</p>
                <Select
                  options={SHIPPING_UNIT}
                  onChange={this.handleSelectChange}
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

          <section className="background_div_layer">
            <h2>Cargo Description</h2>
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
                <p>Hazardous Goods</p>
                <input
                  className="checkbox-label"
                  type="checkbox"
                  id="HazardousGoods"
                  onChange={this.handleHazardousGoods}
                />
              </label>

              <label>
                <p>Event Cargo</p>
                <input
                  className="checkbox-label"
                  type="checkbox"
                  id="EventCargo"
                  onChange={this.handleEventCargo}
                />
              </label>

              <label>
                <p>Personal Goods</p>
                <input
                  className="checkbox-label"
                  type="checkbox"
                  id="PersonalGoods"
                  onChange={this.handlePersonalGoods}
                />
              </label>
            </div>
          </section>

          <section className="gen-container">
            <p>Hazardous Materials and good classes</p>
            <Select
              options={HAZARDOUS_GOODS_AND_CLASS}
              onChange={this.handleSelectChange}
            />

            <div className="gen-container">
              <p>Currency</p>
              <Select options={CURRENCY} onChange={this.handleSelectChange} />
            </div>
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
                this.handleHazardousGoods,
                this.handlePersonalGoods,
                this.handleEventCargo
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
