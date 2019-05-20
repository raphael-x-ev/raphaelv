// Core
import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router } from 'react-router-dom'
import Layout from './routes/Layout'

// ReactDOM.render(
//   <App />, document.getElementById("root")
// )

const RenderPortfolio = () => (
    <Router
      basename={process.env.PUBLIC_URL}
      // basename="/raphaelv"
    >
      <Layout />
    </Router>
  )


export default RenderPortfolio