/**
 * Optional audio layer. Every sound is an ElevenLabs (or any) mp3 dropped in
 * public/game-3d-assets/audio/; missing files are silently skipped, so the
 * app ships silent until assets are generated.
 */
import { tryLoadAudio } from "./assets";

const LOOPS = ["ambient-town", "ufo-hum"] as const;
const SFX = ["scan-reveal", "ui-click", "takeoff"] as const;

export class AudioManager {
  private loops = new Map<string, HTMLAudioElement>();
  private sfx = new Map<string, HTMLAudioElement>();
  private voice: HTMLAudioElement | null = null;
  private voices = new Map<string, HTMLAudioElement>();
  enabled = true;
  private started = false;

  async preload(districtIds: string[]): Promise<void> {
    await Promise.all([
      ...LOOPS.map(async (n) => {
        const a = await tryLoadAudio(n);
        if (a) {
          a.loop = true;
          a.volume = n === "ambient-town" ? 0.35 : 0.22;
          this.loops.set(n, a);
        }
      }),
      ...SFX.map(async (n) => {
        const a = await tryLoadAudio(n);
        if (a) this.sfx.set(n, a);
      }),
      ...districtIds.map(async (id) => {
        const a = await tryLoadAudio(`vo-${id}`);
        if (a) {
          a.volume = 0.9;
          this.voices.set(id, a);
        }
      }),
    ]);
  }

  /** Must be called from a user gesture (the Take off button). */
  start(): void {
    this.started = true;
    if (!this.enabled) return;
    for (const a of this.loops.values()) void a.play().catch(() => {});
    this.play("takeoff");
  }

  play(name: string): void {
    if (!this.enabled || !this.started) return;
    const a = this.sfx.get(name);
    if (!a) return;
    a.currentTime = 0;
    void a.play().catch(() => {});
  }

  playVoice(districtId: string): void {
    if (!this.enabled || !this.started) return;
    this.stopVoice();
    const a = this.voices.get(districtId) ?? null;
    this.voice = a;
    if (a) {
      a.currentTime = 0;
      void a.play().catch(() => {});
    }
  }

  stopVoice(): void {
    if (this.voice) this.voice.pause();
    this.voice = null;
  }

  toggle(): boolean {
    this.enabled = !this.enabled;
    if (!this.enabled) {
      for (const a of this.loops.values()) a.pause();
      this.stopVoice();
    } else if (this.started) {
      for (const a of this.loops.values()) void a.play().catch(() => {});
    }
    return this.enabled;
  }
}
