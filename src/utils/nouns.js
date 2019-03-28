export const randomize = x => {
  var y = Math.floor(Math.random() * Math.floor(x.length));
  return x[y];
};