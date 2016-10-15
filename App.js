import React from 'react';
// import ReduxAccordion from './src/Redux-accordion.jsx';
import CustomSelect from './src/customSelect.react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const customSelectOptions = [
      {text: 'Option One', value: 1},
      {text: 'Option Two', value: 2},
      {text: 'Option Three', value: 3}
    ]
    return(
      <section className="react-custom-select-test-page">
        <h1>React Custom Select Examples:</h1>
        <CustomSelect options={customSelectOptions} />
      </section>
    );
  }
}
