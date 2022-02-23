import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import superagent from 'superagent';

const furl = "https://github.com/login/oauth/authorize?client_id=895d11fa9b240bf80516";
const surl = "https://github.com/login/oauth/access_token"

class Header extends Component {
    constructor(){
        super()

        this.state={
            username:''
        }
    }
    conditional_menu = ()=>{
        if(sessionStorage.getItem('username')===null||sessionStorage.getItem('username')===undefined){
            return(
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="https://github.com/login/oauth/authorize?client_id=895d11fa9b240bf80516"><span class="	glyphicon glyphicon-log-in"></span>&nbsp;Login With GitHub</a></li>
                </ul>
            )
        }else{
            return(
                <ul className="nav navbar-nav navbar-right">
                    <li><a href=""><span className="glyphicon glyphicon-user"></span> Welcome {sessionStorage.getItem('username')}</a></li>
                </ul>
            )
        }

    }
    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">Geek Ellite</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/"><span class="glyphicon glyphicon-home"></span>&nbsp;Home</Link></li>
                        <li><Link to="/viewBooking"><span class="glyphicon glyphicon-copy"></span>&nbsp;About</Link></li>
                    </ul>
                   
                    
                    </div>
                </div>
                </nav>
            </React.Fragment>
        )
    }

    componentDidMount(){
        const code = (this.props.location.search).split('=')[1];
        if(code){
            var requestData={
                code:code
            }
            fetch('http://localhost:9800/oauth',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(requestData)
            })
            .then(response => response.json()) 
            .then((data) => {
                var result = data.login
                sessionStorage.setItem('username',result)
                this.setState({username:result})
            })
        }
    }
}

export default withRouter(Header);