import React from 'react';
const ReactDOM = require('react-dom');
let id = 0;

class Radio extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.id = id++;
  }

  onChange(e) {
    this.props.updateProps({ value: e.target.value });
  }

  render() {
    const { idyll, hasError, updateProps, options, value, ...props } = this.props;

    return (
      <div {...props}>
        {options.map((d) => {
          if (typeof d === 'string') {
            return <label key={d}><input type="radio" checked={d === value} onChange={this.onChange} value={d} name={this.id} />{d}</label>;
          }
          return <label key={d.value}><input type="radio" checked={d.value === value} onChange={this.onChange} value={d.value} name={this.id} />{d.label || d.value}</label>;
        })}
      </div>
    );
  }
}

Radio.defaultProps = {
  options: []
};


Radio._idyll = {
  name: "Radio",
  tagType: "closed",
  props: [{
    name: "value",
    type: "string",
    example: "x"
  }, {
    name: "options",
    type: "array",
    example: '`["option1", "option2"]`'
  }]
}

export default Radio;
