import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

export const CircleLoader = () => {
  const loading = true;
  return (
    <div style={{ marginTop: "20%" }}>
      <PropagateLoader color="#f6be00" loading={loading} />
    </div>
  );
};
