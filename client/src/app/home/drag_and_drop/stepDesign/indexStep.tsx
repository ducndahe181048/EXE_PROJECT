import Stepper from './Stepper';

const steps = [
    { label: 'Choose Items' },
    { label: 'Choose Card' },
    { label: 'Done' }
];

<Stepper steps={steps} currentStep={0} />

export default indexStep
