import { createI18n } from 'vue-i18n'

import en from '@/locales/en.json'
import ja from '@/locales/ja.json'
import vn from '@/locales/vn.json'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ja,
    vn,
  },
})

export default i18n
