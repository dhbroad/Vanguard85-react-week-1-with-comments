import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

//
//
// Base structure of code was copied from SignUp.js
//
//

// when we log the user in, we generate an apitoken in flask that will be returned


export default function CreatePost({ user }) {

    const sendToFlask = async ( e ) => {
        e.preventDefault();
        const res = await fetch("http://127.0.0.1:5000/api/create-post", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': user.token
        },
            body: JSON.stringify({
                title: e.target.title.value,
                img_url: e.target.img_url.value,
                caption: e.target.caption.value,
            })
        });
        const data = await res.json();
        console.log(data)
    };

    return user.token?
    (
        <div className='border col-12 col-xs-9 col-sm-8 col-lg-4'>
                <form onSubmit={(e)=>sendToFlask(e)}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label> {/* for= from html was changed to htmlFor= to work in JSX */}
                        <input name='title' type="text" className="form-control" />
                    </div>   
                    <div className="mb-3">
                        <label htmlFor="img_url" className="form-label">Image Url</label> 
                        <input name='img_url' type="text" className="form-control" />
                    </div>   
                    <div className="mb-3">
                        <label htmlFor="caption" className="form-label">Caption</label> 
                        <input name='caption' type="text" className="form-control" />
                    </div>   
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    )
    :
    (
        <Navigate to='login' />
    )
}
    