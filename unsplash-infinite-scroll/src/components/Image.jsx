import PropTypes from 'prop-types'

export default function Image({ image }) {
  return <img className='single-photo' src={image.urls.thumb} alt='Not Working'/>
}


Image.propTypes = {
    image: PropTypes.obj
}