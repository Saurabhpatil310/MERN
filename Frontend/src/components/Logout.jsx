import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';


export default function Logout() {
    const [authUser, setAuthUser] = useAuth(); // Fixed spacing around '='
    
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null, // Correctly updates the user to null
            });
            localStorage.removeItem("Users"); // Removes stored user info
            toast.success("Logout Successfully"); // Success notification
          
            setTimeout(()=>{
                window.location.reload();
            },1000)
        } catch (error) {
            toast.error("Error: " + error);
            setTimeout(()=>{},2000) // Error notification
        }
    };

    return (
        <div>
            <button 
                className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}
