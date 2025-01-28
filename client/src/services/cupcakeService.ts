export const fecthCupcakes = async () => {
  const response = await fetch("http://localhost:3310/api/cupcakes");
  if (!response.ok) {
    throw new Error("failed to fetch cupcakes");
  }
  return response.json();
};
