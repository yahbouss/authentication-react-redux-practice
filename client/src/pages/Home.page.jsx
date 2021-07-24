import React from 'react'
import { connect } from 'react-redux'

const Home = ({auth}) => {
    return (
        <div className="container">
            <h1>Hello {auth.username}</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Home)
