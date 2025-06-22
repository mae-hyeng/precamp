const focusA2 = () => {
  const auth1 = document.getElementById("auth1");
  const auth2 = document.getElementById("auth2");

  if (auth1.value.length === 3) {
    auth2.focus();
  }
};

const focusA3 = () => {
  const auth2 = document.getElementById("auth2");
  const auth3 = document.getElementById("auth3");

  if (auth2.value.length === 4) {
    auth3.focus();
  }
};

const delDisabled = () => {
  const auth3 = document.getElementById("auth3");
  const pushBtn = document.getElementById("push-auth");

  if (auth3.value.length === 4) {
    pushBtn.disabled = false;
  }
};

const createToken = () => {
  const tokenNum = document.getElementById("tokenNum");
  const randomToken = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");

  tokenNum.innerText = randomToken;
  timerStart();
};

// 타이머 시작
let interval;
const timerStart = () => {
  const timer = document.getElementById("timer");
  const tokenNum = document.getElementById("tokenNum");
  const verifyAuth = document.getElementById("verify-auth");
  let time = 10;
  verifyAuth.disabled = false;
  interval = setInterval(() => {
    if (time >= 0) {
      flag = true;
      const min = Math.floor(time / 60);
      const sec = (time % 60).toString().padStart(2, "0");
      timer.innerText = `${min}:${sec}`;
      time--;
    } else {
      clearInterval(interval);
      flag = false;
      verifyAuth.disabled = true;

      timer.innerText = "3:00";
      timer.disabled = true;

      tokenNum.innerText = "000000";
    }
  }, 1000);
};

const verifyAuth = () => {
  const verifyAuth = document.getElementById("verify-auth");
  const submitBtn = document.getElementById("submit-btn");
  const tokenNum = document.getElementById("tokenNum");
  const timer = document.getElementById("timer");
  clearInterval(interval);
  window.alert("인증이 완료되었습니다");

  verifyAuth.disabled = true;
  submitBtn.disabled = false;
  tokenNum.innerText = "000000";
  timer.innerText = "3:00";
};

const verification = () => {
  const email = document.getElementById("email-veri").value;
  const name = document.getElementById("name-veri").value;
  const pw = document.getElementById("pw-veri").value;
  const pwr = document.getElementById("pw-re-veri").value;

  const areas = document.getElementById("areas").value;
  const girl = document.getElementById("girl").checked;
  const man = document.getElementById("man").checked;

  const errorEmailDiv = document.getElementById("error-email");
  const errorNameDiv = document.getElementById("error-name");
  const errorPwDiv = document.getElementById("error-pw");
  const errorPwReDiv = document.getElementById("error-pw-re");

  const errorSelectDiv = document.getElementById("error-select");
  const errorGenderDiv = document.getElementById("error-gender");

  let flag = true;

  if (email) {
    if (email.includes("@")) {
      errorEmailDiv.innerText = "";
    } else {
      flag = false;
      errorEmailDiv.innerText = "@가 포함되어야 합니다";
    }
  } else {
    flag = false;
    errorEmailDiv.innerText = "이메일을 입력해 주세요";
  }

  if (name) errorNameDiv.innerText = "";
  else {
    flag = false;
    errorNameDiv.innerText = "이름이 올바르지 않습니다.";
  }

  if (pw) errorPwDiv.innerText = "";
  else {
    flag = false;
    errorPwDiv.innerText = "비밀번호를 입력해 주세요";
  }

  if (pwr) {
    errorPwReDiv.innerText = "";
    if (pw === pwr) errorPwReDiv.innerText = "";
    else {
      flag = false;

      errorPwReDiv.innerText = "비밀번호1과 비밀번호2가 동일해야 합니다";
    }
  } else {
    flag = false;
    errorPwReDiv.innerText = "비밀번호를 입력해 주세요";
  }

  if (Number(areas)) errorSelectDiv.innerText = "";
  else {
    flag = false;
    errorSelectDiv.innerText = "지역을 선택해 주세요";
  }

  if (girl || man) errorGenderDiv.innerText = "";
  else {
    flag = false;
    errorGenderDiv.innerText = "성별을 선택해 주세요";
  }

  if (flag) window.alert("회원가입을 축하합니다!");
};
