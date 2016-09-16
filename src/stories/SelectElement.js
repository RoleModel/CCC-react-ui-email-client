import React from 'react';
import Select2 from 'react-select2';
import 'react-select2/css/select2.css';

class SelectElement extends React.Component {


  render() {
    return (
      <Select2 data={['bug', 'feature', 'documents', 'discussion']} />
    )
  }
}

export default SelectElement;
