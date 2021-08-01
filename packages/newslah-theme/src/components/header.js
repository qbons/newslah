import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

import Mainmenu from './mainmenu';

const Header = ({state, actions}) => {

        function toggleMenu(e){
                e.preventDefault();
                actions.theme.toggleMobileMenu();
        }
        const optReq = state.source.get("option");
        const opt =optReq.data;
        const nav =opt.menu.header;
        
        return(
                <>
                        <HeaderContent>
                                <div className="wrapper clearfix">
                                        <div className="logo"><Link link="/"><img src={opt.logo} alt="logo" /></Link></div>
                                        <MobileTrigger className="mobile-trigger"><a href="#" className="menu-mobile" onClick={toggleMenu}><span className="menu-bar"><b></b></span></a></MobileTrigger>
                                        <Mainmenu menu={nav} onclick={actions.theme.toggleMobileMenu} />
                                </div> 
                        </HeaderContent>
                </>
        )
}

export default connect(Header);

const HeaderContent = styled.header`
        padding: 20px 0;
        background: #f0f0f0;

        .logo{
                float: left;
        }
        @media (max-width: 768px) {
                padding: 10px 0;
                position: fixed;
                z-index: 9;
                top: 0;
                left: 0;
                width: 100%;
                .logo{
                        position: relative;
                        top: 3px;
                }
                .logo img{
                        max-width:60%;
                }
        }
`
const MobileTrigger = styled.div `
        display: none;
        @media (max-width: 768px) {
                display: block;
                float: right;
        }
`