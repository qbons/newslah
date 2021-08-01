
const buildRequest =  (pattern, endpoint, marker, slug = "", args = {type: "none", params: "" }) => {
        return {
                pattern: pattern,
                func: async ({ route, params, state, libraries, force }) => {
                        let request = {
                                endpoint: slug != "" ?  `/frontity/v1/${endpoint}/${params[slug]}` : `/frontity/v1/${endpoint}/`,
                        }
                        if(args.type == "blog"){
                                if(args.params != ""){
                                        let tempArgs= {...state.params.blog};
                                        for (var key in args.params) {
                                                tempArgs[key] = args.params[key];
                                        }
                                        request.params = tempArgs;
                                }else{
                                        request.params = {...state.params.blog};
                                }
                        }
                        
                        const response = await libraries.source.api.get(request);
                        const option = await response.json();
                        const data = state.source.get(route);
                        Object.assign(data, { ...option, [marker] : true });
                }
        } 
}

const NewslahApi = (props) => {
        return [
                buildRequest("/","news","isHomepage", "", {
                        type: "blog",
                        params: {
                                per_page: 7
                        }
                }),
               /* {
                        pattern: "/",
                        func: async ({ route, params, state, libraries, force }) => {
                                let args = {...state.params.blog};
                                args.per_page = 7;
                                const response = await libraries.source.api.get({
                                        endpoint: `/frontity/v1/news`,
                                        params: args
                                });
                                const option = await response.json();
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHomepage: true });
                        }
                }, */
                buildRequest("/news/detail/:slug","news/detail","isSingleBlog", "slug"),
              /*   {
                        pattern: "/news/detail/:slug",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/frontity/v1/news/detail/${params.slug}`,
                                });
                                const option = await response.json();
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isSingleBlog: true });
                        }
                }, */
                buildRequest("/news/category/:slug","news/category","isCategoryBlog", "slug", {
                        type: "blog",
                        params: ""
                }),
               /*  {
                        pattern: "/news/category/:slug",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/frontity/v1/news/category/${params.slug}`,
                                        params: state.params.blog
                                });
                                const option = await response.json();
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isCategoryBlog: true });
                        }
                }, */
                buildRequest("category","category","isCategoryMenu"),
                /* {
                        pattern: "category",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/frontity/v1/category`
                                });
                                const option = await response.json();
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isCategoryMenu: true });
                        }
                } */
                buildRequest("option","option","isOption"),
                buildRequest("/:slug","page","isSinglePage", "slug"),
        ];
}

export default NewslahApi;