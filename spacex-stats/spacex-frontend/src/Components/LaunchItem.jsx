import PropTypes from 'prop-types'
import classNames from 'classnames'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'


function LaunchItem({ id, date, name, success}) {
    return (
    <div className='card card-body mb-3'>
        <div className="row">
            <div className="col-md-9">
                <h4>Mission: <span className={classNames({
                    'text-success': success,
                    'text-danger' : !success
                })}>{name}</span></h4>
                <p>Date: <Moment format='YYYY-MM-DD HH:mm'>{date}</Moment></p>
            </div>
            <div className="col-md-3">
                <Link to={`/launch/${id}`} className='btn btn-primary'>Launch Details</Link>
            </div>
        </div>
    </div>
  )
}

LaunchItem.propTypes = {
    id: PropTypes.string,
    date: PropTypes.string,
    name: PropTypes.string,
    success: PropTypes.bool
}

export default LaunchItem


