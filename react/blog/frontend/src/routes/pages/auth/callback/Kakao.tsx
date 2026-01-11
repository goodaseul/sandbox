import { Mail } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Redirection from "../../../../components/common/Redirection";
import { useNavigate, useSearchParams } from "react-router";
import { axiosInstance } from "../../../../api/axios";
import { useAuthStore } from "../../../../store/authStore";

export default function Kakao() {
  const navigate = useNavigate();
  const setUserData = useAuthStore((state) => state.setUserData);

  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get("access_token");
  const emailYn = searchParams.get("email");

  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [error, setError] = useState("");
  const hadleFormAction = async () => {
    setError("");
    try {
      if (accessToken) sessionStorage.setItem("access_token", accessToken);
      const {
        data: { user },
      } = await axiosInstance.patch("/auth/update-email", {
        email,
      });
      setUserData({
        id: user.id,
        kakaoId: user.kakaoId,
        profileImage: user.profileImage,
        nickname: user.nickname,
        email: user.email,
      });
      navigate("/");
    } catch (e) {
      setEmail(e instanceof Error ? e.message : "unknown error");
    }
  };

  const fetchAndSaveUser = useCallback(async () => {
    setError("");
    try {
      if (accessToken) sessionStorage.setItem("access_token", accessToken);
      const { data } = await axiosInstance.get("/auth/me");
      setUserData(data);
      navigate("/");
    } catch (e) {
      setEmail(e instanceof Error ? e.message : "unknown error");
    }
  }, [accessToken, navigate, setUserData]);
  useEffect(() => {
    if (emailYn === "N") {
      setShowForm(true);
    } else {
      fetchAndSaveUser();
    }
  }, [emailYn, fetchAndSaveUser]);
  return (
    <>
      <>
        {/* 이메일 정보를 받아야 할 때 */}
        {showForm ? (
          <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
            <div className="w-full max-w-md">
              <div className="p-8 rounded-lg shadow-xl bg-slate-800">
                <div className="mb-8 text-center">
                  <h1 className="mb-2 text-2xl font-bold text-white">
                    You're almost there
                  </h1>
                  <p className="text-gray-400">Sign up with just your email!</p>
                </div>

                <form className="space-y-4" action={hadleFormAction}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-300"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                      <input
                        type="email"
                        id="email"
                        className="w-full py-3 pl-10 pr-4 text-white rounded-lg bg-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter your email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    {error && <p className="mt-2 text-rose-500">{error}</p>}
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      className="flex-1 py-3 text-white transition-colors bg-gray-600 rounded-lg hover:bg-gray-700"
                      onClick={() => navigate(-1)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
                      //   onClick={() => navigate(-1)}
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <Redirection />
        )}
      </>
    </>
  );
}
