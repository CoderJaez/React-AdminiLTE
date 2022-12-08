import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./components/routes/AppRoutes";

function App() {
  return (
    <div>
      <AuthProvider>
        {/* Navigation */}
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
