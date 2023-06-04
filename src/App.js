import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    person: {
      fullName: "Bilel Saida",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc:
        "https://scontent.cdninstagram.com/v/t51.2885-19/344555381_549262797399982_471199601846557651_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=aiX8Pj4snhcAX_1riwv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfAlv2DWJibCcZlnC-CSoxBYdhDmpXS-4rU3zvHiaB8aAw&oe=6495E7EC",
      profession: "Développeur de logiciels",
    },
    show: true,
    mountedTime: null,
  };
  handleShow = () => this.setState({ show: !this.state.show });
  componentDidMount() {
    this.setState({ mountedTime: new Date() });
  }
  render() {
    return (
      <div className="App">
        <div className="buttonContainer ">
          <button onClick={this.handleShow}>Show</button>
        </div>
        {this.state.show ? (
          <div>
            <div className="imageContainer">
              <img src={this.state.person.imgSrc} alt="Photo" />
            </div>
            <p>
              {(new Date() - this.state.mountedTime) / 1000}
              {" seconds"}
            </p>
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
          </div>
        ) : null}
      </div>
    );
  }
}
