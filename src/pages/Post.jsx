import { useEffect, useState } from 'react';

import { 
    useParams,
    Link
} from 'react-router-dom';

import { client } from "../lib/createClient";

export const Post = () => {
    const { slug } = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        client.getEntries({
            "fields.slug": slug,
            content_type: 'blogPost',
        })
        .then(function (entries) {
            console.log("post", entries);
            setPost(entries.items[0] || null);
        });
    }, [slug]);

    return (
           <> {post 
                ? <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="my-3">{post.fields.title}</h1>
                            </div>

                            <div>{post.fields.body}</div>

                            <div className="mt-1">
                                <Link to="/list" className="btn btn-primary">
                                Ver todos os posts
                                </Link>
                            </div>
                        </div>
                    </div> 
                : <div>Carregando...</div>}
            </>
    );
}
