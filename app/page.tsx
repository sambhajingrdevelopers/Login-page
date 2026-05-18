"use client";

import { MouseEvent, useState } from "react";

const loginPages = [
  {
    theme: "water",
    badge: "3D Water Login",
    title: "Welcome Back",
    subtitle: "Liquid glass login with water splash feeling",
    logo: "💧",
    button: "Login Now",
  },
  {
    theme: "neon",
    badge: "Cyber Login",
    title: "Access Portal",
    subtitle: "Dark neon security login experience",
    logo: "⚡",
    button: "Enter System",
  },
  {
    theme: "royal",
    badge: "Royal Secure",
    title: "Royal Login",
    subtitle: "Premium golden glass login page",
    logo: "👑",
    button: "Continue",
  },
  {
    theme: "space",
    badge: "Galaxy Access",
    title: "Space Login",
    subtitle: "Animated galaxy login interface",
    logo: "🚀",
    button: "Launch Login",
  },
  {
    theme: "pink",
    badge: "Crystal Login",
    title: "Hello Again",
    subtitle: "Soft crystal glass login design",
    logo: "💎",
    button: "Sign In",
  },
];

export default function Page() {
  const [pageIndex, setPageIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [changing, setChanging] = useState(false);

  const page = loginPages[pageIndex];

  function createRipple(e: MouseEvent<HTMLElement>) {
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

    setTimeout(() => ripple.remove(), 750);
  }

  function nextPage(e: MouseEvent<HTMLButtonElement>) {
    createRipple(e);

    if (changing) return;

    setChanging(true);

    setTimeout(() => {
      setPageIndex((prev) => (prev + 1) % loginPages.length);
    }, 320);

    setTimeout(() => {
      setChanging(false);
    }, 720);
  }

  return (
    <>
      <main className={`page ${page.theme}`}>
        <div className="background">
          <span className="orb orb1"></span>
          <span className="orb orb2"></span>
          <span className="orb orb3"></span>

          <span className="bubble b1"></span>
          <span className="bubble b2"></span>
          <span className="bubble b3"></span>
          <span className="bubble b4"></span>
          <span className="bubble b5"></span>

          <span className="star s1">✦</span>
          <span className="star s2">✧</span>
          <span className="star s3">✦</span>
          <span className="star s4">✧</span>

          <div className="waterLine waterLine1"></div>
          <div className="waterLine waterLine2"></div>
        </div>

        <button className="nextDesignBtn" onClick={nextPage}>
          <span>Next Design</span>
          <b>→</b>
        </button>

        <div className="counter">
          {pageIndex + 1} / {loginPages.length}
        </div>

        <section className="stage">
          <div className={`card ${changing ? "cardChanging" : "cardActive"}`}>
            <div className="glassLight"></div>
            <div className="topNotch"></div>

            <div className="badge">
              <span></span>
              {page.badge}
            </div>

            <button className="logo" type="button" onClick={createRipple}>
              <span className="logoIcon">{page.logo}</span>
              <i className="ring ring1"></i>
              <i className="ring ring2"></i>
            </button>

            <h1>{page.title}</h1>
            <p className="subtitle">{page.subtitle}</p>

            <form>
              <div className="inputBox" onClick={createRipple}>
                <span className="inputIcon">👤</span>
                <input type="text" placeholder="Username or Email" />
              </div>

              <div className="inputBox" onClick={createRipple}>
                <span className="inputIcon">🔒</span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="eyeBtn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowPassword(!showPassword);
                  }}
                >
                  👁
                </button>
              </div>

              <div className="formRow">
                <label>
                  <input type="checkbox" defaultChecked /> Remember
                </label>
                <a href="#">Forgot?</a>
              </div>

              <button type="button" className="loginBtn" onClick={createRipple}>
                <span>{page.button}</span>
                <i className="liquid"></i>
                <i className="btnShine"></i>
              </button>

              <div className="divider">or continue with</div>

              <div className="socials">
                <button type="button" onClick={createRipple}>G</button>
                <button type="button" onClick={createRipple}></button>
                <button type="button" onClick={createRipple}>f</button>
              </div>

              <p className="signup">
                New user? <a href="#">Create account</a>
              </p>
            </form>
          </div>
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
          width: 100%;
          min-height: 100dvh;
          position: relative;
          overflow-x: hidden;
          overflow-y: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 86px 14px 30px;
          transition: background 0.55s ease;
        }

        .page.water {
          background:
            radial-gradient(circle at 20% 14%, rgba(255, 255, 255, 0.95), transparent 16%),
            radial-gradient(circle at 76% 13%, rgba(111, 224, 255, 0.7), transparent 24%),
            linear-gradient(135deg, #e9fbff 0%, #82ddff 42%, #075a9f 100%);
        }

        .page.neon {
          background:
            radial-gradient(circle at 20% 14%, rgba(0, 255, 255, 0.32), transparent 20%),
            radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.28), transparent 24%),
            linear-gradient(135deg, #050617 0%, #111a4b 45%, #02030b 100%);
        }

        .page.royal {
          background:
            radial-gradient(circle at 20% 14%, rgba(255, 255, 255, 0.58), transparent 17%),
            radial-gradient(circle at 78% 18%, rgba(255, 215, 0, 0.42), transparent 24%),
            linear-gradient(135deg, #fff3cc 0%, #d79b00 45%, #4d2600 100%);
        }

        .page.space {
          background:
            radial-gradient(circle at 22% 16%, rgba(255, 255, 255, 0.35), transparent 12%),
            radial-gradient(circle at 78% 18%, rgba(146, 104, 255, 0.36), transparent 24%),
            linear-gradient(135deg, #080b28 0%, #25135b 44%, #02030d 100%);
        }

        .page.pink {
          background:
            radial-gradient(circle at 20% 14%, rgba(255,255,255,0.75), transparent 17%),
            radial-gradient(circle at 78% 18%, rgba(255,112,196,0.45), transparent 25%),
            linear-gradient(135deg, #fff2fb 0%, #ff8ad8 45%, #64255a 100%);
        }

        .background {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(14px);
          animation: orbFloat 8s ease-in-out infinite alternate;
        }

        .orb1 {
          width: 190px;
          height: 190px;
          top: 6%;
          left: 4%;
          background: rgba(255,255,255,0.45);
        }

        .orb2 {
          width: 160px;
          height: 160px;
          top: 18%;
          right: 5%;
          background: rgba(0,195,255,0.28);
          animation-delay: -2.5s;
        }

        .orb3 {
          width: 145px;
          height: 145px;
          bottom: 8%;
          left: 42%;
          background: rgba(255,255,255,0.2);
          animation-delay: -5s;
        }

        @keyframes orbFloat {
          from {
            transform: translate3d(0, 0, 0) scale(1);
          }
          to {
            transform: translate3d(18px, -24px, 0) scale(1.08);
          }
        }

        .bubble {
          position: absolute;
          bottom: -70px;
          border-radius: 50%;
          background:
            radial-gradient(circle at 30% 25%, #fff, rgba(255,255,255,0.25) 28%, rgba(0,151,255,0.18) 74%);
          border: 1px solid rgba(255,255,255,0.55);
          box-shadow: inset 0 0 14px rgba(255,255,255,0.82);
          animation: bubbleUp linear infinite;
        }

        .b1 { width: 24px; height: 24px; left: 9%; animation-duration: 9s; }
        .b2 { width: 16px; height: 16px; left: 26%; animation-duration: 7s; animation-delay: -2s; }
        .b3 { width: 32px; height: 32px; left: 70%; animation-duration: 10s; animation-delay: -4s; }
        .b4 { width: 18px; height: 18px; left: 88%; animation-duration: 8s; animation-delay: -5s; }
        .b5 { width: 22px; height: 22px; left: 52%; animation-duration: 11s; animation-delay: -6s; }

        @keyframes bubbleUp {
          0% {
            transform: translateY(0) translateX(0) scale(0.55);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: translateY(-115vh) translateX(28px) scale(1.08);
            opacity: 0;
          }
        }

        .star {
          position: absolute;
          color: rgba(255,255,255,0.78);
          font-size: 20px;
          animation: twinkle 2.5s ease-in-out infinite alternate;
        }

        .s1 { top: 18%; left: 15%; }
        .s2 { top: 28%; right: 20%; animation-delay: -1s; }
        .s3 { bottom: 26%; left: 10%; animation-delay: -1.8s; }
        .s4 { bottom: 18%; right: 14%; animation-delay: -0.6s; }

        @keyframes twinkle {
          from {
            transform: scale(0.75) rotate(0deg);
            opacity: 0.35;
          }
          to {
            transform: scale(1.18) rotate(18deg);
            opacity: 1;
          }
        }

        .waterLine {
          position: absolute;
          width: 180%;
          left: -40%;
          opacity: 0.25;
          animation: waveMove linear infinite;
        }

        .waterLine1 {
          bottom: 7%;
          height: 120px;
          background: repeating-radial-gradient(
            ellipse at center,
            rgba(255,255,255,0.35) 0 2px,
            transparent 3px 16px
          );
          animation-duration: 9s;
        }

        .waterLine2 {
          bottom: 1%;
          height: 150px;
          background: repeating-radial-gradient(
            ellipse at center,
            rgba(255,255,255,0.18) 0 1px,
            transparent 4px 20px
          );
          animation-duration: 14s;
          animation-direction: reverse;
        }

        @keyframes waveMove {
          to {
            background-position: 220px 120px;
          }
        }

        .nextDesignBtn {
          position: fixed;
          top: 14px;
          right: 14px;
          z-index: 50;
          border: 1px solid rgba(255,255,255,0.58);
          border-radius: 999px;
          padding: 11px 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #fff;
          font-size: 13px;
          font-weight: 900;
          background: rgba(255,255,255,0.16);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          cursor: pointer;
          box-shadow: 0 14px 30px rgba(0,0,0,0.22);
          overflow: hidden;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .nextDesignBtn:hover {
          transform: translateY(-3px) scale(1.04);
          background: rgba(255,255,255,0.28);
        }

        .nextDesignBtn b {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,0.24);
        }

        .counter {
          position: fixed;
          top: 60px;
          right: 24px;
          z-index: 50;
          color: #fff;
          font-size: 12px;
          font-weight: 800;
          opacity: 0.9;
        }

        .stage {
          width: 100%;
          max-width: 390px;
          min-height: 620px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 10;
        }

        .card {
          width: 100%;
          max-width: 380px;
          position: relative;
          padding: 20px 18px 22px;
          border-radius: 34px;
          overflow: hidden;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.64), rgba(255,255,255,0.18)),
            radial-gradient(circle at 50% 0%, rgba(255,255,255,0.86), transparent 38%);
          border: 1px solid rgba(255,255,255,0.72);
          backdrop-filter: blur(22px) saturate(165%);
          -webkit-backdrop-filter: blur(22px) saturate(165%);
          box-shadow:
            inset 6px 6px 20px rgba(255,255,255,0.5),
            inset -10px -10px 24px rgba(0,91,153,0.18),
            0 25px 60px rgba(0,48,91,0.32);
          transform-origin: center;
        }

        .cardActive {
          animation: wowOpen 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .cardChanging {
          animation: wowClose 0.36s ease-in both;
        }

        @keyframes wowOpen {
          0% {
            opacity: 0;
            transform: translateX(80px) scale(0.82) rotateY(-28deg);
            filter: blur(12px);
          }
          60% {
            opacity: 1;
            transform: translateX(-8px) scale(1.03) rotateY(4deg);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotateY(0);
            filter: blur(0);
          }
        }

        @keyframes wowClose {
          0% {
            opacity: 1;
            transform: translateX(0) scale(1) rotateY(0);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-90px) scale(0.84) rotateY(28deg);
            filter: blur(12px);
          }
        }

        .card::before {
          content: "";
          position: absolute;
          inset: 8px;
          border-radius: 26px;
          border: 1px solid rgba(255,255,255,0.36);
          pointer-events: none;
        }

        .glassLight {
          position: absolute;
          width: 150px;
          height: 540px;
          left: -120px;
          top: -90px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.24), transparent);
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
            transform: translateX(470px) rotate(20deg);
            opacity: 0;
          }
        }

        .topNotch {
          width: 82px;
          height: 14px;
          border-radius: 999px;
          margin: 0 auto 14px;
          background: rgba(4,54,96,0.18);
          box-shadow: inset 0 2px 6px rgba(0,35,70,0.16);
        }

        .badge {
          width: max-content;
          max-width: 100%;
          margin: 0 auto 12px;
          padding: 7px 12px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 7px;
          color: rgba(6,61,102,0.82);
          font-size: 11px;
          font-weight: 900;
          background: rgba(255,255,255,0.3);
          border: 1px solid rgba(255,255,255,0.6);
        }

        .badge span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #11d6ff;
          box-shadow: 0 0 0 4px rgba(17,214,255,0.13), 0 0 16px rgba(17,214,255,0.8);
        }

        .logo {
          width: 96px;
          height: 96px;
          margin: 8px auto 16px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.66);
          background:
            radial-gradient(circle at 28% 22%, #ffffff 0 12%, rgba(255,255,255,0.36) 24%, rgba(0,143,235,0.31) 64%),
            conic-gradient(from 90deg, rgba(255,255,255,0.9), rgba(0,172,255,0.25), rgba(255,255,255,0.74), rgba(0,121,211,0.3), rgba(255,255,255,0.9));
          box-shadow:
            inset 0 0 24px rgba(255,255,255,0.92),
            0 14px 28px rgba(0,82,143,0.22);
          display: grid;
          place-items: center;
          position: relative;
          overflow: visible;
          cursor: pointer;
        }

        .logoIcon {
          font-size: 38px;
          animation: logoFloat 2.2s ease-in-out infinite alternate;
        }

        @keyframes logoFloat {
          to {
            transform: translateY(-4px) scale(1.08);
          }
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(0,123,210,0.22);
          pointer-events: none;
          animation: ringPulse 1.7s ease-in-out infinite;
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
          animation-direction: reverse;
        }

        @keyframes ringPulse {
          0%, 100% {
            transform: scale(0.88);
            opacity: 0.55;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        h1 {
          text-align: center;
          font-size: 28px;
          line-height: 1.1;
          font-weight: 900;
          color: #063d66;
          letter-spacing: -0.6px;
          text-shadow: 0 2px 0 rgba(255,255,255,0.5);
        }

        .subtitle {
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
          background: rgba(255,255,255,0.33);
          border: 1px solid rgba(255,255,255,0.72);
          box-shadow:
            inset 4px 4px 10px rgba(255,255,255,0.45),
            0 8px 20px rgba(0,82,143,0.09);
          overflow: hidden;
        }

        .inputBox::after {
          content: "";
          position: absolute;
          left: 8px;
          right: 8px;
          top: 7px;
          height: 10px;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.74), transparent);
          pointer-events: none;
        }

        .inputIcon {
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
          font-weight: 700;
          color: #063d66;
        }

        .inputBox input::placeholder {
          color: rgba(7,59,99,0.58);
        }

        .eyeBtn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 16px;
        }

        .formRow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 4px 2px 18px;
          font-size: 13px;
          color: rgba(7,59,99,0.78);
        }

        .formRow label {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .formRow a,
        .signup a {
          color: #007bd3;
          font-weight: 900;
          text-decoration: none;
        }

        .loginBtn {
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
          box-shadow: 0 15px 28px rgba(0,113,188,0.25);
        }

        .loginBtn span {
          position: relative;
          z-index: 3;
        }

        .liquid {
          position: absolute;
          inset: auto -20% -48% -20%;
          height: 76%;
          border-radius: 50% 50% 0 0;
          background:
            radial-gradient(circle, rgba(255,255,255,0.42) 0 8%, transparent 9% 100%),
            linear-gradient(90deg, rgba(255,255,255,0.24), rgba(255,255,255,0.06), rgba(255,255,255,0.28));
          animation: liquidMove 2.5s ease-in-out infinite alternate;
        }

        .btnShine {
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, transparent 0 30%, rgba(255,255,255,0.3) 44%, transparent 58%);
          transform: translateX(-100%);
          animation: btnShine 3s ease-in-out infinite;
        }

        @keyframes liquidMove {
          from {
            transform: translateX(-7%) rotate(-2deg);
          }
          to {
            transform: translateX(7%) rotate(2deg);
          }
        }

        @keyframes btnShine {
          0%, 45% {
            transform: translateX(-100%);
          }
          75%, 100% {
            transform: translateX(100%);
          }
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 18px 0 14px;
          color: rgba(7,59,99,0.58);
          font-size: 12px;
          font-weight: 800;
        }

        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.82), transparent);
        }

        .socials {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .socials button {
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
          font-weight: 900;
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
          background: rgba(255,255,255,0.72);
          animation: ripple 0.72s ease-out;
          z-index: 20;
        }

        @keyframes ripple {
          to {
            transform: scale(4.4);
            opacity: 0;
          }
        }

        .page.neon h1,
        .page.neon .subtitle,
        .page.space h1,
        .page.space .subtitle {
          color: #e9fbff;
          text-shadow: 0 0 18px rgba(0,255,255,0.45);
        }

        .page.neon .badge,
        .page.space .badge {
          color: #e9fbff;
          background: rgba(255,255,255,0.14);
        }

        .page.royal .loginBtn {
          background:
            radial-gradient(circle at 20% 10%, rgba(255,255,255,0.9), transparent 16%),
            linear-gradient(135deg, #ffe9a3, #d69800 48%, #7a4100);
        }

        .page.pink .loginBtn {
          background:
            radial-gradient(circle at 20% 10%, rgba(255,255,255,0.9), transparent 16%),
            linear-gradient(135deg, #ffd3f1, #ff5fc6 48%, #9d2c85);
        }

        @media (max-width: 430px) {
          .page {
            padding: 82px 12px 24px;
            align-items: center;
          }

          .nextDesignBtn {
            top: 12px;
            right: 12px;
            padding: 10px 13px;
            font-size: 12px;
          }

          .counter {
            top: 57px;
            right: 23px;
          }

          .stage {
            max-width: 366px;
            min-height: auto;
          }

          .card {
            max-width: 354px;
            padding: 18px 16px 20px;
            border-radius: 30px;
          }

          .logo {
            width: 90px;
            height: 90px;
          }

          .logoIcon {
            font-size: 34px;
          }

          h1 {
            font-size: 26px;
          }

          .subtitle {
            font-size: 13px;
          }

          form {
            margin-top: 19px;
          }

          .inputBox {
            height: 52px;
          }

          .loginBtn {
            height: 54px;
          }

          .orb1 {
            width: 155px;
            height: 155px;
          }

          .orb2 {
            width: 130px;
            height: 130px;
          }
        }

        @media (max-width: 360px) {
          .card {
            max-width: 332px;
            padding: 16px 14px 18px;
          }

          .logo {
            width: 82px;
            height: 82px;
          }

          h1 {
            font-size: 24px;
          }

          .inputBox {
            height: 50px;
          }

          .socials button {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </>
  );
}
