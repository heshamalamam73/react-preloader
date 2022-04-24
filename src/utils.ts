export const isString = (i: any) => {
  if (typeof i === "string") {
    if (i.includes("px")) return i;
    return i + "px";
  }
  return i;
};

export const convertPxToNumber = (i: number | string) => {
  if (typeof i === "number") return i;
  return Number(i.replace(/px$/, ""));
};
