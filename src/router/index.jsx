import general from '@/router/general'
import Routing from '@/core/Routing'

const combineRoutes = [    
    ...general,
]

const Routes = () => {
    return (
        <Routing routes={combineRoutes}/>
    )
}

export default Routes
