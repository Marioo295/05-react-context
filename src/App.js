import './App.css';
import CrudApi from './components/CrudApi';
import MyPage from './components/MyPage';
import MyPageContext from './components/MyPageContext';
import { CrudProvider } from './context/CrudContext';

function App() {
    return (
        <div>
            <h1>REACT CONTEXT API</h1>
            <a
                href="https://es.reactjs.org/docs/context.html"
                target="_blank"
                rel="noreferrer"
            >Documentación ContextAPI</a>
            <hr></hr>
            <CrudProvider>
                <CrudApi></CrudApi>
            </CrudProvider>
            <hr></hr>
            <MyPageContext></MyPageContext>
            <hr></hr>
            <MyPage></MyPage>
            <hr></hr>
        </div>
    );
};

export default App;