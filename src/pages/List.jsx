import { 
    Link,
    useParams
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { client } from "../lib/createClient";

import { ListPagination } from './ListPagination';


export const List = () => {
    const limit = 3;
    const { slug } = useParams();
    
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [categoryName, setCategoryName] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await client.getEntries({
                content_type: 'blogCategory',
                "fields.slug": slug,
            });
            console.log("category", response.items[0])
        
            setCategoryName(response.items[0]);
        };

        if (slug) {
            fetchData();
            setCurrentPage(1);
        }
    }, [slug]);

    useEffect(() => {

        const fetchData = async (limit, slug, currentPage) => {
            console.log("fetchData post", limit, slug, currentPage)
            const categoryData = slug
            ? {
                "fields.category.sys.contentType.sys.id": "blogCategory",
                "fields.category.fields.slug": slug,
              }
            : "";
        
            const paginationData =
            {
                skip: (currentPage - 1) * limit,
            };
        
            const posts = await client.getEntries({
                content_type: "blogPost",
                limit: limit,
                ...paginationData,
                ...categoryData,
            });
            
            setTotalPage(posts.total);
            setPosts(posts.items);

            console.log("posts", posts);
        };

        fetchData(limit, slug, currentPage);
    }, [slug, currentPage, limit]);

    return (
        <>
            <h1>
                Todos os posts
                {
                    (categoryName.fields && slug) ?
                    <span className="fs-6"> {categoryName.fields.title}</span>
                    : ""
                }
            </h1>

            {posts.map(post => (
                <div className="card mb-3" key={post.sys.id}>
                    <div className="card-body">
                        <h5 className="card-title">{post.fields.title}</h5>
                        <p className="card-text">{post.fields.description}</p>
                        <Link to={'/post/' + post.fields.slug} className="card-link">Ver post</Link>
                    </div>
                </div>
            ))}

            {(totalPage > limit)
            ?
                <ListPagination 
                    currentPage={currentPage}
                    totalPages={Math.ceil(totalPage / limit)}
                    onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
                />
            :
                ""
            }
        </>
    );
}