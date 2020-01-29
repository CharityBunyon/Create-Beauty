import PropTypes from 'prop-types';

const lookShape = PropTypes.shape({
  id: PropTypes.string,
  uid: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
<<<<<<< HEAD
  products: PropTypes.array.isRequired,
=======
  steps: PropTypes.array.isRequired,
  products: PropTypes.string.isRequired,
>>>>>>> 0f187a05cced1b7c1beab425b286dd94f8c82df6
  share: PropTypes.bool.isRequired,
});

export default { lookShape };
