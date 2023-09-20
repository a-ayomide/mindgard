export const processWeights = (weights: string[][] | string[]) => {
  const weightArray = weights && weights.flat();
  const processedWeightString = weightArray && weightArray?.join(' x ');
  return processedWeightString;
};
