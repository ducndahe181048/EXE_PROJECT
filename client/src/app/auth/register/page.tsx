import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import image from "../../../assets/background.svg"

const Register = () => {
  return (
    <div className="flex items-center justify-center bg-white px-4 mt-6 mb-6" style={{ backgroundImage: `url(${image})` }}>
      <div className="w-full max-w-md text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[#AD3542] mb-6">
          Đăng Ký Tài Khoản Mới
        </h1>

        <form className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Họ Và Tên"
            className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 text-[#AD3542]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 text-[#AD3542]"
          />
          <input
            type="password"
            placeholder="Mật Khẩu"
            className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 text-[#AD3542]"
          />
          <input
            type="password"
            placeholder="Nhập Lại Mật Khẩu"
            className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 text-[#AD3542]"
          />
          <input
            type="tel"
            placeholder="Số Điện Thoại"
            className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 text-[#AD3542]"
          />

          <button
            type="submit"
            className="w-full bg-[#AD3542] text-white font-medium py-2 rounded-lg shadow hover:opacity-90 transition mt-4"
          >
            Đăng Ký
          </button>
        </form>

        <div className="text-center mt-4 text-[#AD3542]">
          Bạn Đã Có Tài Khoản Rồi?{" "}
          <Link
            to="/auth/login"
            className="font-semibold text-[#AD3542] hover:underline"
          >
            Đăng Nhập
          </Link>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <span className="border-t border-gray-300 w-full" />
          <span className="px-4 text-sm text-gray-500">HOẶC</span>
          <span className="border-t border-gray-300 w-full" />
        </div>

        <div className="mt-4 space-y-3">
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition">
            <FcGoogle className="text-xl" />
            <span className="text-sm font-medium text-gray-700">
              Tiếp Tục Với Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
