

import Banner from '../components/Banner';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Jobs from './Jobs';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch("jobs.json").then(res => res.json()).then(data => {
            setJobs(data)
        })
    }, [])
    const [query, setQuery] = useState("")
    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }

    //*filter jobs by title
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)

    //! Radio filtering
    const handleChange = (event) => {
        setSelectedCategory(event.targer.value)
    }

    //? button based filtering
    const handleClick = (event) => {
        setSelectedCategory(event.target.value)
    }

    //*main functions
    const filteredData = (jobs, selected, query) => {
        let filteredJobs = jobs

        //*filtering input items
        if (query) {
            filteredJobs = filteredItems
        }

        //*category filtering
        if (selected) {
            filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employementType, postingDate }) =>
            (jobLocation.toLowerCase() === selected.toLowerCase() ||
                parseInt(maxPrice) <= parseInt(selected) ||
                salaryType.toLowerCase() === selected.toLowerCase() ||
                employementType.toLowerCase() === selected.toLowerCase()

            )
            )
        }
        return filteredJobs.map((data, i) => <Card key={i} data={data} />)


    }
    const result = filteredData(jobs, selectedCategory, query)


    return (
        <div className=''>
            <Banner query={query} handleInputChange={handleInputChange} />
            {/* main content */}
            <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
                <div className='bg-white p-4 rounded'>Left</div>
                <div className='col-span-2 bg-white p-4 rounded-sm'>  <Jobs result={result} /></div>
                <div className='bg-white p-4 rounded'>Right</div>

            </div>
        </div>
    );
}

export default Home;
