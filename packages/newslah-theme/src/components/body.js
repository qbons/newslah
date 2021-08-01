import { connect } from "frontity";
import Switch from "@frontity/components/switch";

import Blog from "./page/blog";
import RegularPage from "./page/regularPage";
import Loading from "./loading";

const Body = ({state}) => {
        const req = state.source.get(state.router.link);
        return(
                <>
                        <div id="body">
                                <Switch>
                                        <Loading when={req.isFetching} />
                                        <RegularPage when={req.isSinglePage} />
                                        <Blog when={req.isHomepage || req.isCategoryBlog || req.isSingleBlog }/>
                                </Switch>
                                
                        </div>
                </>
        )
}

export default connect(Body);