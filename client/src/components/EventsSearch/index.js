import React, { Component } from "react";
import Axios from "axios";

import Search from "./Search/index";
import Carousel from "./Carousel/index";
// import StarRatingComponent from "react-star-rating-component";

import { Row, Col, Fade } from "react-bootstrap";

import "./style.css";

export default class EventsSearch extends Component {
  state = {
    filter: "Filter",
    disabled: true,
    searchInput: "",
    introTitle: "Find and event",
    introText:
      " Select a filter using the filter drop down above to search for an event by city, location, event name, or conversely select 'Show All Events'",
    showCarousel: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    eventData: [],
    madeRequest: false,
    rating: "0",
  };

  // onStarClick(nextValue) {
  //   this.setState({ rating: nextValue });
  // }

  // postRating = (event) => {
  //   event.preventDefault();
  //   Axios.post("/api/rate/eventsearch", {
  //     rating: this.state.rating,
  //     UserId: 7,
  //     EventId: 7,
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       this.setState({ rating: "0" });
  //     })
  //     .catch((err) => console.log(err));
  // };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleFilterOption = (event) => {
    this.setState({ filter: event.target.innerHTML, disabled: false });
  };

  handleFilterSubmit = (event) => {
    event.preventDefault();
    Axios.get("/api/create/eventcreate").then(
      (response) => {
        this.setState({
          eventData: response.data,
          madeRequest: true,
        });

        if (
          this.state.filter === "Location" &&
          this.state.madeRequest === true
        ) {
          const filteredLocation = this.state.eventData.filter(
            (detail) => detail.city === this.state.searchInput
          );
          this.setState({
            eventData: filteredLocation,
            // colSz: 6,
            introTitle: "",
            introText: "",
            showCarousel: true,
            slidesToShow: filteredLocation.length,
            slidesToScroll: filteredLocation.length,
            madeRequest: false,
            searchInput: "",
          });
        }
        if (
          this.state.filter === "Event Name" &&
          this.state.madeRequest === true
        ) {
          const filteredEv = this.state.eventData.filter(
            (detail) => detail.event_name === this.state.searchInput
          );
          this.setState({
            eventData: filteredEv,
            // colSz: 6,
            showCarousel: true,
            introTitle: "",
            introText: "",
            slidesToShow: filteredEv.length,
            slidesToScroll: filteredEv.length,
            madeRequest: false,
            searchInput: "",
          });
        }
      },
      (error) => {
        this.setState({
          error,
        });
      },
      this.setState({ madeRequest: false, showCarousel: false, open: false })
    );
  };

  handleShowAll = (event) => {
    event.preventDefault();
    Axios.get("/api/create/eventcreate").then(
      (response) => {
        this.setState({
          eventData: response.data,
          madeRequest: true,
        });
      },
      (error) => {
        this.setState({
          error,
        });
      },
      this.setState({ madeRequest: false })
    );
    this.setState({
      introTitle: "",
      introText: "",
      showCarousel: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    });
  };

  render() {
    let renderCarousel = null;
    if (this.state.showCarousel === true) {
      renderCarousel = <Carousel state={this.state} />;
    } else if (this.state.showCarousel === "") {
      renderCarousel = null;
    }
    console.log(this.state.rating);

    return (
      <>
        <Search
          onChange={this.onChange}
          handleFilterOption={this.handleFilterOption}
          handleFilterSubmit={this.handleFilterSubmit}
          handleShowAll={this.handleShowAll}
          postNewEvent={this.postNewEvent}
          state={this.state}
        />

        <Row>
          <Col md={9} id="carouselWrap" className="mx-auto mt-3">
            {/* <Fade in={this.state.open}> */}
            <div>
              <h1 className="text-center">{this.state.introTitle}</h1>
              <p>{this.state.introText}</p>
            </div>
            {/* </Fade> */}
            {renderCarousel}
          </Col>
        </Row>

        {/* <StarRatingComponent
          name="rating"
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
          style={{ fontSize: "50px" }}
        /> */}
        {/* <Button variant="primary" onClick={this.postRating} /> */}
      </>
    );
  }
}
