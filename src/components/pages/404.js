import ErrorMessage from '../errorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <ErrorMessage />
            <h1>404 Not Found</h1>
            <p>The page you requested could not be found.</p>
            <br />
            <Link to='/' style={{ fontSize: '24px', fontWeight: '700' }}>
                Back to home
            </Link>
        </div>
    );
};

export default Page404;
