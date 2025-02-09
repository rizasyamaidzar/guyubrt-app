import React, { useState, useEffect } from 'react';

const Form = ({ initialValues = {}, onSubmit, fields }) => {
    const [formData, setFormData] = useState(initialValues);

    // Update formData when initialValues change (for editing)
    // useEffect(() => {
    //     setFormData(initialValues);
    // }, [initialValues]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [name]: value,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting form data:', formData); // Log before submission
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((field) => (
                <div key={field.name} className="w-full">
                    <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        {field.label}
                    </label>
                    {field.type === 'select' ? (
                        <select
                            name={field.name}
                            id={field.name}
                            onChange={handleChange}
                            required={field.required}
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        >
                            {field.options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    ) : field.type === 'file' ? (
                        <input
                            type="file"
                            name={field.name}
                            id={field.name}
                            onChange={handleChange}
                            required={field.required}
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                    ) : (
                        <input
                            type={field.type}
                            name={field.name}
                            id={field.name}
                            onChange={handleChange}
                            required={field.required}
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                    )}
                </div>
            ))}
            <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
                Submit
            </button>
        </form>
    );
};

export default Form;