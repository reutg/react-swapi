import React from "react";
import { BarChart } from "./components/BarChart/BarChart";
import { Table } from "./components/Table/Table";
import { CircleLoader } from "./CircleLoader";
import { AppContext, AppContextProvider } from "./AppContext";
import "./App.css";
import { ErrorComponent } from "./components/ErrorComponent";

function App() {
  const { isLoading, isError } = React.useContext(AppContext);

  if (isError) {
    return <ErrorComponent />;
  }
  return (
    <div>
      <h1 className="app-header">Star Wars Dashboard</h1>
      {isLoading ? (
        <CircleLoader />
      ) : (
        <>
          <Table />
          <BarChart />
        </>
      )}
    </div>
  );
}

export default App;
