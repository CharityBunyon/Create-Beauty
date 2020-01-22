import PropTypes from 'prop-types';

const lookShape = PropTypes.shape({
  id: PropTypes.string,
  uid: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  share: PropTypes.bool.isRequired,
});

export default { lookShape };
