import BusinessDevelopment from "./components/BusinessDevelopment";
import DRDOInitiatives from "./components/DRDOInitiatives";
import DrdoOrgChart from "./components/DrdoOrgChart";
import DrdoOrgSection from "./components/DrdoOrgSection";
import StrategicPositioning from "./components/StrategicPositioning";
import ToolsPlatforms from "./components/ToolsPlatforms";
// import DrdoTechVerticals from "./components/DrdoTechVerticals";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <DrdoOrgSection />
      <DrdoOrgChart />
      <DRDOInitiatives />
      <StrategicPositioning />
      <BusinessDevelopment />
      <ToolsPlatforms />
    </div>
  );
}

export default App;
