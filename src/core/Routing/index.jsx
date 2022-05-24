import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
const Routing = (props) => {    
    const { routes } = props

    const routeComponents = routes.map(({auth, component: Component, layout: Layout, ...rest}, index) => {    
        if(Layout){            
            return (
                <Route {...rest}  element={<ProtectedRoute auth={auth}><Layout><Component /></Layout></ProtectedRoute>} key={index}/>
            )
        }else return <Route {...rest}  element={<ProtectedRoute auth={auth}><Component /></ProtectedRoute>} key={index}/>
    })
    return (
        <Router>
            <Routes>                
                {routeComponents}
            </Routes>
        </Router>
    )
}

export default Routing
