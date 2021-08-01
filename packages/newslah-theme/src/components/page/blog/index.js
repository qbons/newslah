import { connect } from "frontity";
import Switch from "@frontity/components/switch";

import BlogList from "./blogList";
import BlogDetail from "./blogDetail";

const Blog = ({state, libraries, actions}) => {
        const req = state.source.get(state.router.link);
        return(
                <>
                        <Switch>
                                <BlogList when={req.isHomepage || req.isCategoryBlog } request={req} />
                                <BlogDetail when={req.isSingleBlog} request={req} libraries={libraries} />
                        </Switch>
                </>
        )
}

export default connect(Blog);