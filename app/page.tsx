"use client";

import { MouseEvent, useState } from "react";

const loginPages = [
  {
    theme: "water",
    badge: "3D Water Login",
    title: "Welcome Back",
    subtitle: "Smooth liquid glass login experience",
    logo: "💧",
    button: "Login Now",
  },
  {
    theme: "neon",
    badge: "Cyber Login",
    title: "Access Portal",
    subtitle: "Neon futuristic login experience",
    logo: "⚡",
    button: "Enter System",
  },
  {
    theme: "royal",
    badge: "Royal Login",
    title: "Royal Access",
    subtitle: "Premium golden login design",
    logo: "👑",
    button: "Continue",
  },
  {
    theme: "space",
    badge: "Galaxy Login",
    title: "Space Access",
    subtitle: "Animated space style login page",
    logo: "🚀",
    button: "Launch Login",
  },
];

export default function Page() {
  const [pageIndex, setPageIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const page = loginPages[pageIndex];

  function nextPage() {
    setPageIndex((prev) => (prev + 1) % loginPages.length);
  }

  function rippleClick(e: MouseEvent<HTMLElement>) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = size + "px";
    ripple.style.height = size + "px";
    ripple.style.left = e.clientX - rect.left - size / 2 + "px";
    ripple.style.top = e.clientY - rect.top - size / 2 + "px";
    el.appendChild(ripple);

    setTimeout(() => ripple.remove(), 700);
  }

  return (
    <>
      <main className={`page ${page.theme}`}>
        <div className="bg">
          <span className="orb orb1"></span>
          <span className="orb orb2"></span>
          <span className="orb orb3"></span>

          <span className="bubble b1"></span>
          <span className="bubble b2"></span>
          <span className="bubble b3"></span>
          <span className="bubble b4"></span>

          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
        </div>

        <button className="nextBtn" onClick={nextPage}>
          Next →
        </button>

        <div className="counter">
          {pageIndex + 1} / {loginPages.length}
        </div>

        <section className="card">
          <div className="shine"></div>
          <div className="notch"></div>

          <div className="badge">
            <span></span>
            {page.badge}
          </div>

          <button className="logo" type="button" onClick={rippleClick}>
            <span className="logoIcon">{page.logo}</span>
            <div className="ring ring1"></div>
            <div className="ring ring2"></div>
          </button>

          <h1>{page.title}</h1>
          <p className="sub">{page.subtitle}</p>

          <form>
            <div className="inputBox" onClick={rippleClick}>
              <span className="icon">👤</span>
              <input type="text" placeholder="Username or Email" />
            </div>

            <div className="inputBox" onClick={rippleClick}>
              <span className="icon">🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <button
                type="button"
                className="eye"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPassword(!showPassword);
                }}
              >
                👁
              </button>
            </div>

            <div className="row">
              <label>
                <input type="checkbox" defaultChecked /> Remember
              </label>
              <a href="#">Forgot?</a>
            </div>

            <button type="button" className="login" onClick={rippleClick}>
              <span>{page.button}</span>
              <div className="liquid"></div>
            </button>

            <div className="divider">or continue with</div>

            <div className="social">
              <button type="button" onClick={rippleClick}>G</button>
              <button type="button" onClick={rippleClick}></button>
              <button type="button" onClick={rippleClick}>f</button>
            </div>

            <p className="signup">
              New user? <a href="#">Create account</a>
            </p>
          </form>
        </section>
      </main>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          width: 100%;
          min-height: 100%;
          overflow-x: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        body {
          margin: 0;
        }

        .page {
          position: relative;
          width: 100%;
          min-height: 100dvh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 84px 14px 24px;
          overflow-x: hidden;
          overflow-y: auto;
          transition: background 0.5s ease;
        }

        .page.water {
          background:
            radial-gradient(circle at 20% 15%, rgba(255,255,255,0.95), transparent 16%),
            radial-gradient(circle at 75% 12%, rgba(117,221,255,0.65), transparent 24%),
            linear-gradient(135deg, #e9fbff 0%, #86ddff 42%, #075a9f 100%);
        }

        .page.neon {
          background:
            radial-gradient(circle at 20% 15%, rgba(0,255,255,0.25), transparent 18%),
            radial-gradient(circle at 80% 20%, rgba(255,0,255,0.2), transparent 25%),
            linear-gradient(135deg, #05081d 0%, #10194b 45%, #02030c 100%);
        }

        .page.royal {
          background:
            radial-gradient(circle at 20% 15%, rgba(255,255,255,0.55), transparent 16%),
            radial-gradient(circle at 80% 20%, rgba(255,215,0,0.35), transparent 25%),
            linear-gradient(135deg, #fff4d0 0%, #daa520 42%, #5b3200 100%);
        }

        .page.space {
          background:
            radial-gradient(circle at 20% 15%, rgba(255,255,255,0.35), transparent 16%),
            radial-gradient(circle at 75% 12%, rgba(143,105,255,0.35), transparent 24%),
            linear-gradient(135deg, #0b0f2d 0%, #28125a 42%, #02030d 100%);
        }

        .bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(14px);
          animation: floatOrb 8s ease-in-out infinite alternate;
        }

        .orb1 {
          width: 180px;
          height: 180px;
          left: 4%;
          top: 5%;
          background: rgba(255,255,255,0.45);
        }

        .orb2 {
          width: 150px;
          height: 150px;
          right: 5%;
          top: 18%;
          background: rgba(0,195,255,0.25);
          animation-delay: -2s;
        }

        .orb3 {
          width: 130px;
          height: 130px;
          left: 45%;
          bottom: 10%;
          background: rgba(255,255,255,0.18);
          animation-delay: -4s;
        }

        @keyframes floatOrb {
          from {
            transform: translateY(0) scale(1);
          }
          to {
            transform: translateY(-18px) scale(1.06);
          }
        }

        .bubble {
          position: absolute;
          bottom: -60px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 25%, #fff, rgba(255,255,255,0.2) 30%, rgba(0,151,255,0.18) 75%);
          border: 1px solid rgba(255,255,255,0.55);
          box-shadow: inset 0 0 14px rgba(255,255,255,0.8);
          animation: bubbleUp linear infinite;
        }

        .b1 { width: 24px; height: 24px; left: 10%; animation-duration: 9s; }
        .b2 { width: 16px; height: 16px; left: 26%; animation-duration: 7s; animation-delay: -2s; }
        .b3 { width: 30px; height: 30px; left: 70%; animation-duration: 10s; animation-delay: -3s; }
        .b4 { width: 18px; height: 18px; left: 88%; animation-duration: 8s; animation-delay: -4s; }

        @keyframes bubbleUp {
          0% {
            transform: translateY(0) scale(0.6);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) scale(1.05);
            opacity: 0;
          }
        }

        .wave {
          position: absolute;
          width: 180%;
          left: -40%;
          opacity: 0.25;
        }

        .wave1 {
          bottom: 8%;
          height: 120px;
          background: repeating-radial-gradient(
            ellipse at center,
            rgba(255,255,255,0.35) 0 2px,
            transparent 3px 16px
          );
          animation: waveFlow 8s linear infinite;
        }

        .wave2 {
          bottom: 2%;
          height: 160px;
          background: repeating-radial-gradient(
            ellipse at center,
            rgba(255,255,255,0.18) 0 1px,
            transparent 4px 20px
          );
          animation: waveFlow 13s linear infinite reverse;
        }

        @keyframes waveFlow {
          to {
            background-position: 220px 120px;
          }
        }

        .nextBtn {
          position: fixed;
          top: 14px;
          right: 14px;
          z-index: 20;
          padding: 10px 16px;
          border: 1px solid rgba(255,255,255,0.55);
          border-radius: 999px;
          color: white;
          font-size: 13px;
          font-weight: 800;
          background: rgba(255,255,255,0.16);
          backdrop-filter: blur(14px);
          cursor: pointer;
          box-shadow: 0 12px 28px rgba(0,0,0,0.18);
        }

        .counter {
          position: fixed;
          top: 56px;
          right: 24px;
          z-index: 20;
          color: white;
          font-size: 12px;
          font-weight: 700;
        }

        .card {
          width: 100%;
          max-width: 380px;
          position: relative;
          z-index: 5;
          padding: 20px 18px 22px;
          border-radius: 32px;
          overflow: hidden;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.62), rgba(255,255,255,0.18)),
            radial-gradient(circle at 50% 0%, rgba(255,255,255,0.86), transparent 38%);
          border: 1px solid rgba(255,255,255,0.7);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          box-shadow:
            inset 6px 6px 18px rgba(255,255,255,0.5),
            inset -10px -10px 22px rgba(0,91,153,0.18),
            0 20px 50px rgba(0,48,91,0.28);
          animation: cardIn 0.45s ease;
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .card::before {
          content: "";
          position: absolute;
          inset: 8px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.35);
          pointer-events: none;
        }

        .shine {
          position: absolute;
          width: 140px;
          height: 500px;
          left: -110px;
          top: -80px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
          transform: rotate(20deg);
          animation: glassSweep 5s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes glassSweep {
          0%, 45% {
            transform: translateX(-30px) rotate(20deg);
            opacity: 0;
          }
          65% {
            opacity: 1;
          }
          100% {
            transform: translateX(440px) rotate(20deg);
            opacity: 0;
          }
        }

        .notch {
          width: 84px;
          height: 14px;
          border-radius: 999px;
          margin: 0 auto 14px;
          background: rgba(4,54,96,0.18);
          box-shadow: inset 0 2px 6px rgba(0,35,70,0.15);
        }

        .badge {
          width: max-content;
          margin: 0 auto 12px;
          padding: 7px 12px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 7px;
          color: rgba(6,61,102,0.82);
          font-size: 11px;
          font-weight: 800;
          background: rgba(255,255,255,0.28);
          border: 1px solid rgba(255,255,255,0.58);
        }

        .badge span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #11d6ff;
          box-shadow: 0 0 0 4px rgba(17,214,255,0.12);
        }

        .logo {
          width: 96px;
          height: 96px;
          margin: 8px auto 16px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.65);
          background:
            radial-gradient(circle at 28% 22%, #ffffff 0 12%, rgba(255,255,255,0.36) 24%, rgba(0,143,235,0.31) 64%),
            conic-gradient(from 90deg, rgba(255,255,255,0.9), rgba(0,172,255,0.25), rgba(255,255,255,0.74), rgba(0,121,211,0.3), rgba(255,255,255,0.9));
          box-shadow:
            inset 0 0 24px rgba(255,255,255,0.9),
            0 14px 26px rgba(0,82,143,0.2);
          display: grid;
          place-items: center;
          position: relative;
          overflow: visible;
          cursor: pointer;
        }

        .logoIcon {
          font-size: 38px;
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(0,123,210,0.2);
          pointer-events: none;
        }

        .ring1 {
          width: 120px;
          height: 26px;
          bottom: -3px;
        }

        .ring2 {
          width: 78px;
          height: 18px;
          bottom: 2px;
        }

        h1 {
          text-align: center;
          font-size: 28px;
          font-weight: 900;
          color: #063d66;
          letter-spacing: -0.5px;
        }

        .sub {
          text-align: center;
          margin-top: 8px;
          color: rgba(7,59,99,0.72);
          font-size: 14px;
          line-height: 1.4;
        }

        form {
          margin-top: 22px;
        }

        .inputBox {
          position: relative;
          height: 54px;
          margin-bottom: 14px;
          border-radius: 18px;
          background: rgba(255,255,255,0.32);
          border: 1px solid rgba(255,255,255,0.72);
          box-shadow:
            inset 4px 4px 10px rgba(255,255,255,0.45),
            0 8px 20px rgba(0,82,143,0.08);
          overflow: hidden;
        }

        .icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 16px;
        }

        .inputBox input {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          background: transparent;
          padding: 0 46px 0 44px;
          font-size: 14px;
          font-weight: 600;
          color: #063d66;
        }

        .inputBox input::placeholder {
          color: rgba(7,59,99,0.58);
        }

        .eye {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 16px;
        }

        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 4px 2px 18px;
          font-size: 13px;
          color: rgba(7,59,99,0.78);
        }

        .row label {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .row a,
        .signup a {
          color: #007bd3;
          font-weight: 800;
          text-decoration: none;
        }

        .login {
          width: 100%;
          height: 56px;
          border: none;
          border-radius: 18px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          color: #fff;
          font-size: 16px;
          font-weight: 900;
          background:
            radial-gradient(circle at 20% 10%, rgba(255,255,255,0.88), transparent 16%),
            linear-gradient(135deg, #7ee1ff, #008ee8 48%, #00599f);
          box-shadow: 0 14px 24px rgba(0,113,188,0.22);
        }

        .login span {
          position: relative;
          z-index: 2;
        }

        .liquid {
          position: absolute;
          inset: auto -20% -48% -20%;
          height: 76%;
          border-radius: 50% 50% 0 0;
          background:
            radial-gradient(circle, rgba(255,255,255,0.38) 0 8%, transparent 9% 100%),
            linear-gradient(90deg, rgba(255,255,255,0.24), rgba(255,255,255,0.06), rgba(255,255,255,0.24));
          animation: liquidMove 2.6s ease-in-out infinite alternate;
        }

        @keyframes liquidMove {
          from {
            transform: translateX(-6%) rotate(-2deg);
          }
          to {
            transform: translateX(6%) rotate(2deg);
          }
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 18px 0 14px;
          color: rgba(7,59,99,0.58);
          font-size: 12px;
          font-weight: 700;
        }

        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.82), transparent);
        }

        .social {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .social button {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.72);
          background: rgba(255,255,255,0.34);
          display: grid;
          place-items: center;
          cursor: pointer;
          color: #074d83;
          font-size: 20px;
          font-weight: 800;
          box-shadow: 0 8px 18px rgba(0,82,143,0.1);
          overflow: hidden;
          position: relative;
        }

        .signup {
          margin-top: 18px;
          text-align: center;
          font-size: 13px;
          color: rgba(7,59,99,0.72);
        }

        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          pointer-events: none;
          background: rgba(255,255,255,0.7);
          animation: ripple 0.7s ease-out;
          z-index: 10;
        }

        @keyframes ripple {
          to {
            transform: scale(4.2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
