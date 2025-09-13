import BusinessDevelopment from "./components/BusinessDevelopment";
import BusinessGatewayTable from "./components/BusinessGatewayTable";
import DRDOInitiatives from "./components/DRDOInitiatives";
import DrdoOrgChart from "./components/DrdoOrgChart";
import DrdoOrgSection from "./components/DrdoOrgSection";
import SoftwareToolsTable from "./components/SoftwareToolsTable";
import StrategicPositioning from "./components/StrategicPositioning";
import ToolsPlatforms from "./components/ToolsPlatforms";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navabr";
// import DrdoTechVerticals from "./components/DrdoTechVerticals";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <Navbar />
      <DrdoOrgSection />
      <DrdoOrgChart />
      <DRDOInitiatives />
      <BusinessGatewayTable />
      <StrategicPositioning />
      <BusinessDevelopment />
      <ToolsPlatforms />

      <SoftwareToolsTable />
      <Footer />
    </div>
  );
}

export default App;
