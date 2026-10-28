import { useEffect, useRef, useState } from "react";

type JitsiRoomProps = {
  roomName: string;
  displayName: string;
  isHost: boolean;
};

declare global {
  interface Window {
    JitsiMeetExternalAPI?: new (domain: string, options: Record<string, unknown>) => {
      dispose: () => void;
    };
  }
}

const DOMAIN = "meet.jit.si";

function loadScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.JitsiMeetExternalAPI) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>("script[data-jitsi]");
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("script")));
      return;
    }
    const script = document.createElement("script");
    script.src = `https://${DOMAIN}/external_api.js`;
    script.async = true;
    script.dataset["jitsi"] = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("script"));
    document.body.appendChild(script);
  });
}

export function JitsiRoom({ roomName, displayName, isHost }: JitsiRoomProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let api: { dispose: () => void } | null = null;
    let cancelled = false;

    loadScript()
      .then(() => {
        if (cancelled || !container.current || !window.JitsiMeetExternalAPI) return;
        api = new window.JitsiMeetExternalAPI(DOMAIN, {
          roomName,
          parentNode: container.current,
          userInfo: { displayName },
          configOverwrite: {
            prejoinPageEnabled: false,
            startWithAudioMuted: !isHost,
            startWithVideoMuted: true,
            disableDeepLinking: true,
            enableWelcomePage: false,
            enableClosePage: false,
            hideConferenceSubject: true,
            hideConferenceTimer: false,
            disableProfile: true,
            doNotStoreRoom: true,
            disableThirdPartyRequests: true,
            defaultLocalDisplayName: displayName,
            defaultRemoteDisplayName: "Participant",
            subject: "L'assise — Nūr al-Bayān",
            toolbarConfig: { alwaysVisible: false },
            disableShortcuts: true,
            disableInviteFunctions: true,
            readOnlyName: true,
          },
          interfaceConfigOverwrite: {
            APP_NAME: "Nūr al-Bayān",
            NATIVE_APP_NAME: "Nūr al-Bayān",
            PROVIDER_NAME: "Nūr al-Bayān",
            SHOW_JITSI_WATERMARK: false,
            SHOW_WATERMARK_FOR_GUESTS: false,
            SHOW_BRAND_WATERMARK: false,
            SHOW_POWERED_BY: false,
            SHOW_PROMOTIONAL_CLOSE_PAGE: false,
            SHOW_CHROME_EXTENSION_BANNER: false,
            MOBILE_APP_PROMO: false,
            HIDE_DEEP_LINKING_LOGO: true,
            JITSI_WATERMARK_LINK: "",
            BRAND_WATERMARK_LINK: "",
            DEFAULT_LOGO_URL: "",
            DEFAULT_WELCOME_PAGE_LOGO_URL: "",
            DISPLAY_WELCOME_PAGE_CONTENT: false,
            DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT: false,
            DISPLAY_WELCOME_FOOTER: false,
            RECENT_LIST_ENABLED: false,
            VIDEO_QUALITY_LABEL_DISABLED: true,
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
            DEFAULT_BACKGROUND: "#f7f4ee",
            TOOLBAR_BUTTONS: isHost
              ? [
                  "microphone",
                  "camera",
                  "desktop",
                  "chat",
                  "raisehand",
                  "participants-pane",
                  "mute-everyone",
                  "mute-video-everyone",
                  "settings",
                  "tileview",
                  "filmstrip",
                  "recording",
                  "security",
                  "hangup",
                ]
              : ["microphone", "camera", "chat", "raisehand", "tileview", "settings", "hangup"],
          },
        });
      })
      .catch(() => setFailed(true));

    return () => {
      cancelled = true;
      api?.dispose();
    };
  }, [roomName, displayName, isHost]);

  if (failed) {
    return (
      <div className="glass grain rounded-xl p-8 text-sm text-muted-foreground">
        La salle n'a pas pu se charger. Vérifiez votre connexion, puis rechargez la page.
      </div>
    );
  }

  return (
    <div className="glass grain rounded-2xl p-2 sm:p-3">
      <div
        ref={container}
        className="h-[70vh] min-h-[480px] w-full overflow-hidden rounded-xl bg-[#f7f4ee] ring-1 ring-primary/20 [&_iframe]:h-full [&_iframe]:w-full [&_iframe]:border-0"
      />
    </div>
  );
}
