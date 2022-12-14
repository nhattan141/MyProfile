import { useRoutes } from 'react-router-dom';

// project import
import PortfolioRoutes from './PortfolioRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([PortfolioRoutes]);
}