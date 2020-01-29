import React from 'react';
import stepShape from '../../../helpers/propz/stepShape';
import './Steps.scss';


class Looks extends React.Component {
  static propTypes = {
    step: stepShape.stepShape,
  }


  render() {
    const { step } = this.props;

    return (
    <div className="">
      <p>{step.orderNumber}. {step.description}</p>
    </div>
    );
  }
}

export default Looks;
