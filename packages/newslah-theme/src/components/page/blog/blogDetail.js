import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

import HeadMeta from "../../headMeta";
import BlogRelated from "./blogRelated";

const BlogDetail = (props) => {
        const blog = props.request.data;
        const Html2React = props.libraries.html2react.Component;
        const headMeta = blog.header;
        return(
                <>
                        <HeadMeta headMeta={headMeta} />
                        <Content className="detail-blog">
                                <div className="wrapper">
                                        <figure><img src={blog.img} /></figure>
                                        <div className="caption">
                                                <div className="cat">
                                                        <Link link={"/news/category/" + blog.category.slug}>{blog.category.title}</Link>
                                                </div>
                                                <h1>{blog.title}</h1>
                                                <div className="date">
                                                        <span>{blog.date}</span>
                                                </div>
                                                <div className="txt">
                                                        <Html2React html={blog.content} />
                                                </div>
                                        </div>
                                </div>
                        </Content>
                        <BlogRelated data={props}/>
                </>
        )
}

export default connect(BlogDetail);

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
        .cat{
                margin-bottom:8px;
        }
        .cat a{
                text-transform:uppercase;
                font-size: 14px;
                font-family: 'Ubuntu';
                color: #3b3b3b;
        }
        .cat a:hover{
                text-decoration: underline;
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
        .date{
                margin-bottom: 15px;
        }
`