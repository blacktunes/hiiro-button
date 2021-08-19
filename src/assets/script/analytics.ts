/* eslint-disable */
import Setting from '@/../setting/setting.json'

const GA_ID = Setting['GA_ID']

const useAnalytics = process.env.NODE_ENV === 'production' && GA_ID

export function gtag(..._arg: any[]) {
  if (useAnalytics) {
    try {
      window.dataLayer.push(arguments)
    } catch (err) { }
  }
}

if (useAnalytics) {
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`

  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []

  gtag('js', new Date())
  gtag('config', GA_ID)
}
