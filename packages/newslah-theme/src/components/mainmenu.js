import {  styled } from "frontity";
import Link from "@frontity/components/link";

const Mainmenu = (props) => {
        const nav = props.menu;
        return(
                <Menu className="mainmenu">
                        <ul>
                                {nav.map((item) => {
                                        return (
                                                <li key={item.id}>
                                                        {item.slug != '#' ? <Link link={item.slug} onClick={props.onclick}>{item.title}</Link> : <a href="#" onClick={props.onclick}>{item.title}</a>}
                                                        { item.child !== undefined && 
                                                                <ul>
                                                                        {item.child.map((child1) => {
                                                                                return (
                                                                                        <li key={child1.id}>
                                                                                                <Link link={child1.slug} onClick={props.onclick}>{child1.title}</Link>
                                                                                                { child1.child !== undefined && 
                                                                                                        <ul>
                                                                                                                {child1.child.map((child2) => {
                                                                                                                        return (
                                                                                                                                <li key={child2.id}>
                                                                                                                                        <Link link={child2.slug} onClick={props.onclick}>{child2.title}</Link>
                                                                                                                                </li>
                                                                                                                        )
                                                                                                                })}
                                                                                                        </ul>
                                                                                                }
                                                                                        </li>
                                                                                )
                                                                        })}
                                                                </ul>
                                                        }
                                                </li>
                                        )
                                })}
                                {/* {nav.map((item) => {
                                        return <li key={item.id}><Link link={"/news/category/"+item.slug} onClick={actions.theme.toggleMobileMenu}>{item.title}</Link></li>
                                })} */}
                        </ul>
                </Menu>
        )
}

export default Mainmenu;

const Menu = styled.div `
        float: right;
        li{
                display: inline-block;
                vertical-align: middle;
                margin-left: 30px;
                position: relative;
        }
        li:first-of-type{margin: 0;}
        li a{
                color: #626262;
                text-transform: uppercase;
                transition:color 0.2s ease-in;
        }
        li a:hover{
                color: #bdc3c7;
        }
        li ul a{
                text-transform: none;
                display: block;
                padding: 7px 15px;
        }
        li ul{
                position: absolute;
                left: -15px;
                background: #f0f0f0;
                min-width: 150px;
                padding: 7px 0;
                display: block;
                opacity: 0;
                visibility: hidden;
                transition:all 0.2s ease-in;
        }
        li:hover > ul{
                opacity: 1;
                visibility: visible;
        }
        li ul li{
                display:block;
                position: relative;
                margin: 0;
        }
        li ul li:after{
                display:block;
                position: absolute;
                right: -10px;
                top: 0;
                content: '';
                width:10px;
                height:100%;
        }
        li ul ul{
                left: auto;
                right: calc(-100% - 5px );
                top: 0;
        }
        li ul ul ul{
                display: none;
        }
        
        @media (max-width: 768px) {
                position: fixed;
                background: #f0f0f0;
                top: 38px;
                width: 100%;
                left: 0;
                padding: 20px 20px 40px;
                text-align: center;
                display: none;
                height: calc(100vh - 38px);
                overflow-y: scroll;
                z-index: 9;

                & > ul > li{
                        display: block;
                        margin: 20px 0 0;
                }
                li ul{
                        opacity: 1;
                        visibility: visible;
                        position: relative;
                        left: auto;
                }
                li ul ul{
                        right: auto;
                        top: auto;

                }
                li ul a{
                        display: inline-block;
                }
        }
`
