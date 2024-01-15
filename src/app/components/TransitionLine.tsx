import { forwardRef, useImperativeHandle, useState } from "react";

export default forwardRef<{play : () => void}>(function TransitionLine(props,ref) {
  const [key,setKey] = useState(0);
  useImperativeHandle(ref, () => {
    return {
      play: () => {
        setKey(key+1);
      },
    }
  })
  return (
    <div key={key} className="h-[2px] bg-white w-full animate-slide-in"></div>
  )
});
