import React from "react";

import { Consumer } from '../index';

const Input = ({ value, onChange }) => (
  <input
    value={value}
    onChange={event => onChange({ value: event.target.value })}
    style={{ width: "100%", fontSize: "1.5em" }}
  />
);
export default () => (
    <Consumer>
      {({ name, setName }) => (
        <div>
          <Input value={name} onChange={setName} />
        </div>
      )}
    </Consumer>
  );