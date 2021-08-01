import { styled } from "frontity";
import Link from "@frontity/components/link";

const BlogItem = (props) => {
        return(
                <>
                        <BlogCard className="item">
                                <figure>
                                        <Link link={"/news/detail/" + props.slug}><img src={props.img} /></Link>
                                </figure>
                                <div className={props.classes + " caption"}>
                                        <div className="cat">
                                                <Link link={"/news/category/" + props.cat.slug}>{props.cat.title}</Link>
                                        </div>
                                        {props.idx != 0 
                                                ? <h3><Link link={"/news/detail/" + props.slug}>{props.title}</Link></h3>
                                                : <h2><Link link={"/news/detail/" + props.slug}>{props.title}</Link></h2>
                                        }
                                        <div className="date">
                                                <span>{props.date}</span>
                                        </div>
                                        <div className="txt">
                                                {props.excerpt}
                                        </div>
                                </div>
                        </BlogCard>
                </>
        )
}

export default BlogItem;

const BlogCard = styled.div `
        figure{
                margin-bottom: 20px;
        }
        img{
                width: 100%;
        }
        h2,h3{
                margin-bottom:8px;
                line-height: 130%;
        }
        h2{
                font-size: 20px;
        }
        h3{
                font-size:18px;
        }
        h2 a,
        h3 a{
                color: #000;
                transition:color 0.2s ease-in;
        }
        h2 a:hover,
        h3 a:hover{
                color: #95a5a6;
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
        .date{
                margin-bottom: 15px;
        }
        .txt{
                line-height: 180%;
        }
        .txt > *{
                margin-top: 15px;
        }
        .txt > *:first-of-type{
                margin: 0;
        }
        .caption.fullblog{
                padding: 0 30px;
        }
        @media (max-width: 768px) {
                .caption.fullblog{
                        padding: 0;
                }
        }
`