import { useCallback } from "react";
import { isString, convertPxToNumber } from "./utils";
type PreloaderProps = {
  variant?: "circle" | "box";
  label?: string | null;
  size?: number | string;
  color?: string | string[];
};

const Preloader: React.FC<PreloaderProps> = ({
  variant,
  label,
  size,
  color
}) => {
  const isArray = useCallback(() => {
    if (Array.isArray(color)) return true;
    return false;
  }, [color]);

  const Element = useCallback(
    () => (
      <>
        <div
          style={{
            width: isString(size),
            height: isString(size),
            borderWidth: size ? (convertPxToNumber(size) / 100) * 5 : 5,
            borderTopColor: isArray() ? (color?.[0] as any) : color
          }}
          className={variant as string}
        >
          <div
            style={{
              borderWidth: size ? (convertPxToNumber(size) / 100) * 5 : 5,
              borderTopColor: isArray() ? (color?.[1] as any) : color
            }}
            className={`${variant}Absloute`}
          ></div>
        </div>
        {label && <span className="label">{label}</span>}
      </>
    ),
    [variant, label, size, color, isArray]
  );

  return <Element />;
};

Preloader.defaultProps = {
  size: 100,
  label: "LOADING ....",
  variant: "circle",
  color: ["#eee", "#00000"]
};
export default Preloader;
