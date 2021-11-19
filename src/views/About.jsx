import Header from '../components/Header'
import Footer from '../components/Footer'
import ProfileLG from '../components/ProfileLG'
import ProfileSM from '../components/ProfileSM'
import { layoutGenerator } from 'react-break';


const layout = layoutGenerator({
    mobile: 0,
    phablet: 600,
    tablet: 900,
    desktop: 1200,
    tv: 1536
});

const OnMobile = layout.is('mobile')
const OnTablet = layout.is('tablet')
const OnPhablet = layout.is('phablet')
const OnDesktop = layout.isAtLeast('desktop')


const About = () => {

    return (
        <div>
            <Header />

            <OnMobile>
                <ProfileSM />
            </OnMobile>

            <OnPhablet>
                <ProfileSM />
            </OnPhablet>

            <OnTablet>
                <ProfileLG />
            </ OnTablet>

            <OnDesktop>
                <ProfileLG />
            </OnDesktop>


            <Footer />
        </div>
    )
}

export default About
