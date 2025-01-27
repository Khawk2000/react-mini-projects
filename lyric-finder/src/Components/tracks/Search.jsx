import { useState } from "react";
import { Consumer } from "../../context";
import axios from "axios";

const Search = () => {
  const [trackTitle, setTrackTitle] = useState("");
  
  const findTrack = (dispatch) => (e) => {
    e.preventDefault()
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
          import.meta.env.VITE_MUSIXMATCH_API_KEY
        }`
      )
      .then((res) => {
        dispatch({
            type: 'SEARCH_TRACKS',
            payload: res.data.message.body.track_list
        });
        setTrackTitle('')

      })
      .catch((err) => console.log(err));
  }
  
  return (
    <Consumer>
      {value => {
        const { dispatch } = value
        return (
          <div className="card card-body mb-4 p-4">
            <h1 className="display-4 text-center">
              <i className="fas fa-music"></i> Search For A Song
            </h1>
            <p className="lead text-center">Get the lyrics for any song</p>
            <form onSubmit={findTrack(dispatch)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Song title..."
                  name="trackTitle"
                  value={trackTitle}
                  onChange={(e) => setTrackTitle(e.target.value)}
                />
              </div>
              <button className="btn btn-primary btn-lg mt-3 mb-3 w-100">Get Track Lyrics</button>
            </form>
          </div>
        );
      }}
    </Consumer>
  );
};

Search.propTypes = {};

export default Search;
