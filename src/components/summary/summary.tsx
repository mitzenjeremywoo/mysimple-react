import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hook";

import { selectCount } from "../counter/counterslice";

export function Summary() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>Summary</div>
      <div>{count}</div>
    </div>
  );
}
