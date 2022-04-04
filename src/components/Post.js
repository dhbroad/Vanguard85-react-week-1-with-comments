import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Post extends Component {
    render() {
        const p = this.props.post // see Article.js for initial notes on props
        return (
            // HTML (JSX) below was copied from our flask app's ig > templates > posts.html and reformatted for JSX (things like class= are now className= and you have to add / to self closing html tags)
            // {{}} from the (jinja) flask html are changed to {}
            // Style has to be changed to {{}} because it needs to be a dictionary {} and in order to use a dictionary in our html we need to surround the dictionary with another {}
            <Link to={`/instagram/${p.id}`} className="card text-decoration-none text-dark" style={{ width: '18rem' }}> {/* <a href= was changed to <Link to= and Link has to be imported */}
                <img src={p.image} className="card-img-top" alt={p.title} /> {/* <img> needs to have a closing / in JSX so we added it at the end <img /> */}
                <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text">{p.caption}</p>
                </div>
            </Link> /// have to add closing Link tag 
        )
    }
}
