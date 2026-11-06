import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { FavouriteProvider } from "./context/FavouriteContext";

function App() {
  return (
    <BrowserRouter>
      <FavouriteProvider>
        <AppRoutes />
      </FavouriteProvider>
    </BrowserRouter>
  );
}

export default App;
