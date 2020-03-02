import React from "react";

import { Consumer } from '../index';

const InputTwo = ({ value, onChange }) => (
  <input
    value={value}
    onChange={event => onChange({ value: event.target.value })}
    style={{ width: "100%", fontSize: "1.5em" }}
  />
);
export default () => (
    <Consumer>
      {({ apellido, setApellido }) => (
        <div>
          <InputTwo value={apellido} onChange={setApellido} />
        </div>
      )}
    </Consumer>
  );