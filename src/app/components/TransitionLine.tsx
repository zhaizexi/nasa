import { forwardRef, useImperativeHandle, useState, memo } from "react";

interface Props {
  activeIndex: number;
}

export default memo(function TransitionLine(props:Props) {
  return (
    <div key={props.activeIndex} className="h-[2px] bg-white w-full animate-slide-in"></div>
  )
});
