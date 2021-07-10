import React, { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

const IceHotButton = () => {
  const [radioValue, setRadioValue] = useState('ICE');

  const radios = [
    { name: 'ICE', value: 'ICE' },
    { name: 'HOT', value: 'HOT' },
  ];

  return (
    <div>
      <ButtonGroup toggle>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default IceHotButton;
