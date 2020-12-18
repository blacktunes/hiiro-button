import Setting from '@/../setting/setting.json'
import { gtag } from './gtag.js'

if (process.env.NODE_ENV === 'production' && (Setting as any).GA_ID) {
  window.dataLayer = window.dataLayer || []
  gtag('js', new Date())
  gtag('config', (Setting as any).GA_ID)
}
