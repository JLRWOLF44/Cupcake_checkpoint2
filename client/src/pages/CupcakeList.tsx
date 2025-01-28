import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

// Exemple de données pour tester (Step 0)
const sampleCupcakes = [
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  },
];

type CupcakeArray = typeof sampleCupcakes;

export default function CupcakeList() {
  // Step 1: get all cupcakes
  const cupcakes = (useLoaderData() as CupcakeArray) || []; // Données provenant du loader ou tableau vide par défaut

  console.info("Step 1: Cupcakes fetched from API:", cupcakes);

  // Step 3: get all accessories (extrait les accessoires uniques des cupcakes)
  const accessories = [
    ...new Set(cupcakes.map((cupcake) => cupcake.accessory)),
  ];
  console.info("Step 3: Accessories fetched:", accessories);

  // Step 5: create filter state
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.info("Step 5: Filter value selected:", event.target.value);
  };

  return (
    <>
      <h1>My cupcakes</h1>
      {/* Step 5: Add a filter dropdown */}
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={handleFilterChange}>
            <option value="">---</option>
            {/* Step 4: Add an option for each accessory */}
            {accessories.map((accessory) => (
              <option key={accessory} value={accessory}>
                {accessory}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: Repeat this block for each cupcake */}
        {cupcakes.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            {/* Step 5: Filter cupcakes before repeating */}
            <Cupcake data={cupcake} />
          </li>
        ))}
        {/* End of block */}
      </ul>
    </>
  );
}
