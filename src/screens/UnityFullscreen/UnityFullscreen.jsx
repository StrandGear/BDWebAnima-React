import React, { useState, useEffect, useRef } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "../../services/firebase";
import "./UnityFullscreen.css";

const InputPreviewBar = () => {
  const [preview, setPreview] = useState(null);
  const activeFieldRef = useRef(null);
  const hadKeyboardOverlapRef = useRef(false);

  useEffect(() => {
    const isTextField = (el) =>
      el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA");

    const handleFocusIn = (e) => {
      if (!isTextField(e.target)) return;
      activeFieldRef.current = e.target;
      hadKeyboardOverlapRef.current = false;
      setPreview(e.target.value);
    };

    const handleInput = (e) => {
      if (activeFieldRef.current && e.target === activeFieldRef.current) {
        setPreview(e.target.value);
      }
    };

    const checkKeyboardClosed = () => {
      const vv = window.visualViewport;
      if (!vv) return;
      const overlap = window.innerHeight - vv.height - vv.offsetTop;

      if (overlap >= 80) {
        // Mark that the full on-screen keyboard actually opened
        hadKeyboardOverlapRef.current = true;
      } else if (hadKeyboardOverlapRef.current && overlap < 80) {
        // Only close if the keyboard was open and just collapsed
        setPreview(null);
        activeFieldRef.current = null;
        hadKeyboardOverlapRef.current = false;
      }
    };

    const handleFocusOut = (e) => {
      if (activeFieldRef.current && e.target === activeFieldRef.current) {
        setPreview(null);
        activeFieldRef.current = null;
        hadKeyboardOverlapRef.current = false;
      }
    };

    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("input", handleInput);
    document.addEventListener("focusout", handleFocusOut);
    window.visualViewport?.addEventListener("resize", checkKeyboardClosed);

    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("input", handleInput);
      document.removeEventListener("focusout", handleFocusOut);
      window.visualViewport?.removeEventListener("resize", checkKeyboardClosed);
    };
  }, []);

  if (preview === null) return null;

  return (
    <div className="input-preview-bar">
      <span className="input-preview-text">
        {preview || ""}
        <span className="blinking-cursor">|</span>
      </span>
    </div>
  );
};

export const UnityFullscreen = () => {
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);
  const [showReloadPrompt, setShowReloadPrompt] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirebaseReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Keep viewport pinned on mobile resize/scroll
  useEffect(() => {
    const handleResize = () => {
      window.scrollTo(0, 0);
    };
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
      window.visualViewport.addEventListener("scroll", handleResize);
    }
    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
        window.visualViewport.removeEventListener("scroll", handleResize);
      }
    };
  }, []);

  // Lock scroll during iOS virtual keyboard animation
  useEffect(() => {
    const lockScroll = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    };

    const handleFocusIn = (e) => {
      if (e.target.matches("input, textarea")) {
        let ticks = 0;
        const raf = () => {
          lockScroll();
          if (ticks++ < 30) requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      }
    };

    document.addEventListener("focusin", handleFocusIn);
    return () => document.removeEventListener("focusin", handleFocusIn);
  }, []);

  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/unity/Build/9edd899bc6b6e0bbc4f46ff33ca0bba6.loader.js",
    dataUrl: "/unity/Build/5a35c858ac421439dcf8ca1f1924def1.data",
    frameworkUrl: "/unity/Build/6314cfac6f8a68e47bb8de07d85ba15e.framework.js",
    codeUrl: "/unity/Build/885b52e40cdd83f0e86e748b14a2fa63.wasm",
    streamingAssetsUrl: "/unity/StreamingAssets",

    companyName: "NS-DOK Köln",
    productName: "Building Democracy",
    productVersion: "1.0",

    errorHandler: (message) => {
      console.warn("Intercepted Unity crash, reloading page...", message);
      window.location.reload();
      return true;
    },
  });

  // Auto-reload if phone is locked/inactive for > 30s
  useEffect(() => {
    let hiddenTime = null;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        hiddenTime = Date.now();
      } else {
        if (hiddenTime) {
          const elapsedSeconds = (Date.now() - hiddenTime) / 1000;
          if (elapsedSeconds > 30) {
            window.location.reload();
          }
        }
        hiddenTime = null;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Catch runtime Unity errors
  useEffect(() => {
    const handleUnityError = (message) => {
      console.error("Caught Unity error:", message);
      window.location.reload();
    };

    window.addEventListener("unity-error", handleUnityError);
    return () => window.removeEventListener("unity-error", handleUnityError);
  }, []);

  // Show reload button if loading takes longer than 15s
  useEffect(() => {
    let timer;
    if (!isLoaded) {
      timer = setTimeout(() => setShowReloadPrompt(true), 15000);
    } else {
      setShowReloadPrompt(false);
    }
    return () => clearTimeout(timer);
  }, [isLoaded]);

  return (
    <div className="unity-fullscreen-page">
      <div className="unity-resizable-stage">
        {isFirebaseReady && (
          <Unity
            unityProvider={unityProvider}
            className="unity-fullscreen-canvas"
            style={{
              display: isLoaded ? "block" : "none",
            }}
          />
        )}

        {/* Loading Overlay */}
        {!isLoaded && (
          <div className="fullscreen-loading-overlay">
            <div className="fullscreen-loading-text">
              Spiel wird geladen... {Math.round(loadingProgression * 100)}%
            </div>
            <div className="fullscreen-progress-container">
              <div
                className="fullscreen-progress-fill"
                style={{ width: `${Math.round(loadingProgression * 100)}%` }}
              />
            </div>
            {showReloadPrompt && (
              <div className="fullscreen-reload-prompt">
                Das Laden dauert länger als gewöhnlich.
                <br />
                <button
                  onClick={() => window.location.reload()}
                  className="fullscreen-reload-btn"
                >
                    Seite neu laden
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Centered floating input preview bar for mobile keyboards */}
      <InputPreviewBar />
    </div>
  );
};