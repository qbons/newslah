import { connect, Head } from "frontity";

const HeadMeta = (props) => {
        const headMeta = props.headMeta;
        const title = headMeta.title != '' ? headMeta.title + ' - ' + headMeta.site_title : headMeta.site_title + ' - ' + headMeta.description;
        return(
                <>
                        <Head>
                                <title>{title}</title>
                                <meta name="description" content={headMeta.description}/>
                                <meta property="og:title" content={title} />
                                <meta property="og:description" content={headMeta.description} />
                                {headMeta.img != '' && <meta property="og:image" content={headMeta.img} />}
                                <meta name="twitter:title" content={title} />
                                <meta name="twitter:description" content={headMeta.description} />
                                {headMeta.img != '' && <meta name="twitter:image" content={headMeta.img} />}
                                {headMeta.img != '' && <meta name="twitter:card" content="summary_large_image" />}
                        </Head>
                </>
        )
}

export default connect(HeadMeta);