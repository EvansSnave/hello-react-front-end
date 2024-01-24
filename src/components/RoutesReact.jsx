import { Route, Routes } from 'react-router-dom';
import Greetings from './Greetings';

const RoutesReact = () => (
  <Routes>
    <Route path="/" element={<Greetings />} />
  </Routes>
);

export default RoutesReact;
