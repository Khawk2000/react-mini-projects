import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Layout/Spinner";
import Moment from 'react-moment'


const Lyrics = () => {
  const { id } = useParams();
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${
          import.meta.env.VITE_MUSIXMATCH_API_KEY
        }`
      )
      .then((res) => {
        setLyrics(res.data.message.body.lyrics);
        return axios
          .get(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${
              import.meta.env.VITE_MUSIXMATCH_API_KEY
            }`
          )
          .then((res) => {
            setTrack(res.data.message.body.track);
            setLoading(false);
          });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {loading && <Spinner />}
      {!loading && (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {track.track_name} by{" "}
              <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID</strong>: {track.album_id}
            </li>
            <li className="list-group-item">
              <strong>Genre </strong>:{" "}
              {track.primary_genres.music_genre_list.length > 0 ? track.primary_genres.music_genre_list[0].music_genre.music_genre_name : 'N/A'
              }
            </li>
            <li className="list-group-item">
              <strong>Album ID</strong>: {track.album_id}
            </li>
            <li className="list-group-item">
              <strong>Explicit</strong>: {track.explicit === 0 ? "No" : "Yes"}
            </li>
            <li className="list-group-item">
              <strong>Release Date</strong>: <Moment format="YYYY/MM/DD">{track.updated_time}</Moment> 
            </li>
          </ul>
        </React.Fragment>
      )}
    </div>
  );
};

export default Lyrics;
