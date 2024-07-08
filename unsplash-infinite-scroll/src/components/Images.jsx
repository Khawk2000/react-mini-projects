import { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./Image";

export class Images extends Component {
  state = {
    images: [],
    count: 30
  };

  componentDidMount() {
    const { count } = this.state;
    axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=${
          import.meta.env.VITE_ACCESS_KEY
        }&count=${count}`
      )
      .then((res) => this.setState({ images: res.data }))
  }

  fetchImages = () => {
    const { count } = this.state;
    axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=${
          import.meta.env.VITE_ACCESS_KEY
        }&count=${count}`
      )
      .then((res) => this.setState({ images: this.state.images.concat(res.data)}));
  }

  render() {
    console.log(this.state);
    return (
      <div className="images">
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchImages}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.images.map((image) => {
            return <Image key={image.id} image={image}/>
          })}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Images;
