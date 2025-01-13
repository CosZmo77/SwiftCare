// import React, { useContext, useEffect, useState } from "react";
// import { DoctorContext } from "../../Context/DoctorContext";
// import axios from 'axios';
// import { toast } from "react-toastify";

// const DoctorProfile = () => {
//   const { dToken, getProfileData, setProfileData, profileData, backendUrl } = useContext(DoctorContext);
//   const [isEdit, setIsEdit] = useState(false);
//   const [password, setPassword] = useState("");


//   const updateProfile = async () => {
//     try {

//       const updatedData = {
//          fees: Number(profileData.fees),
//          available: profileData.available,
//          password:profileData.password

//       }

//       const { data } = await axios.post(backendUrl + "/api/doctor/update-profile",updatedData,{ headers: { dToken } });

//       if (data.success) {
//         toast.success(data.message);
//         setIsEdit(false);
//         getProfileData();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (dToken) {
//       getProfileData();
//     }
//   },[dToken]);

//   return (
//     profileData && (
//       <div className="w-full max-w-6xl m-5">
//         <div className="flex flex-col gap-4 m-5">
//           <div>
//             <img
//               className="bg-primary w-full sm:max-w-64 rounded-lg"
//               src={profileData.image}
//               alt=""
//             />
//           </div>

//           <div className="flex-1 border border-stone-400 rounded-lg p-8 py-7 bg-white">
//             {/*--------------------Doc Info: Name, Degree, Experience--------------------*/}

//             <p className="flex gap-2 items-center text-3xl font-medium text-neutral-900">
//               {profileData.name}
//             </p>
//             <div className="flex items-center gap-2 mt-1 text-gray-900">
//               <p>
//                 {profileData.degree} - {profileData.speciality}
//               </p>
//               <button className="py-0.5 px-2 border text-xs rounded-full border-black">
//                 {profileData.experience}
//               </button>
//             </div>

//             {/*------------------------Doctor About-----------------------*/}
//             <div>
//               <p className="flex items-center gap-1 text-md font-medium text-neutral-800 mt-3">
//                 About:
//               </p>
//               <p className="text-sm text-gray-800 max-w-[700px] mt-1">
//                 {profileData.about}
//               </p>
//             </div>

//             <p className="flex items-center gap-1 text-md font-medium text-neutral-800 mt-4">
//               Appointment Fee:
//               <span className="text-gray-800">
//                 $ 
//                 {isEdit ? (
//                   <input
//                     type="number"
//                      className="bg-gray-200 font-medium max-w-14 pl-2 border border-gray-300 rounded outline-indigo-600"
//                     min='20'
//                     onChange={(e) =>
//                       setProfileData((prev) => ({
//                         ...prev,
//                         fees: e.target.value,
//                       }))
//                     }
//                     value={profileData.fees}
//                   />
//                 ) : (
//                   profileData.fees
//                 )}
//               </span>
//             </p>

//             <p className="flex items-center gap-1 text-md font-medium text-neutral-800 mt-4">
//              New Password:
//               <span className="text-gray-800">
                
//                 {isEdit ? (
//                   <input
//                   onChange={(e) => setPassword(e.target.value)}
//                   value={password}
//                   className="border rounded px-3 py-2 outline-indigo-600"
//                   type="password"
//                   placeholder="Password"
//                   required
//                 />
//                 ) : (
//                   profileData.setPassword
//                 )}
//               </span>
//             </p>

//             <div className="flex gap-4 py-2 mt-4">
//               <p className="text-lg font-medium text-neutral-800 ">Address:</p>
//               <p className="text-sm">
//                 {profileData.address.line1} <br /> {profileData.address.line2}
//               </p>
//             </div>

//             <div className="flex gap-1 pt-2">
//               <input
//                 onChange={()=> isEdit && setProfileData(prev => ({...prev, available: !prev.available}))}
//                 checked={profileData.available}
//                 type="checkbox"
//                 name=""
//                 id=""
//               />
//               <label htmlFor="">Available</label>
//             </div>
             
//              {
//                isEdit 
//                ? <button onClick={updateProfile} className="px-6 py-2 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all">Save</button>
//                : <button onClick={() => setIsEdit(true)} className="px-6 py-2 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all">Edit</button>
//              }
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default DoctorProfile;



// import React, { useContext, useEffect, useState } from "react";
// import { DoctorContext } from "../../Context/DoctorContext";
// import axios from 'axios';
// import { toast } from "react-toastify";

// const DoctorProfile = () => {
//   const { dToken, getProfileData, setProfileData, profileData, backendUrl } = useContext(DoctorContext);
//   const [isEdit, setIsEdit] = useState(false);
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   // Function to update the profile details like fees and availability
//   const updateProfile = async () => {
//     try {
//       const updatedData = {
//         fees: Number(profileData.fees),
//         available: profileData.available
//       }

//       const { data } = await axios.post(backendUrl + "/api/doctor/update-profile", updatedData, { headers: { dToken } });

//       if (data.success) {
//         toast.success(data.message);
//         setIsEdit(false);
//         getProfileData();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   // Function to update password
//   const updatePassword = async () => {
//     if (newPassword !== confirmPassword) {
//       toast.error("Passwords do not match!");
//       return;
//     }

//     try {
//       const { data } = await axios.post(backendUrl + "/api/doctor/update-password", 
//         { password: newPassword }, 
//         { headers: { dToken } }
//       );

//       if (data.success) {
//         toast.success("Password updated successfully!");
//         setNewPassword('');
//         setConfirmPassword('');
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (dToken) {
//       getProfileData();
//     }
//   }, [dToken]);

//   return (
//     profileData && (
//       <div className="w-full max-w-6xl m-5">
//         <div className="flex flex-col gap-4 m-5">
//           <div>
//             <img
//               className="bg-primary w-full sm:max-w-64 rounded-lg"
//               src={profileData.image}
//               alt=""
//             />
//           </div>

//           <div className="flex-1 border border-stone-400 rounded-lg p-8 py-7 bg-white">
//             <p className="flex gap-2 items-center text-3xl font-medium text-neutral-900">
//               {profileData.name}
//             </p>
//             <div className="flex items-center gap-2 mt-1 text-gray-900">
//               <p>
//                 {profileData.degree} - {profileData.speciality}
//               </p>
//               <button className="py-0.5 px-2 border text-xs rounded-full border-black">
//                 {profileData.experience}
//               </button>
//             </div>

//             {/* Doctor About Section */}
//             <div>
//               <p className="flex items-center gap-1 text-md font-medium text-neutral-800 mt-3">
//                 About:
//               </p>
//               <p className="text-sm text-gray-800 max-w-[700px] mt-1">
//                 {profileData.about}
//               </p>
//             </div>

//             <p className="flex items-center gap-1 text-md font-medium text-neutral-800 mt-4">
//               Appointment Fee:
//               <span className="text-gray-800">
//                 $ 
//                 {isEdit ? (
//                   <input
//                     type="number"
//                     className="bg-gray-200 font-medium max-w-14 pl-2 border border-gray-300 rounded outline-indigo-600"
//                     min='20'
//                     onChange={(e) =>
//                       setProfileData((prev) => ({
//                         ...prev,
//                         fees: e.target.value,
//                       }))
//                     }
//                     value={profileData.fees}
//                   />
//                 ) : (
//                   profileData.fees
//                 )}
//               </span>
//             </p>

//             <div className="flex gap-4 py-2 mt-4">
//               <p className="text-lg font-medium text-neutral-800 ">Address:</p>
//               <p className="text-sm">
//                 {profileData.address.line1} <br /> {profileData.address.line2}
//               </p>
//             </div>

//             <div className="flex gap-1 pt-2">
//               <input
//                 onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))}
//                 checked={profileData.available}
//                 type="checkbox"
//                 id=""
//               />
//               <label htmlFor="">Available</label>
//             </div>

//             {/* Password Update Section */}
//             <div className="mt-6">
//               <h3 className="text-lg font-medium text-neutral-800">Update Password</h3>
//               <div className="flex flex-col gap-2 mt-3">
//                 <input
//                   type="password"
//                   placeholder="New Password"
//                   className="p-2 border border-gray-300 rounded"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                 />
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   className="p-2 border border-gray-300 rounded"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//                 <button 
//                   onClick={updatePassword} 
//                   className="px-6 py-2 bg-blue-500 text-white rounded-full mt-3"
//                 >
//                   Update Password
//                 </button>
//               </div>
//             </div>

//             {isEdit ? (
//               <button onClick={updateProfile} className="px-6 py-2 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all">
//                 Save
//               </button>
//             ) : (
//               <button onClick={() => setIsEdit(true)} className="px-6 py-2 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all">
//                 Edit
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default DoctorProfile;


import React, { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../Context/DoctorContext";
import axios from 'axios';
import { toast } from "react-toastify";

const DoctorProfile = () => {
  const { dToken, getProfileData, setProfileData, profileData, backendUrl } = useContext(DoctorContext);
  const [isEdit, setIsEdit] = useState(false);
  const [password, setPassword] = useState(""); // Password state

  const updateProfile = async () => {
    try {
      // Prepare the updated data
      const updatedData = {
        fees: Number(profileData.fees),
        available: profileData.available,
      };

      // If the password is changed, include it in the updated data
      if (password) {
        updatedData.password = password;
      }

      const { data } = await axios.post(
        backendUrl + "/api/doctor/update-profile",
        updatedData,
        { headers: { dToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false); // Exit edit mode
        setPassword(''); // Clear password input after saving
        getProfileData(); // Fetch updated data
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return (
    profileData && (
      <div className="w-full max-w-6xl m-5">
        <div className="flex flex-col gap-4 m-5">
          <div>
            <img
              className="bg-primary w-full sm:max-w-64 rounded-lg"
              src={profileData.image}
              alt=""
            />
          </div>

          <div className="flex-1 border border-stone-400 rounded-lg p-8 py-7 bg-white">
            <p className="flex gap-2 items-center text-3xl font-medium text-neutral-900">
              {profileData.name}
            </p>
            <div className="flex items-center gap-2 mt-1 text-gray-900">
              <p>{profileData.degree} - {profileData.speciality}</p>
              <button className="py-0.5 px-2 border text-xs rounded-full border-black">
                {profileData.experience}
              </button>
            </div>

            <div>
              <p className="flex items-center gap-1 text-md font-medium text-neutral-800 mt-3">
                About:
              </p>
              <p className="text-sm text-gray-800 max-w-[700px] mt-1">
                {profileData.about}
              </p>
            </div>

            <p className="flex items-center gap-1 text-md font-medium text-neutral-800 mt-4">
              Appointment Fee: 
              {isEdit ? (
                <input
                  type="number"
                  className="bg-gray-200 font-medium max-w-14 pl-2 border border-gray-300 rounded outline-indigo-600"
                  min="20"
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      fees: e.target.value,
                    }))
                  }
                  value={profileData.fees}
                />
              ) : (
                profileData.fees
              )}
            </p>

            <p className="flex items-center gap-1 text-md font-medium text-neutral-800 mt-4">
              New Password:
              <span className="text-gray-800">
                {isEdit ? (
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="border rounded px-3 py-2 outline-indigo-600"
                    type="password"
                    placeholder="Enter new password"
                    required
                  />
                ) : (
                  <i></i>
                )}
              </span>
            </p>

            <div className="flex gap-4 py-2 mt-4">
              <p className="text-lg font-medium text-neutral-800">Address:</p>
              <p className="text-sm">
                {profileData.address.line1} <br /> {profileData.address.line2}
              </p>
            </div>

            <div className="flex gap-1 pt-2">
              <input
                onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))}
                checked={profileData.available}
                type="checkbox"
              />
              <label>Available</label>
            </div>

            {isEdit ? (
              <button
                onClick={updateProfile}
                className="px-6 py-2 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="px-6 py-2 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
