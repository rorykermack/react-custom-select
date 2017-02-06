import React from 'react';
import CustomSelect from './src/customSelect.react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const customSelectOptions1 = [
      {text: 'Option One', value: 1 },
      {text: 'Option Two', value: 2 },
      {text: 'Option Three', value: 3 }
    ];

    const customSelectOptions2 = [
      {text: 'Option One', value: 1 },
      {text: 'Option Two', value: 2, default: true },
      {text: 'Option Three', value: 3 }
    ];

    return(
      <section className="react-custom-select-test-page">
        <h1>React Custom Select Examples:</h1>
        <CustomSelect options={customSelectOptions1} /> &nbsp; &nbsp;
        <CustomSelect options={customSelectOptions2} selectorShown/>
      </section>
    );
  }
}
