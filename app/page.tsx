"use client";

import { MouseEvent, useState } from "react";
import type { CSSProperties } from "react";

type BubbleStyle = CSSProperties & {
  "--size": string;
  "--left": string;
  "--time": string;
  "--delay": string;
  "--move": string;
};

const bubbles: BubbleStyle[] = [
  { "--size": "32px", "--left": "7%", "--time": "9s", "--delay": "-1s", "--move": "34px" },
  { "--size": "18px", "--left": "17%", "--time": "7s", "--delay": "-4s", "--move": "-28px" },
  { "--size": "42px", "--left": "77%", "--time": "11s", "--delay": "-2s", "--move": "38px" },
  { "--size": "14px", "--left": "91%", "--time": "8s", "--delay": "-5s", "--move": "-22px" },
  { "--size": "25px", "--left": "58%", "--time": "10s", "--delay": "-7s", "--move": "24px" },
  { "--size": "20px", "--left": "38%", "--time": "12s", "--delay": "-6s", "--move": "-40px" },
  { "--size": "15px", "--left": "68%", "--time": "8s", "--delay": "-3s", "--move": "22px" },
];

export default function WaterLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const createWaterEffect = (event: MouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 760);

    for (let i = 0; i < 12; i++) {
      const drop = document.createElement("span");
      drop.className = "drop";
      drop.style.left = `${event.clientX}px`;
      drop.style.top = `${event.clientY}px`;

      const angle = Math.random() * Math.PI * 2;
      const distance = 28 + Math.random() * 70;
      drop.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
      drop.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

      document.body.appendChild(drop);
      setTimeout(() => drop.remove(), 850);
    }
  };

  const tiltCard = (event: MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / 26;
    const y = (event.clientY - rect.top - rect.height / 2) / 30;
    card.style.transform = `translateY(-10px) rotateX(${-y}deg) rotateY(${x}deg)`;
  };

  const resetTilt = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.transform = "translateY(0) rotateX(5deg) rotateY(-6deg)";
  };

  return (
    <main className="water-login-page">
      <div className="sky-orbs" aria-hidden="true">
        <span className="orb orb-one" />
        <span className="orb orb-two" />
        <span className="orb orb-three" />
      </div>

      <div className="ocean" aria-hidden="true">
        {bubbles.map((bubble, index) => (
          <span key={index} className="bubble" style={bubble} />
        ))}

        <span className="fish fish-one">◆</span>
        <span className="fish fish-two">◆</span>
        <span className="fish fish-three">◆</span>

        <div className="crystal crystal-one" />
        <div className="crystal crystal-two" />
        <div className="crystal crystal-three" />

        <div className="wave wave-one" />
        <div className="wave wave-two" />
        <div className="wave wave-three" />
        <div className="water-surface" />
      </div>

      <section className="phone-shell" onMouseMove={tiltCard} onMouseLeave={resetTilt}>
        <div className="phone-reflection" />
        <div className="notch" />

        <div className="premium-badge">
          <span className="badge-dot" />
          3D Secure Login
        </div>

        <div className="water-logo" onClick={createWaterEffect}>
          <div className="logo-core" />
          <div className="splash-ring ring-one" />
          <div className="splash-ring ring-two" />
        </div>

        <h1 className="title">Welcome Back</h1>
        <p className="subtitle">
          Smooth liquid glass UI with
          <br />
          animated 3D water feeling.
        </p>

        <form className="form">
          <div className="field liquid-click" onClick={createWaterEffect}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <input type="text" placeholder="Username or Email" />
            <span className="field-shine" />
          </div>

          <div className="field liquid-click" onClick={createWaterEffect}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>

            <input type={showPassword ? "text" : "password"} placeholder="Password" />

            <button
              className="eye-btn"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setShowPassword((value) => !value);
              }}
              aria-label="Toggle password visibility"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
            <span className="field-shine" />
          </div>

          <div className="options">
            <label className="remember">
              <input type="checkbox" defaultChecked />
              <span>Remember me</span>
            </label>
            <a className="forgot" href="#">
              Forgot?
            </a>
          </div>

          <button className="login-btn liquid-click" type="button" onClick={createWaterEffect}>
            <span>Login Now</span>
            <div className="btn-wave" />
            <div className="btn-light" />
          </button>

          <div className="divider">continue with</div>

          <div className="socials">
            <button className="social-btn liquid-click" type="button" onClick={createWaterEffect}>G</button>
            <button className="social-btn liquid-click" type="button" onClick={createWaterEffect}></button>
            <button className="social-btn liquid-click" type="button" onClick={createWaterEffect}>f</button>
          </div>

          <p className="signup">
            New user? <a href="#">Create account</a>
          </p>
        </form>
      </section>
    </main>
  );
}
