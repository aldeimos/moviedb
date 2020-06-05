export const shuffleArray = (arr) => {
  const shallowCopy = [...arr];
  let j;
  for (let i = shallowCopy.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    [shallowCopy[j], shallowCopy[i]] = [shallowCopy[i], shallowCopy[j]];
  }
  return shallowCopy;
};

