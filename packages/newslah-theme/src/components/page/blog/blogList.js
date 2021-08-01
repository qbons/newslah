import { connect, styled } from "frontity";
import { useState, useEffect } from "react";

import BlogItem from "./blogItem";
import Loadmore, {parseLoadmore, fetchLoadMore} from "./loadmore";
import HeadMeta from "../../headMeta";

const BlogList = (props) => {
        const data = props.request.data;
	const [paged, setPagedBlog] = useState(props.request.data.next);
        const [isLoading, setIsLoading] = useState(false);
        const [blog, setLoadedBlog] = useState(parseLoadmore(data.news));
        const headMeta = data.header;
        
        async function loadPosts(e){
                e.preventDefault();
                setIsLoading(true);
                const  res = await fetchLoadMore(props, paged, data.slug);
		setLoadedBlog([...blog,...res.data.news]);
		setPagedBlog(res.data.next);
		setIsLoading(false);
        }
        useEffect(() => {
                setPagedBlog(props.request.data.next);
                setLoadedBlog(parseLoadmore(data.news));
        }, [data]);
        return(
                <>
                       <HeadMeta headMeta={headMeta} />
                        <div className="inner-blog">
                                <BlogListWrap className="wrapper">              
                                        {data.slug == "" &&
                                                <BlogItem 
                                                        classes="fullblog"
                                                        key={blog[0]['id']}
                                                        title={blog[0]['title']}
                                                        cat={blog[0]['category']}
                                                        img={blog[0]['img']}
                                                        excerpt={blog[0]['excerpt']}
                                                        slug={blog[0]['slug']}
                                                        date={blog[0]['date']}
                                                />
                                        }
                                        <div className="rowflex">
                                                {blog.map((item, index) => {
                                                        if(index != 0 || index == 0 && data.slug != ""){
                                                                return(
                                                                        <BlogItem 
                                                                                classes="halfblog"
                                                                                key={item.id}
                                                                                title={item.title}
                                                                                cat={item.category}
                                                                                img={item.img}
                                                                                excerpt={item.excerpt}
                                                                                slug={item.slug}
                                                                                date={item.date}
                                                                        />
                                                                )
                                                        }
                                                })}
                                        </div>
					
					{paged != false ? <Loadmore isloading={isLoading} onclick={loadPosts}/> : '' }
                                </BlogListWrap>
                        </div>
                </>
        )
}

export default connect(BlogList);

const BlogListWrap = styled.div `
        .item + .rowflex{
                margin: 50px -15px 0;
        }
        .rowflex .item{
                flex: calc(50% - 30px);
                max-width: calc(50% - 30px);
                margin: 0 15px 30px;
        }

        @media (max-width: 768px) {
                .item + .rowflex{
                        margin: 30px 0 0;       
                }
                .rowflex .item{
                        flex: 100%;
                        max-width: 100%;
                        margin: 0 0 30px;
                }
        }
`