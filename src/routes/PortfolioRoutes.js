import Home from '../components/Home/Home';
import MainComponent from '../components';

// ==============================|| PORTFOLIO ROUTING ||============================== //

const PortfolioRoutes = {
    path: '/',
    element: <MainComponent />,
    children: [
        {
            path: '/',
            element: <Home />
        }
    ]
};

export default PortfolioRoutes;
