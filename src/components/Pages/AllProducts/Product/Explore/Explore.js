import React, { useEffect, useState } from 'react';
import ExploreItem from '../ExploreItem/ExploreItem';

const Explore = () => {
    const [allItem, setAllItem] = useState([])

    useEffect(() => {
        fetch('https://afternoon-beyond-26035.herokuapp.com/services/all')
            .then(res => res.json())
            .then(data => setAllItem(data))
    }, [])

    return (
        <div>
            <h2>this is explore:{allItem.length}</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    allItem.map(item => <ExploreItem
                        key={item._id}
                        item={item}
                    ></ExploreItem>)
                }
            </div>
        </div>
    );
};

export default Explore;