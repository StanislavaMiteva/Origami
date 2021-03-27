import { Redirect, useHistory, Route } from 'react-router-dom';
import ContactUs from '../ContactUs/ContactUs'

const About = (
    { match, history }
) => {
    // const history=useHistory();

    // if (Math.random() > 0.5) {
    //     // return <Redirect to="/" />
    //     history.push('/');

    //     return null;
    // }
console.log(match.url)
    return (
        <main className="main-container">
            <h1>About {match.params.name} Page.....</h1>
            {/* <Route
                path="/about/pesho"
                component={ContactUs}
            /> */}
            <Route path="/about/pesho">
                <h2>Pesho is the best!</h2>
            </Route>
        </main>
    );
}

export default About;