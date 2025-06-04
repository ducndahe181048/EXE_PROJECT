// import React, { useContext } from 'react';
// import { AuthContext } from '../../../contexts/authContext';
// import { useNavigate } from 'react-router';

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);

//   const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     const email = formData.get('email') as string;
//     const password = formData.get('password') as string;

//     try {
//       await login(email, password);
//       navigate('/');
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <div className='flex items-center justify-center min-h-screen bg-gray-100'>
//       <form
//         onSubmit={handleLogin}
//         className='bg-white p-6 rounded shadow-md w-96'
//       >
//         <h2 className='text-2xl font-bold mb-4'>Login</h2>
//         <div className='mb-4'>
//           <label htmlFor='email' className='block text-sm font-medium mb-1'>
//             Email
//           </label>
//           <input
//             type='email'
//             name='email'
//             id='email'
//             required
//             className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500'
//           />
//         </div>
//         <div className='mb-4'>
//           <label htmlFor='password' className='block text-sm font-medium mb-1'>
//             Password
//           </label>
//           <input
//             type='password'
//             name='password'
//             id='password'
//             required
//             className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500'
//           />
//         </div>
//         <button
//           type='submit'
//           className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors'
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import image from "../../../assets/background.svg"

const Login = () => {
  return (
    <div className="flex items-center justify-center bg-white px-4 mt-4 mb-4" style={{ backgroundImage: `url(${image})` }}>
      <div className="w-full max-w-md text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[#AD3542] mb-6">
          Chào Mừng Quay Trở Lại !
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-[#AD3542]"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-[#AD3542]"
          />

          <button
            type="submit"
            className="w-full bg-[#C25C61] text-[#FFFDF1] font-bold py-2 rounded-full shadow hover:opacity-90 transition"
          >
            Đăng Nhập
          </button>
        </form>

        <div className="my-4">
          <p className="text-sm text-gray-500">hoặc</p>
        </div>
        <button
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-2xl" />
          <span className="text-sm font-medium text-gray-700">Đăng nhập bằng Google</span>
        </button>

        <div className="mt-4 flex flex-col items-center text-sm space-y-2">
          <Link
            to="/home"
            className="text-[#AD3542] font-medium hover:underline hover:text-[#C25C61] transition"
          >
            ⟵ Quay Về Cửa Hàng
          </Link>
          <Link
            to="#"
            className="text-[#AD3542] hover:underline hover:text-[#805AD5] transition"
          >
            Quên Mật Khẩu?
          </Link>
        </div>

        <Link to="/auth/register">
          <button
            className="w-full border border-[#AD3542] text-[#AD3542] font-bold py-2 rounded-full hover:bg-[#AD3542] hover:text-white transition mt-6"
          >
            Tạo Tài Khoản Mới
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
