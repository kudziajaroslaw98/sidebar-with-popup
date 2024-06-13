import { CheckCircleSolid, InfoCircleSolid } from "iconoir-react";
import StrengthBar from "../strength-bar/strength-bar";

const StrengthIndicator = ({ strength }: { strength: number }) => {
  return (
    <div className="flex flex-col gap-2">
      <StrengthBar value={strength} />

      {strength < 5 && (
        <div className="flex items-center gap-2">
          <InfoCircleSolid className="text-gray-400 size-4 min-w-4" />
          <p className="text-xs font-medium text-gray-500">{`Zbyt mało tagów. Dodaj jeszcze ${
            5 - strength
          } aby poprawić widoczność artykułu`}</p>
        </div>
      )}

      {strength >= 5 && (
        <div className="flex items-center gap-2">
          <CheckCircleSolid className="text-green-500 size-4 min-w-4" />
          <p className="text-xs font-medium text-green-500">{`Wystarczającą liczba tagów została dodana`}</p>
        </div>
      )}
    </div>
  );
};

export default StrengthIndicator;
