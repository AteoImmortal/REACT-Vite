import './App.css';
import {Navigation} from './components/Navigation';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Footer} from './components/Footer';


export const App = () => {
    return (
        <>
            <Navigation />
            <Header />
            <Main />
            <Footer />
        </>
    )
}