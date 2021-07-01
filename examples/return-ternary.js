const f1 = () => {
  console.log("test");
  if (a) {
    return x;
  }
  return y;
};

const f2 = () => {
  console.log("test");
  if (a) {
    return x;
  } else {
    return y;
  }
};

const f3 = () => {
  console.log("test");
  if (a) {
    return x;
  }

  return b ? y : z;
};
