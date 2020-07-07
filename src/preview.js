import PropTypes from 'prop-types'

export default function Preview({ value }) {
    return <div>{value}</div>
}

Preview.propTypes = {
    value: PropTypes.node,
}
