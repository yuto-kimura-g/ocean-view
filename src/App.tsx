import { Suspense, lazy } from 'react';
// import GeoEarth from './components/GeoEarth'
import Loading from './components/Loading';
const GeoEarth = lazy(() => import('./components/GeoEarth'));

function App() {
  return (
    <div className="w-full h-screen">
      <Suspense fallback={<Loading />}>
        <GeoEarth />
      </Suspense>
    </div>
  );
}

export default App;
