import { Global, css } from "frontity";

import fontUbuntuWoff from "../fonts/Ubuntu-Light.woff";
import fontUbuntuWoff2 from "../fonts/Ubuntu-Light.woff2";
import fontPlayFairDisplayBoldWoff from "../fonts/PlayfairDisplay-Bold.woff";
import fontPlayFairDisplayBoldWoff2 from "../fonts/PlayfairDisplay-Bold.woff2";
import fontPlayFairDisplayRegularWoff from "../fonts/PlayfairDisplay-Regular.woff";
import fontPlayFairDisplayRegularWoff2 from "../fonts/PlayfairDisplay-Regular.woff2";

const Styling = () => {
        return(
                <>
                        <Global
                                styles={css`
                                        html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
                                        :before,:after,html *{-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;-moz-osx-font-smoothing: grayscale; /*(For Firefox)*/-webkit-font-smoothing: antialiased; /*(For Chrome and Safari)*/}
                                        .clearfix::after,
                                        .clear{clear: both;display: block;height: 0;width: 100%;float: none !important;}
                                        .clearfix::after{content:  '';}
                                        input::-moz-focus-inner /*Remove button padding in FF*/{ border: 0;padding: 0;}
                                        a{text-decoration: none;outline: 0 !important;}
                                        a:hover{color: inherit;text-decoration: none;}
                                        img{max-width: 100%;vertical-align: top;}
                                        *:focus ,
                                        textarea,
                                        input,
                                        textarea:focus, input:focus{outline: none;border-radius: 0}
                                        input[type=number]::-webkit-outer-spin-button,
                                        input[type=number]::-webkit-inner-spin-button {-webkit-appearance: none !important;margin: 0;}
                                        input[type=number] {-moz-appearance:textfield !important;}
                                        input::placeholder{ 
                                                color: #cacdc8;
                                                opacity:1;
                                        }
                                        textarea::placeholder{ 
                                                color: #cacdc8;
                                                opacity: 1;
                                        }
                                        ::-moz-placeholder {
                                                opacity: 1;
                                        }
                                        @font-face {
                                                font-family: 'Playfair Display';
                                                src: url('${fontPlayFairDisplayBoldWoff2}') format('woff2'),
                                                url('${fontPlayFairDisplayBoldWoff}') format('woff');
                                                font-weight: 700;
                                                font-style: normal;
                                                font-display: swap;
                                        }
                                    
                                        @font-face {
                                                font-family: 'Playfair Display';
                                                src: url('${fontPlayFairDisplayRegularWoff2}') format('woff2'),
                                                url('${fontPlayFairDisplayRegularWoff}') format('woff');
                                                font-weight: 400;
                                                font-style: normal;
                                                font-display: swap;
                                        }
                                    
                                        @font-face {
                                                font-family: 'Ubuntu';
                                                src: url('${fontUbuntuWoff2}') format('woff2'),
                                                url('${fontUbuntuWoff}') format('woff');
                                                font-weight: 300;
                                                font-style: normal;
                                                font-display: swap;
                                        }
                                        body{
                                                background: #fff;
                                                color: #626262;
                                                font-size: 14px;
                                                font-family: 'Playfair Display';
                                                font-weight:  400;
                                                position: static;
                                                overflow-y:auto
                                        }
                                        .wrapper{
                                                max-width: 900px;
                                                width: 100%;
                                                margin: 0 auto;
                                        }
                                        
                                        .rowflex{
                                                display: flex;
                                                flex-wrap: wrap;
                                        }
                                        .rowflex > *{
                                                flex: 1;
                                        }
                                        #body{
                                                padding: 50px 0 80px;
                                        }
                                        @media (max-width: 959px) {
                                                .wrapper{
                                                        max-width: 100%;
                                                        padding-left: 30px;
                                                        padding-right: 30px;
                                                }
                                        }
                                        @media (max-width: 768px) {
                                                .wrapper{
                                                        padding-left: 15px;
                                                        padding-right: 15px;
                                                }
                                                .menu-mobile{
                                                        width: 20px;
                                                        height: 15px;
                                                        position: relative;
                                                        display: inline-block;
                                                        top: 3px;
                                                }
                                                .menu-mobile .menu-bar b:after,
                                                .menu-mobile .menu-bar b:before,
                                                .menu-mobile .menu-bar b{
                                                        position: absolute;
                                                        width: 100%;
                                                        height: 2px;
                                                        left: 0;
                                                        top: 6px;
                                                        background: #000;
                                                        display: block;
                                                }
                                                .menu-mobile .menu-bar b{
                                                        -webkit-transition:background 300ms ;
                                                        -moz-transition:background 300ms ;
                                                        -o-transition:background 300ms ;
                                                        -ms-transition:background 300ms ;
                                                        transition:background 300ms ;
                                                }
                                                .menu-mobile .menu-bar b:after,
                                                .menu-mobile .menu-bar b:before{
                                                        content: '';
                                                        -webkit-transition:top 300ms 300ms, transform 300ms 0ms, -webkit-transform 300ms 0ms, background 300ms;
                                                        -moz-transition:top 300ms 300ms, transform 300ms 0ms, -webkit-transform 300ms 0ms, background 300ms;
                                                        -o-transition:top 300ms 300ms, transform 300ms 0ms, -webkit-transform 300ms 0ms, background 300ms;
                                                        -ms-transition:top 300ms 300ms, transform 300ms 0ms, -webkit-transform 300ms 0ms, background 300ms;
                                                        transition:top 300ms 300ms, transform 300ms 0ms, -webkit-transform 300ms 0ms, background 300ms;
                                                }
                                                
                                                .menu-mobile .menu-bar b:after{
                                                        top: 6px;
                                                }
                                                .menu-mobile .menu-bar b:before{
                                                        top: -6px;
                                                }

                                                .open-menu .menu-mobile  .menu-bar b:after,
                                                .open-menu .menu-mobile  .menu-bar b:before{
                                                        top:0;
                                                        -webkit-transition:top 300ms 0ms, transform 300ms 300ms, -webkit-transform 300ms 300ms, background 300ms;
                                                        -moz-transition:top 300ms 0ms, transform 300ms 300ms, -webkit-transform 300ms 300ms, background 300ms;
                                                        -o-transition:top 300ms 0ms, transform 300ms 300ms, -webkit-transform 300ms 300ms, background 300ms;
                                                        -ms-transition:top 300ms 0ms, transform 300ms 300ms, -webkit-transform 300ms 300ms, background 300ms;
                                                        transition:top 300ms 0ms, transform 300ms 300ms, -webkit-transform 300ms 300ms, background 300ms;
                                                        left: 0;
                                                }
                                                .open-menu .menu-mobile  .menu-bar b{
                                                        background: rgba(0,0,0,0);
                                                }
                                                .open-menu .menu-mobile  .menu-bar b:after{
                                                        -ms-transform: rotate(45deg); /* IE 9 */
                                                        -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
                                                        transform: rotate(45deg);
                                                }
                                                .open-menu .menu-mobile  .menu-bar b:before{
                                                        -ms-transform: rotate(-45deg); /* IE 9 */
                                                        -webkit-transform: rotate(-45deg); /* Chrome, Safari, Opera */
                                                        transform: rotate(-45deg);
                                                }

                                                .open-menu .mainmenu{
                                                        display: block;
                                                }
                                                #body{
                                                        padding: 60px 0 50px;
                                                }
                                        }
                                `}
                        />
                </>
        )
}

export default Styling;