import About from './(routes)/about/page';
import PortfolioPage from './(routes)/portfolio/page';
import HeroSection from './components/hero-section/HeroSection';

const Page = () => {
    return (
        <>
            <HeroSection />
            <About />
            <PortfolioPage />
        </>
    );
};

export default Page;
