import React from 'react';
import { Route, Link } from "react-router-dom";

import FarmAnimals from '../../components/FarmAnimals/FarmAnimals';
import ForestAnimals from '../../components/ForestAnimals/ForestAnimals';
import OceanAnimals from '../../components/OceanAnimals/OceanAnimals';

const Animals = ({ match }) => (
    <div>
        <h2>Animals</h2>
        <ul>
            <li>
                <Link to={`${match.url}/farm-animals`}>Farm Animals</Link>
            </li>
            <li>
                <Link to={`${match.url}/forest-animals`}>Forest Animals</Link>
            </li>
            <li>
                <Link to={`${match.url}/ocean-animals`}>Ocean Animals</Link>
            </li>
        </ul>
        
        <Route
            exact
            path={match.url}
            render={() => <h3>Please select a topic.</h3>}
        />
        <Route path={`${match.url}/farm-animals`} component={FarmAnimals} />
        <Route path={`${match.url}/forest-animals`} component={ForestAnimals} />
        <Route path={`${match.url}/ocean-animals`} component={OceanAnimals} />
    </div>
);

export default Animals;
