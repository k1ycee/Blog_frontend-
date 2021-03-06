import React, { Component } from 'react';
import Body from './views/blog_body';
import NavBar from './navbar/app_bar';
import Funds from './views/funds';
import About from './views/about'
import Post from './views/single_post'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import CreateBlog from './views/create_new_blog';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Body} />
            <Route path='/funds' component={Funds} />
            <Route path='/about' component={About} />
            <Route path='/create_blog' component={CreateBlog} />
            <Route path='/:id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
