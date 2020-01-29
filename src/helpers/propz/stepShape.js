import PropTypes from 'prop-types';

const stepShape = PropTypes.shape({
  id: PropTypes.string,
  description: PropTypes.string,
  orderNumber: PropTypes.number,
});

export default { stepShape };
