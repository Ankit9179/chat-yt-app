import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ImageUploader = () => {
    const navigate = useNavigate()
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [uploadStatus, setUploadStatus] = useState('');

    // Handle image selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    // Upload image to Cloudinary and then to the backend server
    const uploadImage = async () => {
        if (!image) {
            setUploadStatus('Please select an image first.');
            return;
        }

        setUploadStatus('Uploading to Cloudinary...');

        // Step 1: Upload image to Cloudinary
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'vlog_preset'); // Replace with your Cloudinary upload preset

        try {
            const cloudinaryResponse = await fetch(
                `https://api.cloudinary.com/v1_1/iiicloud/image/upload`,
                {
                    method: 'POST',
                    body: formData,
                }
            );
            const cloudinaryData = await cloudinaryResponse.json(); // getting data from cloudinary and conver into json
            console.log("emage uploadet to cloudinary")
            if (cloudinaryData.secure_url) {
                setUploadStatus('Image uploaded to Cloudinary. Now uploading to server...');

                // Step 2: Send image URL along with title and body to the backend
                const response = await axios.post('https://caht-app-ld.onrender.com/api/vlog/create-vlog', {
                    title,
                    body,
                    imageUrl: cloudinaryData.secure_url,
                }, { withCredentials: true });

                console.log('Server response:', response.data);
                setUploadStatus('Upload successful!');
                navigate('/vlogs')
            } else {
                setUploadStatus('Cloudinary upload failed.');
                console.error('Error uploading to Cloudinary:', cloudinaryData.error);
            }
        } catch (error) {
            setUploadStatus('Error uploading image.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex flex-col gap-4 w-[80%] sm:w-1/2">
            <h2 className='w-[100%] text-center font-bold text-neutral-300'>UPLOAD POST</h2>

            <input
                className="py-3 px-2 rounded-sm font-mono"
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="py-3 px-2 rounded-sm font-mono"
                placeholder="Enter description"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <input type="file" onChange={handleImageChange} accept="image/*" />
            {preview && <img src={preview} alt="Selected" style={{ width: '100px', marginTop: '10px' }} />}

            <button onClick={uploadImage} className="bg-blue-400 text-white p-2 rounded-md">Upload Image</button>

            <p className='text-red-400'>{uploadStatus}</p>
        </div>
    );
};

export default ImageUploader;
