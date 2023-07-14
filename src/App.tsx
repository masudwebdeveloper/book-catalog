import MainLayout from "./layouts/MainLayout";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
};

export default App;
