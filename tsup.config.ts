import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  target: 'es2020',
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: false,
  shims: true,
  clean: true,
  dts: true,
})
