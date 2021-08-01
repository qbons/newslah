import { connect, styled } from "frontity";
import HeadMeta from "../headMeta";


const RegularPage = ({state, libraries}) => {
        const req = state.source.get(state.router.link);
        const page = req.data;
        const Html2React = libraries.html2react.Component;
        const headMeta = page.header;
        return (
                <>
                        <HeadMeta headMeta={headMeta} />
                        <Content className="detail-blog">
                                <div className="wrapper">
                                        <figure><img src={page.img} /></figure>
                                        <div className="caption">
                                                <h1>{page.title}</h1>
                                                <div className="txt">
                                                        <Html2React html={page.content} />
                                                </div>
                                        </div>
                                </div>
                        </Content>
                </>
        )
}

export default connect(RegularPage);

const Content = styled.div `
        figure{
                margin-bottom: 20px;
        }
        img{
                width: 100%;
                height: auto;
        }
        h1{
                margin-bottom:10px;
                line-height: 130%;
                font-size: 24px;
        }
        .txt{
                line-height: 180%;
        }
        .txt > *{
                margin-top: 15px;
                display: block;
        }
        .txt > *:first-of-type{
                margin: 0;
        }
        .txt a{
                color: #000;
                text-decoration: underline;
        }
`