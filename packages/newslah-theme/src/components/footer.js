import { connect, styled } from "frontity";
import Link from "@frontity/components/link";


import iconFB from "../assets/img/fb.png";
import iconTW from "../assets/img/tw.png";
import iconIG from "../assets/img/ig.png";

const Footer = ({state}) => {
        const optReq = state.source.get("option");
        const opt =optReq.data;
        const menu = opt.menu.footer;

        return(
                <FooterContent id="bottom">
                        <div className="wrapper clearfix">
                                <ul>
                                        {menu.map((item) => {
                                                return <li key={item.id}><Link link={item.slug}>{item.title}</Link></li>
                                        })}
                                </ul>
                                <div className="social">
                                        <span>Follow</span>
                                        <a href={opt.fb} className="fb" target="_blank"></a>
                                        <a href={opt.tw} className="tw" target="_blank"></a>
                                        <a href={opt.ig} className="ig" target="_blank"></a>
                                </div>
                        </div>
                </FooterContent>
        )
}

export default connect(Footer);

const FooterContent = styled.footer `
        background: #f0f0f0;
        padding: 20px 0;

        ul{
                float: left;
        }
        li{
                display: inline-block;
                margin: 0 20px 0 0;
        }
        li a{
                color: #000;
                transition:color 0.2s ease-in;
        }
        li a:hover{
                color: #bdc3c7;
        }
        .social{
                float: right;
        }
        .social > *{
                display: inline-block;
                vertical-align: middle;
                margin-left: 15px;
                color: #000;
                position: relative;
        }
        .social a{
                opacity: 1;
                transition:opacity 0.2s ease-in;
        }
        .social a:hover{
                opacity: .7;
        }
        a.fb{
                width: 8px;
                height: 14px;
                background: url(${iconFB}) no-repeat;
        }
        a.tw{
                width: 18px;
                height: 13px;
                background: url(${iconTW}) no-repeat;
                top: 1px;
        }
        a.ig{
                width: 15px;
                height: 15px;
                background: url(${iconIG}) no-repeat;
                top: 1px;
        }
        @media (max-width: 768px) {
                ul,
                .social{
                        float: none;
                        text-align: center;
                }
                .social{
                        margin-top: 8px;
                }
                .social > *{
                        margin: 0 5px;
                }
        }
`