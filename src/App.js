import Router from "./router";
import { UserProvider } from './Context/UserContext'

const App = () => {
    return (
        <UserProvider>
            <Router />
        </UserProvider>
    )
}

export default App;