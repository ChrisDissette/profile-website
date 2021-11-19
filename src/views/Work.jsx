import Header from '../components/Header'
import Footer from '../components/Footer'
import PortfolioMobile from '../components/PortfolioMobile'
import PortfolioPhablet from '../components/PortfolioPhablet'
import PortfolioTablet from '../components/PortfolioTablet'
import PortfolioDesktop from '../components/PortfolioDesktop'
import { layoutGenerator } from 'react-break';


const layout = layoutGenerator({
    mobile: 0,
    phablet: 600,
    tablet: 900,
    desktop: 1200,
    tv: 1536
});

const OnMobile = layout.is('mobile')
const OnAtLeastTablet = layout.is('tablet')
const OnAtMostPhablet = layout.is('phablet')
const OnDesktop = layout.isAtLeast('desktop')




const Work = () => {
    return (
        <div>
            <Header />
            
                <OnMobile>
                    <PortfolioMobile />
                </OnMobile>

                <OnAtMostPhablet>
                    <PortfolioPhablet />
                </OnAtMostPhablet>

                <OnAtLeastTablet>
                    <PortfolioTablet />
                </OnAtLeastTablet>

                <OnDesktop>
                    <PortfolioDesktop />
                </OnDesktop>

            <Footer />
        </div>
    )
}

export default Work
