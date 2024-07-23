import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';

const UpdateJob = () => {
    const { id } = useParams()
    const { _id, jobTitle, companyName, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel, companyLogo, employementType, description, postedBy, skills } = useLoaderData()

    const [selectedOption, setSelectedOption] = useState(null)
    const {
        register,
        handleSubmit, reset,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        data.skills = selectedOption

        fetch(`http://localhost:3000/update-job/${id}`, {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)


        }).then(res => res.json()).then((result) => {
            console.log(result)
            if (result.acknowledged === true) {
                alert("Job Updated Successfully!")
            }
            reset()
        })
    }
    const options = [
        { value: "JavaScript", label: "JavaScript" },
        { value: "C++", label: "C++" },
        { value: "C++", label: "C++" },
        { value: "CSS", label: "CSS" },
        { value: "React", label: "React" },
        { value: "Node", label: "Node" },
        { value: "MongoDB", label: "MongoDB" },
        { value: "Redux", label: "Redux" },
    ]
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            {/* form */}
            <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                    {/* 1st row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Job Title</label>
                            <input type="text" defaultValue={jobTitle}
                                {...register("jobTitle")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Company Name</label>
                            <input type="text" placeholder='Ex: Microsoft'
                                defaultValue={companyName}
                                {...register("companyName")} className='create-job-input' />
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Min Salary</label>
                            <input type="text" placeholder="$20k"
                                defaultValue={minPrice}
                                {...register("minPrice")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Max Salary</label>
                            <input type="text" placeholder='$120k'
                                defaultValue={maxPrice}
                                {...register("maxPrice")} className='create-job-input' />
                        </div>
                    </div>
                    {/* 3rd row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Salary Type</label>
                            <select {...register("salaryType")} className='create-job-input'>
                                <option value={salaryType}>{salaryType} </option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Job Location</label>
                            <input type="text" placeholder='Ex: Seattle'
                                defaultValue={jobLocation}
                                {...register("jobLocation")} className='create-job-input' />
                        </div>
                    </div>
                    {/* 4th row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Job Posting Date</label>
                            <input type="date" placeholder='Ex: 2024-07-16'
                                defaultValue={postingDate}
                                {...register("postingDate")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Experience Level</label>
                            <select {...register("experienceLevel")} className='create-job-input'>
                                <option value={experienceLevel}>Choose your experience</option>
                                <option value="NoExperience">Hourly</option>
                                <option value="Internship">Internship</option>
                                <option value="Work Remotely">Work Remotely</option>
                            </select>
                        </div>

                    </div>
                    {/* 5th row */}
                    <div className='create-job-flex'>
                        <label className='block mb-2 text-lg'>Required Skill Sets</label>
                        <CreatableSelect className='create-job-input py-4' defaultValue={skills} onChange={setSelectedOption} options={options} isMulti />
                    </div>
                    {/* 6th row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Company Logo</label>
                            <input type="url" placeholder='Paste your company URL'
                                defaultValue={companyLogo}
                                {...register("companyLogo")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Employement Type</label>
                            <select {...register("employementType")} className='create-job-input'>
                                <option value={employementType}>{employementType}</option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                        </div>

                    </div>
                    {/* 7th row */}
                    <div className='w-full'>
                        <label className='block mb-2 text-lg'>Job Description</label>
                        <textarea className='w-full pl-3 py-12 focus:outline-none placeHolder:text-gray-700'
                            {...register('description')} rows={6} defaultValue={description} placeholder='Job Description' />
                    </div>
                    {/* last row */}
                    <div className='w-full'>
                        <label className='block mb-2 text-lg'>Job Posted By</label>
                        <input type="email"
                            defaultValue={postedBy}
                            placeholder="your email"
                            {...register("postedBy")} className='create-job-input' />
                    </div>

                    <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' onSubmit={onSubmit} />
                </form>
            </div>
        </div>
    );
}

export default UpdateJob;
