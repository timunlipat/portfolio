import About from './(routes)/about/page';
import PortfolioPage from './(routes)/portfolio/page';
import HeroSection from './components/hero-section/HeroSection';

const Page = () => {
    return (
        <>
            <div className='h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
                <div className='snap-start h-screen'>
                    <HeroSection />
                </div>
                <div className='snap-start h-screen'>
                    <About />
                </div>
            </div>
            <PortfolioPage />
        </>
    );
};

export default Page;
