var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;

var Header = require('./components/Header/Index.jsx');
var Home = require('./components/Home/Index.jsx');
var Logger = require('./components/Logger/Index.jsx');
var Finder = require('./components/Finder/Index.jsx');
var Footer = require('./components/Footer/Index.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div style={{height: "100%"}}>
        <Header/>
				{this.props.children}
        <Footer/>
      </div>
    )
  }
});

var Routes = (
  <Route path="/" component={App}>
		<IndexRoute component={Home} />
    <Route path="/log/:id" component={Logger} />
    <Route path="/log" component={Logger} />
    <Route path="/find" component={Finder} />
  </Route>
);

ReactDOM.render(
  <Router history={browserHistory} routes={Routes}/>,
	document.getElementById("container")
);
