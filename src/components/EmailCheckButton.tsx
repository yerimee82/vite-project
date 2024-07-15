import React from 'react';

interface EmailCheckButtonProps {
  onClick: () => void;
  emailAvailable: boolean | null;
}

const EmailCheckButton: React.FC<EmailCheckButtonProps> = ({ onClick, emailAvailable }) => {
  return (
    <>
      <button type="button" id="btn-check" onClick={onClick}>
        이메일 확인
      </button>
      {emailAvailable === true && (
        <img
          id="img-check"
          src="/src/assets/images/check.png"
          alt="Check"
          style={{ verticalAlign: "bottom", width: "20px" }}
        />
      )}
      {emailAvailable === false && (
        <p className="error-message">존재하는 이메일입니다. 다른 이메일을 사용해 주세요.</p>
      )}
    </>
  );
};

export default EmailCheckButton;