export const checkEmailAvailability = async (email: string): Promise<boolean> => {
    const params = new URLSearchParams({ email });
    const url = `http://localhost:8088/mysite6/user/api/checkemail?${params.toString()}`;
  
    try {
      const response = await fetch(url);
      console.log(response);
      if (!response.ok) {
        throw new Error('네트워크 응답이 올바르지 않습니다');
      }
      const result = await response.json();
      return !result.data; 
    } catch (error) {
      console.error("이메일 중복 확인 중 오류 발생:", error);
      throw error;
    }
  };
  
  export interface RegisterUserData {
    name: string;
    email: string;
    password: string;
    gender: string;
  }
  
  export const registerUser = async (data: RegisterUserData): Promise<void> => {
    try {
      const response = await fetch("http://localhost:8088/mysite6/user/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('네트워크 응답이 올바르지 않습니다');
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
      throw error;
    }
  };