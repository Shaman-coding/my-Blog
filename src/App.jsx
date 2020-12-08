import './App.css';
import { Header } from "./components/header/header";
import { Route } from 'react-router-dom'
import { MainPage } from "./components/mainPage/mainPage";
import { AboutMe } from './components/aboutMe/aboutMe';
import MyThinkContainer from './components/myThink/MyThinkContainer';




const App = (props) => {
    return(
        <div className='App'>
            <Header/>

                <div className='wrapperRoute'>
                    <Route path={'/mainPage'} render={ () => <MainPage/>}/>
                    <Route path={'/aboutMe'}  render={ () => <AboutMe Store={props.Store}/>}/>
                    <Route path={'/myThink'}  render={ () => <MyThinkContainer Store={props.Store}/>}/>
                                                                     
                                                                    
                </div>

                

        </div>
    );
}

export default App;
