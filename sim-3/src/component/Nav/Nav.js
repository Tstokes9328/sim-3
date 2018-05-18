import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function nav(props){
    return(
        <div>
            <img src={props.profile} alt="" />
            <p>Name{props.username}</p>
            <Link to="/dashboard"><button>Home</button></Link>
            <Link to="/post/:postid"><button>New Post</button></Link>
            <Link to="/"><button>Log Out</button></Link>
        </div>
    )
}

function mapStateToProps(state){
    return {
        username: state.username,
        profile: state.profile
    }
}

export default connect(mapStateToProps)(nav)