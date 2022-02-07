import React, { forwardRef, useState } from "react";
import SVG from "react-inlinesvg";
import eyeSVG from "./eye.svg";
import eyeCloseSVG from "./eyeClose.svg";
import "./style.module.less";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { type, ...otherProps } = props;
    const [showPassword, setShowPassword] = useState(false);

    let localType = type;
    if (type === "password" && showPassword) {
      localType = "text";
    }

    return (
      <div className="bit-input">
        <input type={localType} {...otherProps} ref={ref} />
        {type === "password" && (
          <span
            className="eye"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            <SVG src={showPassword ? eyeSVG : eyeCloseSVG} />
          </span>
        )}
      </div>
    );
  }
);
