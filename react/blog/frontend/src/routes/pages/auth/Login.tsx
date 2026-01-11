import { Mail } from "lucide-react";

export default function Login() {
  const handleKakaoLogin = () => {
    window.location.href = "http://localhost:4000/auth/kakao";
  };
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="p-8 rounded-lg shadow-xl bg-slate-800">
          {/* 헤더 */}
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-2xl font-bold text-white">
              Welcome to SULOG
            </h1>
            <p className="text-gray-400">Sign in with your account</p>
          </div>

          <div className="space-y-4">
            {/* 이메일 로그인 버튼 */}
            <button className="flex items-center justify-center w-full gap-2 py-3 font-medium transition-colors bg-white rounded-lg text-slate-900 hover:bg-gray-100">
              <Mail className="w-5 h-5" />
              Continue with Email
            </button>

            {/* 구분선 */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-400 bg-slate-800">
                  Or continue with
                </span>
              </div>
            </div>

            {/* 카카오 로그인 버튼 */}
            <button
              onClick={handleKakaoLogin}
              className="w-full flex items-center justify-center gap-2 bg-[#FEE500] text-[#000000] py-3 rounded-lg hover:bg-[#FDD800] transition-colors font-medium"
            >
              <img
                src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png"
                alt="Kakao Logo"
                className="w-5 h-5"
              />
              Continue with Kakao
            </button>

            {/* 회원가입 유도 */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-400 bg-slate-800">
                  Don't have an account?
                </span>
              </div>
            </div>

            {/* 회원가입 버튼 */}
            <button className="flex items-center justify-center w-full gap-2 py-3 font-medium text-white transition-colors rounded-lg bg-slate-700 hover:bg-slate-600">
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
