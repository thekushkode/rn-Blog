import React, { useReducer } from 'react'

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogPost' :
            return [...state, { title: `Blog Post #${state.length + 1}` }]
        default:
            return state;
    }
};

export const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(blogReducer, []);

    

    return (
        <BlogContext.Provider value={{ data: blogPosts }}>
            {children}
        </BlogContext.Provider>
    )
};

export default BlogContext;
