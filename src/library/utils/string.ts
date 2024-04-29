/** @format */

String.prototype.unquote = function (): string {
  return this.replace(/"/g, "");
};

String.prototype.capitalize = function (
  params = { allowMiddleUpperCase: true }
): string {
  let value = this.valueOf();
  if (!params.allowMiddleUpperCase) {
    value = value.toLowerCase();
  }
  return value
    .split(" ")
    .map((name) => {
      return name.charAt(0).toUpperCase() + name.slice(1);
    })
    .toString()
    .replace(/,/g, " ");
};
