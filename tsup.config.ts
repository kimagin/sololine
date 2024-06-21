import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  target: 'es2020',
  format: ['cjs', 'esm'],
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: true,
})
