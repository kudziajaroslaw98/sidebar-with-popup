import { useCallback } from "react";

interface StrengthBarProps {
  value: number;
}

const StrengthBar = (props: StrengthBarProps) => {
  const strengthText = [
    "Bardzo słabo",
    "Słabo",
    "Średnio",
    "Dobrze",
    "Bardzo dobrze",
  ];

  const textColors = [
    "text-red-500",
    "text-orange-500",
    "text-yellow-500",
    "text-teal-500",
    "text-green-500",
  ];

  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-teal-500",
    "bg-green-500",
  ];

  const getStrength = useCallback(() => {
    if (props.value >= 0 && props.value < 5) {
      return props.value > 0 ? props.value - 1 : 0;
    } else {
      return 4;
    }
  }, [props.value]);

  return (
    <div className="flex gap-2 items-center">
      <span
        data-testid="strength-text"
        className={`${textColors[getStrength()]} text-sm font-medium`}
      >
        {strengthText[getStrength()]}
      </span>

      <div
        role="progressbar"
        aria-valuenow={getStrength()}
        data-testid="strength-bar"
        className="flex gap-1"
      >
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            data-testid="strength-bar-pill"
            className={`flex w-2 h-1 rounded-full ${
              index < props.value ? colors[getStrength()] : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default StrengthBar;
