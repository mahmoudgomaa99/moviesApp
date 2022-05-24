import { AnyAction } from "@reduxjs/toolkit";

const getActionMainType = (action: AnyAction) => {
  const typeParts = (action as any).type.split("/");
  console.log(typeParts);
  typeParts.pop();
  return typeParts.join("/");
};

export { getActionMainType };
