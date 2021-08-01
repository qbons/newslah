import { connect, styled } from "frontity";

 async function fetchLoadMore(props, paged, category = "") {
        const { api } = props.libraries.source;
        const req =  await api.get({
                endpoint: "/frontity/v1/news",
                params: { 
                        page: paged,
                        per_page: category != "" ? 6 : 10,
                        orderby: "date title",
                        order: "DESC",
                        category: category
                },
        });
        const res =  await req.json();
        return res;
}

const parseLoadmore = (rawBlog) => {
        let blogs = [];
	rawBlog.map((item, index) => {
		const blog = {
			id:item.id,
			title:item.title,
			category:item.category,
			img:item.img,
			excerpt:item.excerpt,
			slug:item.slug,
                        date:item.date
		};
		blogs.push(blog);
	});
	return blogs;
}
export {parseLoadmore, fetchLoadMore};

const Loadmore = (props) => {
        return(
                <>
                        <Load className="loadmore">
                                {props.isloading ? <span>Loading..</span> : <a href="#" onClick={props.onclick}>Load More</a>}
                        </Load>
                </>
        )
}

export default connect(Loadmore);

const Load = styled.div `
        text-align: center;
        margin-top: 40px;
        
        span,
        a{
                display: inline-block;
                padding: 10px 20px;
                color: #000;
                border: 1px solid #000;
                transition:all 0.2s ease-in;
                bacground: #fff;
        }
        a:hover{
                text-decoration: none;
                color: #fff;
                background: #000;
        }
        span{
                bacgkround: #f0f0f0;
                min-width: 110px;
        }
        span:after{
                display:block;
                position:fixed;
                top:0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 999;
                content: '';
                background: rgba(255,255,255,.7);
        }
`