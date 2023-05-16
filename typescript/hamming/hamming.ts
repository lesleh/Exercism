export function compute(left: string, right: string): number {
  const leftArray = left.split("");
  const rightArray = right.split("");

  if (leftArray.length !== rightArray.length) {
    throw new Error("DNA strands must be of equal length.");
  }

  let hamming = 0;
  for (let i = 0; i < leftArray.length; ++i) {
    if (leftArray[i] !== rightArray[i]) ++hamming;
  }

  return hamming;
}
