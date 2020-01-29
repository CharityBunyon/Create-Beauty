import React from 'react';
import './Routine.scss';


const Routine = ({ lookSteps, stepsChange, handleRoutine }) => (
  <div className="form-group productArea">
    <p htmlFor="look-products col-6" className="titles">
      The Routine:
    </p>
    <div>
    <label className="stepTitle">Step 1</label>
      <input
        type='text'
        name='step1'
        className="form-control textareaStyles"
        onChange={handleRoutine}
        placeholder="Enter Routine"
        key="step1"
      />
    </div>
    <div>
    <label className="stepTitle">Step 2</label>
      <input
        type='text'
        name='step2'
        className="form-control textareaStyles"
        onChange={handleRoutine}
        placeholder="Enter Routine"
        key="step2"
      />
    </div>
    <div>
    <label className="stepTitle">Step 3</label>
      <input
        type='text'
        name='step3'
        className="form-control textareaStyles"
        onChange={handleRoutine}
        placeholder="Enter Routine"
        key="step3"
      />
    </div>
    <div>
    <label className="stepTitle">Step 4</label>
      <input
        type='text'
        name='step4'
        className="form-control textareaStyles"
        onChange={handleRoutine}
        placeholder="Enter Routine"
        key="step4"
      />
    </div>
    <div>
    <label className="stepTitle">Step 5</label>
      <input
        type='text'
        name='step5'
        className="form-control textareaStyles"
        onChange={handleRoutine}
        placeholder="Enter Routine"
        key="step5"
      />
    </div>
    <div>
    <label className="stepTitle">Step 6</label>
      <input
        type='text'
        name='step6'
        className="form-control textareaStyles"
        onChange={handleRoutine}
        placeholder="Enter Routine"
        key="step6"
      />
    </div>
    <div>
    <label className="stepTitle">Step 7</label>
      <input
        type='text'
        name='step7'
        className="form-control textareaStyles"
        onChange={handleRoutine}
        placeholder="Enter Routine"
        key="step7"
      />
    </div>
    <div>
    <label className="stepTitle">Step 8</label>
      <input
        type='text'
        name='step8'
        className="form-control textareaStyles"
        onChange={handleRoutine}
        placeholder="Enter Routine"
        key="step8"
      />
    </div>
  </div>
);

export default Routine;
