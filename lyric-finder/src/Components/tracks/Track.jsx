import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Track = ({ track }) => {
  return (
    <div className="col-md-6">
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5>{track.artist_name}</h5>
        <p className="card-text">
          <strong>
            <i className="fas fa-play"></i> Track
          </strong>
          : {track.track_name}
          <br></br>
          <strong>
            <i className="fas fa-compact-disc"></i> Album
          </strong>
          : {track.album_name}
        </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark w-100" type="button"
          >
            <i className="fas fa-chevron-right"></i> View Lyrics
          </Link>
      </div>
    </div>
  </div>
  )
}

Track.propTypes = {
    track: PropTypes.object
}

export default Track
