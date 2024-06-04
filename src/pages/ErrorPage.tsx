import { useRouter } from "../hooks/useRouter";

const ErrorPage = () => {
  const router = useRouter();
  return (
    <div>
      페이지를 찾을 수 없습니다.
      <button onClick={() => router.push("/")}>홈으로 가기</button>
    </div>
  );
};

export default ErrorPage;
