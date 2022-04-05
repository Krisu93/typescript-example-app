import React from 'react';
import EmployeeContent from "./components/EmployeeContent";

const App:React.FC = () => {
    const regions: string[] = ["Asia", "Central Europe", "North Europe", "UK", "USA"];

  return (
    <div className="main-content">
      <EmployeeContent regions={regions}/>
    </div>
  );
}

export default App;
