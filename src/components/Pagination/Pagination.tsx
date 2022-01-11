
import './index.scss';

export const Pagination = () => {
    return (
        <nav>
            <ul className="pagination justify-content-center">
            <li className="page-item disabled">
                <a className="page-link" href="#" >Previous</a>
            </li>

            <li className="page-item">
                <a className="page-link" href="#">Next</a>
            </li>
            </ul>
      </nav>)
}