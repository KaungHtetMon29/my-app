import React ,{Component} from "react";
import Cardlist from "../component/Cardlist";
// import {robots} from './robot';
import Searchbox from "../component/searchbox";
import Scroll from "../component/Scroll";
import ErrorBoundry from "../component/ErrorBoundry";


class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json()).then(users=>this.setState({robots:users}))
    }
    onsearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
        
    }
    
    render(){
        const filterrobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div>
                <h1>Robo friends</h1>
                <Searchbox searchChange={this.onsearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filterrobots} />  
                    </ErrorBoundry> 
                </Scroll>
            </div>  
        ); 
    }
        
    
}
export default App;