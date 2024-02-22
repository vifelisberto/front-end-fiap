import { useEffect, useState } from "react"
import { client } from "../lib/createClient";
import { Link } from 'react-router-dom';

export const Home = () => {
    const [posts, setPosts] = useState([]);

    // ciclo de vida de componentes
    // posso escrever JavaScript
    useEffect(() => {
        // Pedir para o objeto client buscar os últimos 5 posts
        client
            .getEntries({
                content_type: 'blogPost',
                limit: 2,
                order: "-sys.createdAt"
            })
            .then(function (entries) {
                console.log('posts', entries.items);
                setPosts(entries.items);
            });

    }, []); // array vazio indica o onload do componente


    return (
        <div className="container">
            <div className="row">
                <main className="col-md-8">
                    <h1 className="my-3">Últimos posts</h1>

                    {posts.map(post => (
                        <div className="card mb-3" key={post.sys.id}>
                            <div className="card-body">
                                <h5 className="card-title">{post.fields.title}</h5>
                                <p className="card-text">{post.fields.description}</p>
                                <Link to={`/post/${post.fields.slug}`} className="card-link">
                                    Ver post
                                </Link>
                            </div>
                        </div>
                    ))}
                    
                    <Link to={"/list"} className='btn btn-primary'>Ver todos os posts</Link>
                </main>
            </div>
        </div>
    );
}
