"use client";

import { MouseEvent, useState } from "react";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  function waterClick(e: MouseEvent<HTMLElement>) {
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
      <main className="page">
        <div className="bg">
          <span className="orb orb1"></span>
          <span className="orb orb2"></span>
          <span className="orb orb3"></span>

          <span className="bubble b1"></span>
          <span className="bubble b2"></span>
          <span className="bubble b3"></span>
          <span className="bubble b4"></span>
          <span className="bubble b5"></span>

          <span className="fish fish1">◆</span>
          <span className="fish fish2">◆</span>

          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="water"></div>
        </div>

        <section className="card">
          <div className="shine"></div>
          <div className="notch"></div>

          <div className="badge">
            <span></span>
            3D Water Login
          </div>

          <button className="logo" onClick={waterClick} type="button">
            <div className="dropLogo"></div>
            <div className="ring ring1"></div>
            <div className="ring ring2"></div>
          </button>

          <h1>Welcome Back</h1>
          <p className="sub">Login with smooth liquid glass feeling</p>

          <form>
            <div className="inputBox" onClick={waterClick}>
              <span className="icon">👤</span>
              <input type="text" placeholder="Username or Email" />
            </div>

            <div className="inputBox" onClick={waterClick}>
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

            <button type="button" className="login" onClick={waterClick}>
              <span>Login Now</span>
              <div className="liquid"></div>
            </button>

            <div className="divider">or continue with</div>

            <div className="social">
              <button type="button" onClick={waterClick}>G</button>
              <button type="button" onClick={waterClick}></button>
              <button type="button" onClick={waterClick}>f</button>
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

        .page {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 20% 15%, rgba(255, 255, 255, 0.95), transparent 16%),
            radial-gradient(circle at 75% 12%, rgba(117, 221, 255, 0.75), transparent 24%),
            radial-gradient(circle at 50% 70%, rgba(0, 128, 255, 0.45), transparent 40%),
            linear-gradient(135deg, #e9fbff 0%, #86ddff 42%, #075a9f 100%);
        }

        .bg {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(12px);
          animation: floatOrb 8s ease-in-out infinite alternate;
        }

        .orb1 {
          width: 260px;
          height: 260px;
          left: 5%;
          top: 5%;
          background: rgba(255, 255, 255, 0.65);
        }

        .orb2 {
          width: 220px;
          height: 220px;
          right: 6%;
          top: 20%;
          background: rgba(0, 195, 255, 0.35);
          animation-delay: -3s;
        }

        .orb3 {
          width: 170px;
          height: 170px;
          left: 50%;
          bottom: 14%;
          background: rgba(255, 255, 255, 0.28);
          animation-delay: -5s;
        }

        @keyframes floatOrb {
          from {
            transform: translateY(0) scale(1);
          }
          to {
            transform: translateY(-28px) scale(1.08);
          }
        }

        .water {
          position: absolute;
          left: -15%;
          right: -15%;
          bottom: -14%;
          height: 47%;
          border-radius: 50% 50% 0 0;
          background:
            radial-gradient(circle at 20% 10%, rgba(255,255,255,0.85), transparent 18%),
            linear-gradient(180deg, rgba(255,255,255,0.4), rgba(0, 78, 160, 0.75));
          transform: rotateX(62deg) translateY(65px);
          box-shadow:
            inset 0 35px 80px rgba(255,255,255,0.5),
            inset 0 -35px 90px rgba(0, 43, 110, 0.5);
          animation: waterMove 5s ease-in-out infinite alternate;
        }

        @keyframes waterMove {
          from {
            transform: rotateX(62deg) translateY(76px) scaleX(1);
          }
          to {
            transform: rotateX(62deg) translateY(48px) scaleX(1.04);
          }
        }

        .wave {
          position: absolute;
          width: 195%;
          left: -45%;
          transform: rotateX(72deg);
          opacity: 0.45;
        }

        .wave1 {
          bottom: 11%;
          height: 190px;
          background: repeating-radial-gradient(
            ellipse at center,
            rgba(255,255,255,0.35) 0 2px,
            transparent 3px 16px
          );
          animation: waveFlow 9s linear infinite;
        }

        .wave2 {
          bottom: 4%;
          height: 220px;
          background: repeating-radial-gradient(
            ellipse at center,
            rgba(255,255,255,0.2) 0 1px,
            transparent 4px 20px
          );
          animation: waveFlow 14s linear infinite reverse;
        }

        @keyframes waveFlow {
          to {
            background-position: 230px 130px;
          }
        }

        .bubble {
          position: absolute;
          bottom: -80px;
          border-radius: 50%;
          background:
            radial-gradient(circle at 30% 25%, #fff, rgba(255,255,255,0.24) 25%, rgba(0, 151, 255, 0.22) 70%);
          border: 1px solid rgba(255,255,255,0.7);
          box-shadow: inset 0 0 18px rgba(255,255,255,0.9);
          animation: bubbleUp linear infinite;
        }

        .b1 { width: 30px; height: 30px; left: 8%; animation-duration: 9s; }
        .b2 { width: 18px; height: 18px; left: 22%; animation-duration: 7s; animation-delay: -3s; }
        .b3 { width: 42px; height: 42px; left: 78%; animation-duration: 11s; animation-delay: -4s; }
        .b4 { width: 20px; height: 20px; left: 58%; animation-duration: 8s; animation-delay: -2s; }
        .b5 { width: 16px; height: 16px; left: 92%; animation-duration: 10s; animation-delay: -5s; }

        @keyframes bubbleUp {
          0% {
            transform: translateY(0) scale(0.5);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) scale(1.1);
            opacity: 0;
          }
        }

        .fish {
          position: absolute;
          left: -10%;
          color: rgba(255,255,255,0.65);
          font-size: 22px;
          filter: drop-shadow(0 6px 8px rgba(0,64,120,0.25));
          animation: fishSwim 13s linear infinite;
        }

        .fish::after {
          content: "";
          position: absolute;
          right: -9px;
          top: 7px;
          width: 0;
          height: 0;
          border-left: 9px solid rgba(255,255,255,0.55);
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }

        .fish1 {
          top: 34%;
        }

        .fish2 {
          top: 61%;
          animation-duration: 17s;
          animation-delay: -7s;
          transform: scale(0.72);
        }

        @keyframes fishSwim {
          to {
            left: 112%;
          }
        }

        .card {
          width: min(92vw, 410px);
          min-height: 660px;
          position: relative;
          z-index: 5;
          padding: 26px;
          border-radius: 46px;
          overflow: hidden;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.62), rgba(255,255,255,0.18)),
            radial-gradient(circle at 50% 0%, rgba(255,255,255,0.86), transparent 38%);
          border: 1.5px solid rgba(255,255,255,0.75);
          backdrop-filter: blur(25px) saturate(170%);
          -webkit-backdrop-filter: blur(25px) saturate(170%);
          box-shadow:
            inset 8px 8px 26px rgba(255,255,255,0.6),
            inset -14px -14px 30px rgba(0, 91, 153, 0.24),
            0 45px 110px rgba(0, 48, 91, 0.42),
            0 0 0 10px rgba(255,255,255,0.12);
          animation: cardFloat 4s ease-in-out infinite alternate;
        }

        @keyframes cardFloat {
          from {
            transform: translateY(0) rotateX(5deg) rotateY(-5deg);
          }
          to {
            transform: translateY(-13px) rotateX(1deg) rotateY(5deg);
          }
        }

        .card::before {
          content: "";
          position: absolute;
          inset: 12px;
          border-radius: 36px;
          border: 1px solid rgba(255,255,255,0.45);
          pointer-events: none;
          box-shadow: inset 0 0 36px rgba(255,255,255,0.46);
        }

        .shine {
          position: absolute;
          width: 220px;
          height: 760px;
          left: -140px;
          top: -160px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          transform: rotate(22deg);
          animation: glassSweep 5s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes glassSweep {
          0%, 45% {
            transform: translateX(-40px) rotate(22deg);
            opacity: 0;
          }
          65% {
            opacity: 1;
          }
          100% {
            transform: translateX(620px) rotate(22deg);
            opacity: 0;
          }
        }

        .notch {
          width: 86px;
          height: 20px;
          border-radius: 999px;
          margin: 0 auto 16px;
          background: rgba(4, 54, 96, 0.18);
          box-shadow: inset 0 2px 6px rgba(0, 35, 70, 0.22), 0 1px 0 rgba(255,255,255,0.58);
        }

        .badge {
          width: max-content;
          margin: 0 auto 14px;
          padding: 8px 14px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(6,61,102,0.82);
          font-size: 12px;
          font-weight: 800;
          background: rgba(255,255,255,0.3);
          border: 1px solid rgba(255,255,255,0.65);
          box-shadow: inset 0 0 12px rgba(255,255,255,0.5);
        }

        .badge span {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #11d6ff;
          box-shadow: 0 0 0 5px rgba(17,214,255,0.14), 0 0 18px rgba(17,214,255,0.9);
        }

        .logo {
          width: 124px;
          height: 124px;
          margin: 8px auto 18px;
          border-radius: 50%;
          position: relative;
          display: grid;
          place-items: center;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.72);
          background:
            radial-gradient(circle at 28% 22%, #ffffff 0 12%, rgba(255,255,255,0.36) 24%, rgba(0,143,235,0.31) 64%),
            conic-gradient(from 90deg, rgba(255,255,255,0.9), rgba(0,172,255,0.25), rgba(255,255,255,0.74), rgba(0,121,211,0.3), rgba(255,255,255,0.9));
          box-shadow:
            inset 0 0 26px rgba(255,255,255,0.96),
            inset -17px -18px 34px rgba(0,99,172,0.37),
            0 22px 42px rgba(0,82,143,0.28);
          overflow: visible;
        }

        .dropLogo {
          width: 58px;
          height: 76px;
          border-radius: 50% 50% 55% 55%;
          background:
            radial-gradient(circle at 32% 22%, rgba(255,255,255,0.95), transparent 22%),
            linear-gradient(165deg, rgba(255,255,255,0.45), rgba(0,135,230,0.42));
          border: 2px solid rgba(0,113,188,0.48);
          box-shadow: inset 0 0 18px rgba(255,255,255,0.86);
          animation: logoPulse 2.3s ease-in-out infinite alternate;
        }

        @keyframes logoPulse {
          to {
            transform: scale(1.07) translateY(-3px);
          }
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(0,123,210,0.28);
          box-shadow: 0 0 18px rgba(255,255,255,0.82);
          pointer-events: none;
        }

        .ring1 {
          width: 150px;
          height: 38px;
          bottom: -6px;
          animation: ringPulse 1.7s ease-in-out infinite;
        }

        .ring2 {
          width: 102px;
          height: 24px;
          bottom: 3px;
          animation: ringPulse 1.7s ease-in-out infinite reverse;
        }

        @keyframes ringPulse {
          0%, 100% {
            transform: scale(0.88);
            opacity: 0.55;
          }
          50% {
            transform: scale(1.12);
            opacity: 1;
          }
        }

        h1 {
          text-align: center;
          font-size: 36px;
          font-weight: 900;
          color: #063d66;
          letter-spacing: -1px;
          text-shadow: 0 2px 0 rgba(255,255,255,0.5);
        }

        .sub {
          text-align: center;
          margin-top: 8px;
          color: rgba(7,59,99,0.72);
          font-size: 15px;
        }

        form {
          margin-top: 30px;
        }

        .inputBox {
          position: relative;
          height: 62px;
          margin-bottom: 16px;
          border-radius: 23px;
          background: rgba(255,255,255,0.32);
          border: 1px solid rgba(255,255,255,0.75);
          box-shadow:
            inset 6px 6px 14px rgba(255,255,255,0.5),
            inset -8px -8px 16px rgba(0,89,152,0.15),
            0 11px 24px rgba(0,82,143,0.12);
          overflow: hidden;
        }

        .inputBox::after {
          content: "";
          position: absolute;
          left: 8px;
          right: 8px;
          top: 7px;
          height: 12px;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.78), transparent);
          pointer-events: none;
        }

        .icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 18px;
          z-index: 2;
        }

        .inputBox input {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          background: transparent;
          padding: 0 50px 0 56px;
          color: #063d66;
          font-size: 15px;
          font-weight: 700;
        }

        .inputBox input::placeholder {
          color: rgba(7,59,99,0.6);
        }

        .eye {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 17px;
        }

        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 4px 2px 24px;
          font-size: 14px;
          color: rgba(7,59,99,0.78);
        }

        .row label {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .row a,
        .signup a {
          color: #007bd3;
          font-weight: 900;
          text-decoration: none;
        }

        .login {
          width: 100%;
          height: 68px;
          border: none;
          border-radius: 27px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          color: #fff;
          font-size: 18px;
          font-weight: 900;
          background:
            radial-gradient(circle at 20% 10%, rgba(255,255,255,0.88), transparent 16%),
            linear-gradient(135deg, #7ee1ff, #008ee8 48%, #00599f);
          box-shadow:
            inset 0 12px 18px rgba(255,255,255,0.36),
            inset 0 -12px 20px rgba(0,59,118,0.35),
            0 22px 38px rgba(0,113,188,0.32);
          transition: 0.25s;
        }

        .login:hover {
          transform: translateY(-3px) scale(1.01);
        }

        .login span {
          position: relative;
          z-index: 3;
        }

        .liquid {
          position: absolute;
          inset: auto -20% -48% -20%;
          height: 76%;
          border-radius: 50% 50% 0 0;
          background:
            radial-gradient(circle, rgba(255,255,255,0.48) 0 8%, transparent 9% 100%),
            linear-gradient(90deg, rgba(255,255,255,0.24), rgba(255,255,255,0.06), rgba(255,255,255,0.3));
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
          gap: 14px;
          margin: 25px 0 17px;
          color: rgba(7,59,99,0.58);
          font-size: 13px;
          font-weight: 800;
        }

        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent);
        }

        .social {
          display: flex;
          justify-content: center;
          gap: 14px;
        }

        .social button {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.78);
          background: rgba(255,255,255,0.34);
          box-shadow:
            inset 4px 4px 12px rgba(255,255,255,0.62),
            inset -7px -7px 14px rgba(0,91,153,0.16),
            0 10px 21px rgba(0,82,143,0.15);
          display: grid;
          place-items: center;
          cursor: pointer;
          color: #074d83;
          font-size: 21px;
          font-weight: 900;
          transition: 0.22s;
          position: relative;
          overflow: hidden;
        }

        .social button:hover {
          transform: translateY(-5px) scale(1.08);
        }

        .signup {
          margin-top: 25px;
          text-align: center;
          font-size: 14px;
          color: rgba(7,59,99,0.72);
        }

        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          pointer-events: none;
          background: rgba(255,255,255,0.72);
          animation: ripple 0.7s ease-out;
          mix-blend-mode: screen;
          z-index: 10;
        }

        @keyframes ripple {
          to {
            transform: scale(4.4);
            opacity: 0;
          }
        }

        @media (max-width: 430px) {
          .page {
            align-items: flex-start;
            padding: 14px;
          }

          .card {
            min-height: auto;
            padding: 22px;
            border-radius: 36px;
            animation: none;
          }

          h1 {
            font-size: 31px;
          }

          .logo {
            width: 104px;
            height: 104px;
          }

          .inputBox {
            height: 58px;
          }

          .login {
            height: 63px;
          }

          .fish {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
