#!/usr/bin/env node
// Downloads the Sapphire WASM release assets needed for the /try playground.
// Run automatically via predev/prebuild; output is gitignored.

import { createWriteStream, mkdirSync, existsSync } from 'fs';
import { pipeline } from 'stream/promises';

const VERSION = 'v0.7.0';
const BASE = `https://github.com/sapphire-project/sapphire/releases/download/${VERSION}`;

const FILES = [
  { url: `${BASE}/sapphire.js`,       dest: 'src/lib/sapphire.js' },
  { url: `${BASE}/sapphire_bg.wasm`,  dest: 'public/wasm/sapphire_bg.wasm' },
];

async function download(url, dest) {
  const dir = dest.slice(0, dest.lastIndexOf('/'));
  mkdirSync(dir, { recursive: true });

  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  await pipeline(res.body, createWriteStream(dest));
  console.log(`  ✓ ${dest}`);
}

console.log(`Downloading Sapphire WASM runtime (${VERSION})…`);
await Promise.all(FILES.map(({ url, dest }) => download(url, dest)));
console.log('Done.');
