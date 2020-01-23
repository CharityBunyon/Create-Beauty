import PropTypes from 'prop-types';

const ratingShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
});

export default { ratingShape };
