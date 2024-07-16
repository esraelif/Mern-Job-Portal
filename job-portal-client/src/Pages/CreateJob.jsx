import React from 'react';
import { useForm } from 'react-hook-form';

const CreateJob = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => { console.log(data) }

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            {/* form */}
            <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                    {/* 1st row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Job Title</label>
                            <input type="text" defaultValue={"Web Developer"}
                                {...register("jobTitle")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Company Name</label>
                            <input type="text" placeholder='Ex: Microsoft'
                                {...register("companyName")} className='create-job-input' />
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Min Salary</label>
                            <input type="text" placeholder="$20k"
                                {...register("minPrice")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Max Salary</label>
                            <input type="text" placeholder='$120k'
                                {...register("maxPrice")} className='create-job-input' />
                        </div>
                    </div>
                    {/* 3rd row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Salary Type</label>
                            <select {...register("salaryType")} className='create-job-input'>
                                <option value="">Choose your salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Job Location</label>
                            <input type="text" placeholder='Ex: Seattle'
                                {...register("jobLocation")} className='create-job-input' />
                        </div>
                    </div>
                    {/* 4th row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Job Posting Date</label>
                            <input type="date" placeholder='Ex: 2024-07-16'
                                {...register("postingDate")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg' >Experience Level</label>
                            <select {...register("experienceLevel")} className='create-job-input'>
                                <option value="">Choose your experience</option>
                                <option value="NoExperience">Hourly</option>
                                <option value="Internship">Internship</option>
                                <option value="Work Remotely">Work Remotely</option>
                            </select>
                        </div>

                    </div>
                    {/* 5th row */}
                    <div className='create-job-flex'>
                        <label className='block mb-2 text-lg'>Required Skill Sets</label>
                    </div>
                </form>
            </div>


            <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />


        </div>
    );
}

export default CreateJob;
