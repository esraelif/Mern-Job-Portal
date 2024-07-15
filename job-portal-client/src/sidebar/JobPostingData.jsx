import React from 'react';
import InputField from '../components/InputField';


const JobPostingData = ({ handleChange }) => {
    const now = new Date()
    const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000)
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000)
    const thirdyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000)

    //*convert date to string
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10)
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10)
    const thirdyDaysAgoDate = thirdyDaysAgo.toISOString().slice(0, 10)

    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>
            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' id='test' value='' onChange={handleChange} />
                    <span className='checkmark'></span>All time
                </label>
                <InputField handleChange={handleChange} value={twentyFourHoursAgoDate} title='Last 24 hours' name='test' />
                <InputField handleChange={handleChange} value={sevenDaysAgoDate} title='Last 7 days' name='test' />
                <InputField handleChange={handleChange} value={thirdyDaysAgoDate} title='Last 30 days' name='test' />

            </div>

        </div>
    );
}

export default JobPostingData;
