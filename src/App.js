//Import different componets into our App file which will
//be outputted into our public index.html via the file we are exporting to: src/index.js
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';
const App = () =>{
    return (
        <FeedbackProvider>
            <Router>
                <main>
                    <Header />
                    <section className="container">
                        <Routes>
                            <Route exact
                                path='/' element={
                                    <>
                                        <FeedbackForm />
                                        <FeedackStats />
                                        <FeedbackList />
                                    </>
                                }>
                            </Route>
                            <Route path='/about' element={<AboutPage />}></Route>
                        </Routes>
                        <AboutIconLink />
                    </section>

                </main>
            </Router>
        </FeedbackProvider>
        
         
    )
};
//export component as default module
export default App;

//nb by passing in feedback as a prop we are passing our app level state to that  component. From there we can work with what the variable FeedbackData points to
