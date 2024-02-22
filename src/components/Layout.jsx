import PropTypes from 'prop-types';
import { Header } from './Header';
import { Footer } from './Footer';

import { ListCategories } from './ListCategories';


export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">

                    <main className="col-md-8">
                        { children }
                    </main>
                    
                    
                    <aside className="col-md-4">
                        <h2>Categorias</h2>
                        <ListCategories />
                    </aside>
                </div>
            </div>
            
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};
