// Thématiques et niveaux du site.
// Le contenu (fiches, templates) sera ajouté ultérieurement par l'équipe éditoriale.

export type Theme = 'pr' | 'mgmt' | 'mktg' | 'fin' | 'dd'
export type Level = 'deb' | 'int' | 'exp'

export const THEME_LABELS: Record<Theme, Record<string, string>> = {
  pr:   { fr: 'PR & Communication', en: 'PR & Communication', es: 'PR & Comunicación', ar: 'العلاقات العامة', zh: '公关与传播', ko: 'PR & 커뮤니케이션' },
  mgmt: { fr: 'Management',         en: 'Management',         es: 'Management',         ar: 'الإدارة',        zh: '管理',     ko: '매니지먼트' },
  mktg: { fr: 'Marketing Mode',     en: 'Fashion Marketing',  es: 'Marketing Moda',     ar: 'تسويق الأزياء',  zh: '时尚营销',  ko: '패션 마케팅' },
  fin:  { fr: 'Finance',            en: 'Finance',            es: 'Finanzas',           ar: 'المالية',        zh: '金融',     ko: '금융' },
  dd:   { fr: 'Data & Digital',     en: 'Data & Digital',     es: 'Data & Digital',     ar: 'البيانات والديجيتال', zh: '数据与数字', ko: '데이터 & 디지털' },
}

export const LEVEL_LABELS: Record<Level, Record<string, string>> = {
  deb: { fr: 'Débutant',      en: 'Beginner',     es: 'Principiante', ar: 'مبتدئ',  zh: '初级', ko: '초급' },
  int: { fr: 'Intermédiaire', en: 'Intermediate', es: 'Intermedio',   ar: 'متوسط',  zh: '中级', ko: '중급' },
  exp: { fr: 'Expert',        en: 'Expert',       es: 'Experto',      ar: 'خبير',   zh: '高级', ko: '고급' },
}
