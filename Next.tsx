"use client";

import type { CSSProperties, MouseEvent } from "react";
import { useState } from "react";

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

    setTimeout(() => ripple.remove(), 700);

    for (let i = 0; i < 8; i++) {
      const drop = document.createElement("span");
      drop.className = "drop";
      drop.style.left = `${event.clientX}px`;
      drop.style.top = `${event.clientY}px`;

      const angle = Math.random() * Math.PI * 2;
      const distance = 25 + Math.random() * 45;
      drop.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
      drop.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

      document.body.appendChild(drop);
      setTimeout(() => drop.remove(), 700);
    }
  };

  const tiltCard = (event: MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const x = (window.innerWidth / 2 - event.clientX) / 45;
    const y = (window.innerHeight / 2 - event.clientY) / 45;
    card.style.transform = `translateY(-8px) rotateX(${y}deg) rotateY(${-x}deg)`;
  };

  const resetTilt = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.transform = "rotateX(4deg) rotateY(-4deg)";
  };

  return (
    <main className="water-login-page">
      <div className="ocean" aria-hidden="true">
        <div className="bubble" style={{ "--size": "28px", "--left": "8%", "--time": "9s", "--delay": "-1s", "--move": "34px" } as CSSProperties} />
        <div className="bubble" style={{ "--size": "18px", "--left": "18%", "--time": "7s", "--delay": "-4s", "--move": "-28px" } as CSSProperties} />
        <div className="bubble" style={{ "--size": "36px", "--left": "77%", "--time": "11s", "--delay": "-2s", "--move": "38px" } as CSSProperties} />
        <div className="bubble" style={{ "--size": "14px", "--left": "90%", "--time": "8s", "--delay": "-5s", "--move": "-22px" } as CSSProperties} />
        <div className="bubble" style={{ "--size": "22px", "--left": "58%", "--time": "10s", "--delay": "-7s", "--move": "24px" } as CSSProperties} />
        <div className="wave" />
        <div className="wave two" />
        <div className="water-surface" />
      </div>

      <section className="login-wrap" onMouseMove={tiltCard} onMouseLeave={resetTilt}>
        <div className="water-logo">
          <div className="splash-ring" />
        </div>

        <h1 className="title">Welcome Back</h1>
        <p className="subtitle">
          Login to continue your journey
          <br />
          with smooth water feeling.
        </p>

        <form className="form">
          <div className="field liquid-click" onClick={createWaterEffect}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <input type="text" placeholder="Username or Email" />
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
          </div>

          <div className="options">
            <label className="remember">
              <input type="checkbox" defaultChecked />
              <span>Remember me</span>
            </label>
            <a className="forgot" href="#">
              Forgot Password?
            </a>
          </div>

          <button className="login-btn liquid-click" type="button" onClick={createWaterEffect}>
            <span>Login</span>
            <div className="btn-wave" />
          </button>

          <div className="divider">or</div>

          <div className="socials">
            <button className="social-btn liquid-click" type="button" onClick={createWaterEffect}>G</button>
            <button className="social-btn liquid-click" type="button" onClick={createWaterEffect}></button>
            <button className="social-btn liquid-click" type="button" onClick={createWaterEffect}>f</button>
          </div>

          <p className="signup">
            Don’t have an account? <a href="#">Sign Up</a>
          </p>
        </form>
      </section>
    </main>
  );
}
