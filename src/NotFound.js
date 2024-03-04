import {Link} from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-foud">
            <h2>Sorry</h2>
            <p>That page cannot found</p>
            <Link to="/">Back to homepage...</Link>

        </div>
     );
}
 
export default NotFound;