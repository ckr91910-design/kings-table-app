import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/**
 * Vite 설정 파일:
 * React 플러그인을 활성화하여 JSX 문법과 빠른 새로고침(HMR)을 지원합니다.
 */
export default defineConfig({
  plugins: [react()],
})
