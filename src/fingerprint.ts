/* exported Fraugster */
namespace Fraugster {
  export interface BrowserInfo {
    /* eslint-disable camelcase */
    user_agent: string;
    cookies_enabled: boolean;
    java_enabled: boolean;
    language: string;
    plugins: string[];
    timezone: string;
    timezone_offset: number;
    do_not_track: boolean;
    platform: string;
    geo_supported: boolean;
    screen_width: number;
    screen_height: number;
    screen_depth: number;
    logical_cores: number;
    /* eslint-enable camelcase */
  }

  export function browserInfo(): BrowserInfo {
    return {
      user_agent: userAgent(),
      cookies_enabled: cookiesEnabled(),
      java_enabled: javaEnabled(),
      language: language(),
      plugins: plugins(),
      timezone: timezone(),
      timezone_offset: timezoneOffset(),
      do_not_track: doNotTrack(),
      platform: platform(),
      geo_supported: geoSupported(),
      screen_width: screenWidth(),
      screen_height: screenHeight(),
      screen_depth: screenDepth(),
      logical_cores: logicalCores(),
    };
  }

  function userAgent(): string {
    return navigator.userAgent;
  }

  function cookiesEnabled(): boolean {
    return navigator.cookieEnabled;
  }

  function language(): string {
    return navigator.language;
  }

  function plugins(): string[] {
    if (!navigator.plugins) return undefined;

    const res = [];
    for (let i = 0; i < navigator.plugins.length; i++) {
      res.push(navigator.plugins[i].name);
    }

    return res;
  }

  function timezone(): string {
    if (!window.Intl || !window.Intl.DateTimeFormat) {
      return undefined;
    }
    return window.Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  function timezoneOffset(): number {
    return new Date().getTimezoneOffset();
  }

  function doNotTrack(): boolean {
    if (navigator.doNotTrack !== undefined) {
      return navigator.doNotTrack === 'yes';
    }
    if (window.doNotTrack !== undefined) {
      return window.doNotTrack === 'yes';
    }
    return undefined;
  }

  function platform(): string {
    return navigator.platform;
  }

  function screenDepth(): number {
    return window.screen.colorDepth;
  }

  function geoSupported(): boolean {
    return navigator.geolocation !== undefined;
  }

  function screenWidth(): number {
    return window.screen.width;
  }

  function screenHeight(): number {
    return window.screen.height;
  }

  function logicalCores(): number {
    return navigator.hardwareConcurrency;
  }

  function javaEnabled(): boolean {
    if (!navigator.javaEnabled) {
      return undefined;
    }
    return navigator.javaEnabled();
  }
}
