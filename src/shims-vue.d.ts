declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare module '*.png'
declare module '*.jpg'
declare module '*.gif'
declare module '*.svg'

interface Window {
  dataLayer: any;
  MediaMetadata: any;
}

interface Navigator {
  mediaSession: any;
}
