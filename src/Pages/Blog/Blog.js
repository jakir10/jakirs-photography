import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h2 className='mb-5 mt-3 text-center'>My Blogs</h2>
            <div className='mb-5 mt-3'>
                <h5 >Diffrence between authorization and authentication</h5>
                <p>Authentication is visible to user and it can be partially changeable by the user.But Authorization is not visible to or changeable by the user.Authorization is the process of giving someone the ability to access a resource. Of course, this definition may sound obscure, but many situations in real life can help illustrate what authorization means so that you can apply those concepts to computer systems. <br /> Authentication is the process of verifying the identity of a person or device. A common example is entering a username and password when you log in to a website.</p>
            </div>
            <div>
                <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p><strong>Firebase:</strong> Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized. <br />
                    <strong>Other option of authentication:</strong> Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints. </p>
            </div>
            <div>
                <h5>What other services does firebase provide other than authentication</h5>
                <p>There are so many service firebase offers <br />
                    <ul>
                        <li>Cloud Storage</li>
                        <li>Cloud Firestore</li>
                        <li>Firebase Realtime Database</li>
                        <li>Firebase Hosting</li>
                    </ul>
                    <br />
                    etc there are many cost free service google firebase provide us.
                </p>
            </div>
        </div>
    );
};

export default Blog;