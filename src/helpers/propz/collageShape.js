import PropTypes from 'prop-types';

const ratingShape = PropTypes.shape({
  uid: PropTypes.string,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  social: PropTypes.string.isRequired,
});

export default { ratingShape };
