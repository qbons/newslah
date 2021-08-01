import { styled } from "frontity";
import BlogItem from "./blogItem";
import { useState, useEffect } from "react";
import Switch from "@frontity/components/switch";

const BlogRelated = (props) => {
        const { api } = props.data.libraries.source;        
        const [blog, setBlog] = useState([]);
        const [loaded, setLoaded] = useState(false);
        async function fetchBlog(){
                const req = await api.get({
                        endpoint: "/frontity/v1/news",
                        params: { 
                                page: 1,
                                per_page: 6,
                                orderby: "date title",
                                order: "DESC",
                                category: props.data.request.data.category.slug,
                                exclude: [props.data.request.data.id]
                        },
                });
                const res =  await req.json();
                setBlog(res.data.news);
                setLoaded(true);
        }
        useEffect(() => {
                fetchBlog();
        }, [props.data.request.data]);

        return (
                <Switch>
                        <RelatedPostLoading when={!loaded}><div className="lds-facebook">
                                <div></div><div></div><div></div></div>
                        </RelatedPostLoading>
                        <RelatedPosts when={loaded}>
                                <div className="wrapper">
                                        <h2>Related Posts</h2>
                                        <div className="rowflex">
                                                {blog.map((item, index) => {
                                                        return(
                                                                <BlogItem 
                                                                        classes="halfblog"
                                                                        key={item.id}
                                                                        title={item.title}
                                                                        cat={item.category}
                                                                        img={item.img}
                                                                        slug={item.slug}
                                                                />
                                                        )
                                                })}
                                        </div>
                                </div>
                        </RelatedPosts>
                </Switch>
        );
}

export default (BlogRelated);

const RelatedPostLoading = styled.div `
        text-align: center;
        margin: 50px;

        .lds-facebook {
                display: inline-block;
                position: relative;
                width: 40px;
                height: 40px;
        }
        .lds-facebook div {
                display: inline-block;
                position: absolute;
                left: 8px;
                width: 16px;
                background: #bfbfbf;
                animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
        }
        .lds-facebook div:nth-of-type(1) {
                left: 8px;
                animation-delay: -0.24s;
        }
        .lds-facebook div:nth-of-type(2) {
                left: 32px;
                animation-delay: -0.12s;
        }
        .lds-facebook div:nth-of-type(3) {
                left: 56px;
                animation-delay: 0;
        }
        @keyframes lds-facebook {
                0% {
                        top: 8px;
                        height: 64px;
                }
                50%, 100% {
                        top: 24px;
                        height: 32px;
                }
        }
      
`
const RelatedPosts = styled.div `
        margin-top: 50px;

        h2{
                font-size: 24px;
                margin-bottom: 15px;
        }
        .rowflex{
                margin: 0 -15px;
        }
        .item{
                flex: calc(33.33333333333333333333333% - 30px);
                max-width: calc(33.33333333333333333333333% - 30px);
                margin: 0 15px 30px;
        }
        .item h3{
                font-size: 14px;
        }
        .item .cat{
                margin-bottom: 5px;
        }
        .item .date,
        .item .cat a{
                font-size: 12px;
        }
        .item figure{
                margin-bottom: 10px ;
        }
        @media (max-width: 768px) {
                h2{
                        font-size: 18px;
                }
                .rowflex{
                        margin: 0 -8px;
                }
                .item{
                        flex: calc(50% - 16px);
                        max-width: calc(50% - 16px);
                        margin: 0 8px 16px;
                }
                .item .cat{
                        margin-bottom: 3px;
                }
                .item h3{
                        font-size: 12px;
                        line-height: 160%;
                }
        }
`