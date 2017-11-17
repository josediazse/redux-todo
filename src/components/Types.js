import PropTypes from 'prop-types'

const { shape, number, bool, string } = PropTypes

const todoType = shape({
  id: number.isRequired,
  completed: bool.isRequired,
  text: string.isRequired
})

export default todoType
