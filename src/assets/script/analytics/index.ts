import Setting from '@/../setting/setting.json'
import { gtag } from './gtag.js'

const GA_ID = Setting['GA_ID']

if (process.env.NODE_ENV === 'production' && GA_ID) {
  window.dataLayer = window.dataLayer || []
  gtag('js', new Date())
  gtag('config', GA_ID)
}
