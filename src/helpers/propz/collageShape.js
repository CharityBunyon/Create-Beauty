import PropTypes from 'prop-types';

const collageShape = PropTypes.shape({
  uid: PropTypes.string,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  social: PropTypes.string.isRequired,
});

export default { collageShape };
