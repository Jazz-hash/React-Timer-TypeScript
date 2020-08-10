import React from "react";
import PropTypes from "prop-types";

type Props = {
  buttonAction: () => void;
  buttonValue: string;
  className: string;
};

export const TimerButton: React.FC<Props> = ({
  buttonAction,
  buttonValue,
  className,
}) => {
  return (
    <div className="button-container" onClick={() => buttonAction()}>
      <p className="button-value">{buttonValue}</p>
    </div>
  );
};

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};
