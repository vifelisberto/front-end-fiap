import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../lib/createClient';


export const ListCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
            client.getEntries({
                content_type: 'blogCategory'
            })
            .then(function (response) {
                console.log("categories", response);
                setCategories(response.items || null);
            });        
    }, []);

    const listCategories = categories.map(category => (
        <li key={category.sys.id}>
            <Link to={'/list/' + category.fields.slug}>{category.fields.title}</Link>
        </li>
    ));

    return (
        <ul>
            {listCategories}
            <br />
            <li key="ver-todos"><Link to={'/list'}>Ver todos</Link></li>
        </ul>
    );
}