import React from 'react';
import Select from 'react-select'; 

const options = [
 
  {value: '.net' , label: '.net'},
  {value: 'Android' , label: 'Android'},
  {value: 'BD' , label: 'BD'},
  {value: 'BA' , label: 'BA'},
  {value: 'DBS' , label: 'DBS'},
  {value: 'Database', label: 'Database'},
  {value: 'Big Data' , label: 'Big Data'},
  {value: 'HR' , label: 'HR'},
  {value: 'Incident Management' , label: 'Incident Management'},
  {value: 'Mobile' , label: 'Mobile'},
  {value: 'PHP' , label: 'PHP'}

];

export class MultiSelect extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      selectedOption: null,
    }
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        isMulti={true}
      />
    );
  }
}