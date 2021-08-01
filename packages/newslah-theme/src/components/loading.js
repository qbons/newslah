import { styled } from "frontity";

const Loading = () => {
        return(
                <LoadingSpinner>
                        <div className="centered">
                                <div className="ldr">
                                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                </div>
                        </div>
                </LoadingSpinner>
        )
}

export default Loading;

const LoadingSpinner = styled.div `
        position: relative;
        width: 100%;
        height: 75vh;

        .centered{
                position: absolute;
                left: 0;
                width: 100%;
                text-align: center;
                top: 50%;
                -ms-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
        }
        .ldr {
                display: inline-block;
                position: relative;
                width: 64px;
                height: 64px;
        }
        .ldr div {
                position: absolute;
                width: 13px;
                height: 13px;
                border-radius: 50%;
                background: #bfbfbf;
                animation: animate-loading-grid 1.2s linear infinite;
        }
        .ldr div:nth-of-type(1) {
                top: 6px;
                left: 6px;
                animation-delay: 0s;
        }
        .ldr div:nth-of-type(2) {
                top: 6px;
                left: 26px;
                animation-delay: -0.4s;
        }
        .ldr div:nth-of-type(3) {
                top: 6px;
                left: 45px;
                animation-delay: -0.8s;
        }
        .ldr div:nth-of-type(4) {
                top: 26px;
                left: 6px;
                animation-delay: -0.4s;
        }
        .ldr div:nth-of-type(5) {
                top: 26px;
                left: 26px;
                animation-delay: -0.8s;
        }
        .ldr div:nth-of-type(6) {
                top: 26px;
                left: 45px;
                animation-delay: -1.2s;
        }
        .ldr div:nth-of-type(7) {
                top: 45px;
                left: 6px;
                animation-delay: -0.8s;
        }
        .ldr div:nth-of-type(8) {
                top: 45px;
                left: 26px;
                animation-delay: -1.2s;
        }
        .ldr div:nth-of-type(9) {
                top: 45px;
                left: 45px;
                animation-delay: -1.6s;
        }
        @keyframes animate-loading-grid{
                0%, 100% {
                        opacity: 1;
                }
                50% {
                        opacity: 0.5;
                }
        }
`