import { Route, Routes } from 'react-router-dom'
import AppShell from './components/AppShell.jsx'
import BusinessPage from './pages/BusinessPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ItineraryPage from './pages/ItineraryPage.jsx'
import MapPage from './pages/MapPage.jsx'
import OnboardingPage from './pages/OnboardingPage.jsx'
import PlannerPage from './pages/PlannerPage.jsx'
import PlusOnePage from './pages/PlusOnePage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<OnboardingPage />} />
      <Route element={<AppShell />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/plus-one" element={<PlusOnePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
      </Route>
    </Routes>
  )
}
