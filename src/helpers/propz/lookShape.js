import PropTypes from 'prop-types';

const lookShape = PropTypes.shape({
  id: PropTypes.string,
  uid: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  steps: PropTypes.string.isRequired,
  products: PropTypes.string.isRequired,
  share: PropTypes.string.isRequired,
});

export default { lookShape };
