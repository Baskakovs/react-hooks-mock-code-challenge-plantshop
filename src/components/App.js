import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;

/* Componentns:

    App
    |_Header
    |_PlantPage (set the state here)
        |_NewPlantForm (PATCH here)
        |_Search
        |_PlantList 
          |_Plant Card
*/
