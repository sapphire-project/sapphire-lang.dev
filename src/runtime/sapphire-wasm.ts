export type RunSapphire = (src: string) => {
  output(): string;
  error(): string | undefined;
  is_ok(): boolean;
};

let initPromise: Promise<RunSapphire> | null = null;

export function getRunSapphire(): Promise<RunSapphire> {
  if (!initPromise) {
    initPromise = (async () => {
      const mod = await import('../lib/sapphire.js');
      await mod.default({ module_or_path: '/wasm/sapphire_bg.wasm' });
      return mod.run_sapphire;
    })();
  }
  return initPromise;
}
