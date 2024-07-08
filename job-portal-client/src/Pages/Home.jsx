
import Banner from '../components/Banner';
import React, { useState } from 'react';

const Home = () => {
    const [query, setQuery] = useState("")
    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }
    console.log(query)
    return (
        <div className=''>
            <Banner query={query} handleInputChange={handleInputChange} />
        </div>
    );
}

export default Home;
