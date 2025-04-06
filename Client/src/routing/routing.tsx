import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "@/components/Loader";

const LandingPage = lazy(() => import('@/pages/Landing'));
const QrPage = lazy(() => import('@/pages/Qr'));
const ChatPage = lazy(() => import('@/pages/Chat'));

const AppRouter = () => {
    return (
      <Suspense fallback={<Loader color="rgba(30, 144, 255, 1)" size={20} />}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/scan" element={<QrPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </Router>

        </Suspense>
    );
}

export default AppRouter;