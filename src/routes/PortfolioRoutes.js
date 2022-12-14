import DownloadCV from '../components/DownloadCV/DownloadCV';
import MainComponent from '../components';

// ==============================|| PORTFOLIO ROUTING ||============================== //

const PortfolioRoutes = {
    path: '/',
    element: <MainComponent />,
    children: [
        {
            path: '/',
            element: <DownloadCV />
        }
    ]
};

export default PortfolioRoutes;
