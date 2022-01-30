import React from 'react';
import Card from '../components/shared/Card';
import {Link} from 'react-router-dom';

function AboutPage() {
  return <Card>
            <div className="about">
                <h1>About the project</h1>
                <p> this is a thing to leave feeback on v1.0.0</p>
            </div>
            <p>
                <Link to="/">here to go home</Link>
            </p>
         </Card>;
}

export default AboutPage;
