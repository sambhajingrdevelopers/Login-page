<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>3D Water Login Page</title>  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", Arial, sans-serif;
    }

    body {
      min-height: 100vh;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background:
        radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.95), transparent 18%),
        radial-gradient(circle at 70% 12%, rgba(68, 172, 255, 0.45), transparent 28%),
        linear-gradient(135deg, #dff6ff 0%, #8dcdf4 42%, #1467a8 100%);
      color: #073b63;
    }

    .ocean {
      position: fixed;
      inset: 0;
      overflow: hidden;
      perspective: 1200px;
    }

    .water-surface {
      position: absolute;
      left: -15%;
      right: -15%;
      bottom: -12%;
      height: 45%;
      background:
        radial-gradient(circle at 20% 10%, rgba(255, 255, 255, 0.75), transparent 18%),
        radial-gradient(circle at 80% 0%, rgba(255, 255, 255, 0.55), transparent 16%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.35), rgba(0, 91, 158, 0.7));
      border-radius: 50% 50% 0 0;
      filter: blur(0.2px);
      transform: rotateX(62deg) translateY(70px);
      box-shadow: inset 0 30px 70px rgba(255,255,255,0.45), inset 0 -30px 80px rgba(0,57,111,0.45);
      animation: waterMove 6s ease-in-out infinite alternate;
    }

    @keyframes waterMove {
      from { transform: rotateX(62deg) translateY(75px) scaleX(1); }
      to { transform: rotateX(62deg) translateY(58px) scaleX(1.03); }
    }

    .wave {
      position: absolute;
      bottom: 10%;
      width: 190%;
      height: 190px;
      left: -45%;
      background: repeating-radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0 2px, transparent 3px 16px);
      opacity: 0.55;
      transform: rotateX(72deg);
      animation: waveFlow 10s linear infinite;
    }

    .wave.two {
      bottom: 4%;
      opacity: 0.35;
      animation-duration: 15s;
      animation-direction: reverse;
    }

    @keyframes waveFlow {
      to { background-position: 220px 120px; }
    }

    .bubble {
      position: absolute;
      bottom: -90px;
      width: var(--size);
      height: var(--size);
      left: var(--left);
      border-radius: 50%;
      background:
        radial-gradient(circle at 30% 25%, rgba(255,255,255,0.95), rgba(255,255,255,0.25) 22%, rgba(0,139,232,0.18) 65%, rgba(255,255,255,0.6));
      border: 1px solid rgba(255,255,255,0.7);
      box-shadow: inset 0 0 18px rgba(255,255,255,0.9), 0 12px 30px rgba(0, 95, 150, 0.22);
      animation: bubbleUp var(--time) linear infinite;
      animation-delay: var(--delay);
    }

    @keyframes bubbleUp {
      0% { transform: translateY(0) translateX(0) scale(0.6); opacity: 0; }
      12% { opacity: 1; }
      100% { transform: translateY(-120vh) translateX(var(--move)) scale(1.05); opacity: 0; }
    }

    .login-wrap {
      position: relative;
      z-index: 5;
      width: min(92vw, 390px);
      min-height: 620px;
      padding: 26px;
      border-radius: 38px;
      transform-style: preserve-3d;
      transform: rotateX(4deg) rotateY(-4deg);
      background:
        linear-gradient(145deg, rgba(255,255,255,0.55), rgba(255,255,255,0.16)),
        radial-gradient(circle at 50% 0%, rgba(255,255,255,0.75), transparent 36%);
      border: 1.5px solid rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(22px) saturate(150%);
      -webkit-backdrop-filter: blur(22px) saturate(150%);
      box-shadow:
        inset 8px 8px 25px rgba(255,255,255,0.55),
        inset -12px -12px 28px rgba(0,91,153,0.22),
        0 35px 90px rgba(0,48,91,0.38),
        0 0 0 8px rgba(255,255,255,0.12);
      animation: cardFloat 5s ease-in-out infinite alternate;
    }

    @keyframes cardFloat {
      from { transform: translateY(0) rotateX(4deg) rotateY(-4deg); }
      to { transform: translateY(-14px) rotateX(1deg) rotateY(4deg); }
    }

    .login-wrap::before {
      content: "";
      position: absolute;
      inset: 12px;
      border-radius: 30px;
      border: 1px solid rgba(255,255,255,0.45);
      pointer-events: none;
      box-shadow: inset 0 0 35px rgba(255,255,255,0.45);
    }

    .water-logo {
      width: 112px;
      height: 112px;
      margin: 12px auto 18px;
      border-radius: 50%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background:
        radial-gradient(circle at 28% 22%, #ffffff 0 12%, rgba(255,255,255,0.34) 24%, rgba(0,143,235,0.28) 64%),
        linear-gradient(145deg, rgba(255,255,255,0.65), rgba(0,126,214,0.22));
      box-shadow:
        inset 0 0 24px rgba(255,255,255,0.95),
        inset -15px -16px 30px rgba(0,99,172,0.35),
        0 18px 35px rgba(0,82,143,0.24);
      border: 1px solid rgba(255,255,255,0.7);
    }

    .water-logo::before,
    .water-logo::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      border: 2px solid rgba(0, 113, 188, 0.55);
    }

    .water-logo::before {
      width: 38px;
      height: 38px;
      top: 26px;
      background: rgba(255,255,255,0.2);
    }

    .water-logo::after {
      width: 62px;
      height: 38px;
      bottom: 20px;
      background: rgba(255,255,255,0.16);
    }

    .splash-ring {
      position: absolute;
      width: 140px;
      height: 34px;
      bottom: -6px;
      border-radius: 50%;
      border: 2px solid rgba(0,123,210,0.28);
      box-shadow: 0 0 18px rgba(255,255,255,0.8);
      animation: ringPulse 1.7s ease-in-out infinite;
    }

    @keyframes ringPulse {
      0%, 100% { transform: scale(0.9); opacity: 0.6; }
      50% { transform: scale(1.08); opacity: 1; }
    }

    .title {
      text-align: center;
      font-size: 34px;
      font-weight: 800;
      letter-spacing: -1px;
      color: #063d66;
      text-shadow: 0 2px 0 rgba(255,255,255,0.45);
    }

    .subtitle {
      text-align: center;
      margin-top: 8px;
      color: rgba(7, 59, 99, 0.72);
      font-size: 15px;
      line-height: 1.5;
    }

    .form {
      margin-top: 34px;
    }

    .field {
      position: relative;
      height: 62px;
      margin-bottom: 17px;
      border-radius: 22px;
      background: rgba(255,255,255,0.28);
      border: 1px solid rgba(255,255,255,0.7);
      box-shadow:
        inset 6px 6px 14px rgba(255,255,255,0.45),
        inset -8px -8px 16px rgba(0,89,152,0.14),
        0 10px 22px rgba(0,82,143,0.11);
      overflow: hidden;
    }

    .field::after {
      content: "";
      position: absolute;
      left: 8px;
      right: 8px;
      top: 7px;
      height: 12px;
      border-radius: 999px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent);
      opacity: 0.65;
      pointer-events: none;
    }

    .field svg {
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 22px;
      height: 22px;
      color: #0b5f96;
      opacity: 0.78;
    }

    .field input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      background: transparent;
      padding: 0 48px 0 54px;
      color: #063d66;
      font-size: 15px;
      font-weight: 500;
    }

    .field input::placeholder {
      color: rgba(7, 59, 99, 0.58);
    }

    .eye-btn {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 28px;
      height: 28px;
      border: none;
      background: transparent;
      cursor: pointer;
      color: #0b5f96;
      opacity: 0.75;
    }

    .options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin: 4px 2px 24px;
      font-size: 14px;
      color: rgba(7, 59, 99, 0.78);
    }

    .remember {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }

    .remember input {
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 7px;
      border: 1px solid rgba(255,255,255,0.8);
      background: rgba(255,255,255,0.24);
      box-shadow: inset 0 0 8px rgba(255,255,255,0.65);
      position: relative;
    }

    .remember input:checked {
      background: linear-gradient(145deg, #73d7ff, #007bd3);
    }

    .remember input:checked::after {
      content: "✓";
      position: absolute;
      inset: 0;
      display: grid;
      place-items: center;
      color: white;
      font-size: 14px;
      font-weight: 900;
    }

    .forgot {
      text-decoration: none;
      color: #007bd3;
      font-weight: 700;
    }

    .login-btn {
      position: relative;
      width: 100%;
      height: 66px;
      border: none;
      outline: none;
      border-radius: 26px;
      cursor: pointer;
      overflow: hidden;
      color: #fff;
      font-size: 18px;
      font-weight: 800;
      letter-spacing: 0.2px;
      background:
        radial-gradient(circle at 20% 10%, rgba(255,255,255,0.85), transparent 16%),
        linear-gradient(135deg, #7ee1ff, #008ee8 48%, #00599f);
      box-shadow:
        inset 0 12px 18px rgba(255,255,255,0.35),
        inset 0 -12px 20px rgba(0,59,118,0.34),
        0 20px 34px rgba(0,113,188,0.3);
      transition: transform 0.22s ease, box-shadow 0.22s ease;
    }

    .login-btn:hover {
      transform: translateY(-3px) scale(1.01);
      box-shadow:
        inset 0 12px 18px rgba(255,255,255,0.35),
        inset 0 -12px 20px rgba(0,59,118,0.34),
        0 26px 44px rgba(0,113,188,0.36);
    }

    .login-btn:active {
      transform: translateY(2px) scale(0.98);
    }

    .login-btn span {
      position: relative;
      z-index: 2;
    }

    .btn-wave {
      position: absolute;
      inset: auto -20% -48% -20%;
      height: 75%;
      background:
        radial-gradient(circle, rgba(255,255,255,0.45) 0 8%, transparent 9% 100%),
        linear-gradient(90deg, rgba(255,255,255,0.22), rgba(255,255,255,0.05), rgba(255,255,255,0.28));
      border-radius: 50% 50% 0 0;
      animation: liquid 2.8s ease-in-out infinite alternate;
    }

    @keyframes liquid {
      from { transform: translateX(-6%) rotate(-2deg); }
      to { transform: translateX(6%) rotate(2deg); }
    }

    .divider {
      display: flex;
      align-items: center;
      gap: 16px;
      margin: 28px 0 18px;
      color: rgba(7, 59, 99, 0.58);
      font-size: 14px;
      font-weight: 600;
    }

    .divider::before,
    .divider::after {
      content: "";
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
    }

    .socials {
      display: flex;
      justify-content: center;
      gap: 14px;
    }

    .social-btn {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.75);
      background: rgba(255,255,255,0.32);
      box-shadow:
        inset 4px 4px 12px rgba(255,255,255,0.6),
        inset -7px -7px 14px rgba(0,91,153,0.15),
        0 10px 20px rgba(0,82,143,0.14);
      display: grid;
      place-items: center;
      cursor: pointer;
      color: #074d83;
      font-size: 21px;
      font-weight: 900;
      transition: transform 0.22s ease;
    }

    .social-btn:hover {
      transform: translateY(-4px) scale(1.06);
    }

    .signup {
      margin-top: 26px;
      text-align: center;
      font-size: 14px;
      color: rgba(7, 59, 99, 0.72);
    }

    .signup a {
      color: #007bd3;
      font-weight: 800;
      text-decoration: none;
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      pointer-events: none;
      background: rgba(255,255,255,0.7);
      animation: ripple 0.65s ease-out;
      mix-blend-mode: screen;
    }

    @keyframes ripple {
      to {
        transform: scale(4.2);
        opacity: 0;
      }
    }

    .drop {
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle at 30% 25%, white, rgba(0,132,219,0.32));
      box-shadow: 0 0 12px rgba(255,255,255,0.9);
      animation: dropPop 0.7s ease-out forwards;
      z-index: 50;
    }

    @keyframes dropPop {
      to {
        transform: translate(var(--x), var(--y)) scale(0.35);
        opacity: 0;
      }
    }

    @media (max-width: 430px) {
      body {
        align-items: flex-start;
        padding-top: 18px;
      }

      .login-wrap {
        min-height: auto;
        padding: 22px;
        border-radius: 32px;
      }

      .title {
        font-size: 30px;
      }

      .water-logo {
        width: 96px;
        height: 96px;
      }
    }
  </style></head>
<body>
  <div class="ocean">
    <div class="bubble" style="--size: 28px; --left: 8%; --time: 9s; --delay: -1s; --move: 34px;"></div>
    <div class="bubble" style="--size: 18px; --left: 18%; --time: 7s; --delay: -4s; --move: -28px;"></div>
    <div class="bubble" style="--size: 36px; --left: 77%; --time: 11s; --delay: -2s; --move: 38px;"></div>
    <div class="bubble" style="--size: 14px; --left: 90%; --time: 8s; --delay: -5s; --move: -22px;"></div>
    <div class="bubble" style="--size: 22px; --left: 58%; --time: 10s; --delay: -7s; --move: 24px;"></div>
    <div class="wave"></div>
    <div class="wave two"></div>
    <div class="water-surface"></div>
  </div>  <main class="login-wrap" id="tiltCard">
    <div class="water-logo">
      <div class="splash-ring"></div>
    </div><h1 class="title">Welcome Back</h1>
<p class="subtitle">Login to continue your journey<br />with smooth water feeling.</p>

<form class="form">
  <div class="field liquid-click">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
    <input type="text" placeholder="Username or Email" />
  </div>

  <div class="field liquid-click">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
    <input id="password" type="password" placeholder="Password" />
    <button class="eye-btn" type="button" onclick="togglePassword()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    </button>
  </div>

  <div class="options">
    <label class="remember">
      <input type="checkbox" checked />
      <span>Remember me</span>
    </label>
    <a class="forgot" href="#">Forgot Password?</a>
  </div>

  <button class="login-btn liquid-click" type="button">
    <span>Login</span>
    <div class="btn-wave"></div>
  </button>

  <div class="divider">or</div>

  <div class="socials">
    <button class="social-btn liquid-click" type="button">G</button>
    <button class="social-btn liquid-click" type="button"></button>
    <button class="social-btn liquid-click" type="button">f</button>
  </div>

  <p class="signup">Don’t have an account? <a href="#">Sign Up</a></p>
</form>

  </main>  <script>
    function togglePassword() {
      const input = document.getElementById("password");
      input.type = input.type === "password" ? "text" : "password";
    }

    function createRipple(event, element) {
      const rect = element.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement("span");

      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = event.clientX - rect.left - size / 2 + "px";
      ripple.style.top = event.clientY - rect.top - size / 2 + "px";

      element.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    }

    function createWaterDrops(event) {
      for (let i = 0; i < 8; i++) {
        const drop = document.createElement("span");
        drop.className = "drop";
        drop.style.left = event.clientX + "px";
        drop.style.top = event.clientY + "px";

        const angle = Math.random() * Math.PI * 2;
        const distance = 25 + Math.random() * 45;
        drop.style.setProperty("--x", Math.cos(angle) * distance + "px");
        drop.style.setProperty("--y", Math.sin(angle) * distance + "px");

        document.body.appendChild(drop);
        setTimeout(() => drop.remove(), 700);
      }
    }

    document.querySelectorAll(".liquid-click").forEach((item) => {
      item.addEventListener("click", (event) => {
        createRipple(event, item);
        createWaterDrops(event);
      });
    });

    const card = document.getElementById("tiltCard");

    document.addEventListener("mousemove", (event) => {
      const x = (window.innerWidth / 2 - event.clientX) / 45;
      const y = (window.innerHeight / 2 - event.clientY) / 45;
      card.style.transform = `translateY(-8px) rotateX(${y}deg) rotateY(${-x}deg)`;
    });

    document.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(4deg) rotateY(-4deg)";
    });
  </script></body>
</html>
