import { AccentHoverProps, GenerateCardList, NavLinks, ThemeColorProps } from '@/interfaces';
import {
  faBriefcase,
  faChartLine,
  faFolder,
  faHome,
  faImages,
  faLaptopCode,
  faPiggyBank,
  faRoad,
  faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons';
import { DashboardRouters } from './dashboard_routers';
import { 
  BusinessIcon, 
  HomeIcon, 
  ProfileIcon, 
  MarketingIcon, 
  LegalIcon, 
  RoadmapIcon, 
  PitchDeckIcon,
  DocumentIcon,
  FundingIcon, 
} from '@/static_icons';

/*
 * NOTE: 
 * Add the rounter url for all the Dashboard links to ./dashboard_routers 
 * before inserting it in the below array.
 */
export const nav_links: NavLinks = [
  {
    id: 'home',
    label: 'Home',
    url: DashboardRouters.home,
    light_icon: '/icons/light/home.svg',
    dark_icon: '/icons/dark/home.svg',
    color_icon: '/icons/light/pur-home.svg',
    fa_icon: faHome,
    theme_color: '',
    icon_color: '',
    path: (color: string) => HomeIcon({ color }),
  },
  {
    id: 'profile',
    label: 'MyStartup Profile',
    url: DashboardRouters.profile,
    light_icon: '/icons/light/mystartup.svg',
    dark_icon: '/icons/dark/mystartup.svg',
    color_icon: '/icons/light/pur-profile.svg',
    fa_icon: faLaptopCode,
    theme_color: '#8765CC4D', // 4A9929
    icon_color: '#8765CC',
    path: (color: string) => ProfileIcon({ color }),
  },
  {
    id: 'business',
    label: 'Business',
    url: DashboardRouters.business,
    light_icon: '/icons/light/business.svg',
    dark_icon: '/icons/dark/business.svg',
    color_icon: '/icons/light/pur-business.svg',
    fa_icon: faBriefcase,
    theme_color: '#8765CC4D', // D25050
    icon_color: '#8765CC',
    path: (color: string) => BusinessIcon({ color }),
  },
  {
    id: 'marketing',
    label: 'Marketing',
    url: DashboardRouters.marketing,
    light_icon: '/icons/light/marketing.svg',
    dark_icon: '/icons/dark/marketing.svg',
    color_icon: '/icons/light/pur-marketing.svg',
    fa_icon: faChartLine,
    theme_color: '#8765CC4D', // 3EA3B3
    icon_color: '#8765CC',
    path: (color: string) => MarketingIcon({ color }),
  },
  {
    id: 'legal',
    label: 'Legal',
    url: DashboardRouters.legal,
    light_icon: '/icons/light/legal.svg',
    dark_icon: '/icons/dark/legal.svg',
    color_icon: '/icons/light/pur-legal.svg',
    fa_icon: faScaleBalanced,
    theme_color: '#8765CC4D', // C4A63B
    icon_color: '#8765CC',
    custom_hei: "16",
    custom_wid: "16",
    path: (color: string) => LegalIcon({ color }),
  },
  {
    id: 'roadmap',
    label: 'Roadmap',
    url: DashboardRouters.roadmap,
    light_icon: '/icons/light/roadmap.svg',
    dark_icon: '/icons/dark/roadmap.svg',
    color_icon: '/icons/light/pur-roadmap.svg',
    fa_icon: faRoad,
    theme_color: '#8765CC4D', // C4A63B
    icon_color: '#8765CC',
    custom_hei: "16",
    custom_wid: "16",
    path: (color: string) => RoadmapIcon({ color }),
  },
  {
    id: 'pitchdeck',
    label: 'Pitch Deck',
    url: DashboardRouters.pitchdeck,
    light_icon: '/icons/light/pitch_deck.svg',
    dark_icon: '/icons/dark/pitch_deck.svg',
    color_icon: '/icons/light/pur-pitchdeck.svg',
    fa_icon: faImages,
    theme_color: '#8765CC4D', // E27D52
    icon_color: '#8765CC',
    path: (color: string) => PitchDeckIcon({ color }),
  },
  {
    id: 'document',
    label: 'Document',
    url: DashboardRouters.document,
    light_icon: '/icons/light/document.svg',
    dark_icon: '/icons/dark/document.svg',
    color_icon: '/icons/light/pur-document.svg',
    fa_icon: faFolder,
    theme_color: '#8765CC4D', // 4A9929
    icon_color: '#8765CC',
    path: (color: string) => DocumentIcon({ color }),
  },
  {
    id: 'funding',
    label: 'Funding',
    url: DashboardRouters.funding,
    light_icon: '/icons/light/funding.svg',
    dark_icon: '/icons/dark/funding.svg',
    color_icon: '/icons/light/pur-funding.svg',
    fa_icon: faPiggyBank,
    theme_color: '#8765CC4D', // 3EA3B3
    icon_color: '#8765CC',
    path: (color: string) => FundingIcon({ color }),
  },
];

export const marketing_card_list: GenerateCardList = [
  {
    id: 'market-research',
    list: [
      {
        task_name: 'Customer demographics',
        task_key: 'customer-demographics',
        ready: false,
      },
      {
        task_name: 'Customer psychographics',
        task_key: 'customer-psychographics',
        ready: false,
      },
      {
        task_name: 'Market trends analysis',
        task_key: 'market-trends-analysis',
        ready: false,
      },
      {
        task_name: 'Competitor analysis',
        task_key: 'competitor-analysis',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Consumer behaviour research',
        task_key: 'consumer-behaviour-research',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Market Segmentation',
        task_key: 'market-segmentation',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Customer needs assessment',
        task_key: 'customer-needs-assessment',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Pricing research',
        task_key: 'pricing-research',
        ready: false,
        locked: true,
      },
    ]
  },
  {
    id: 'target-audience',
    list: [
      {
        task_name: 'Demographics segmentation',
        task_key: 'demographics-segmentation',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Psychographic segmentation',
        task_key: 'psychographic-segmentation',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Behavioral segmentation',
        task_key: 'behavioral-segmentation',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Persona development',
        task_key: 'persona-development',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Consumer journey mapping',
        task_key: 'consumer-journey-mapping',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Market Segmentation',
        task_key: 'market-segmentation',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Target audience profilling',
        task_key: 'target-audience-profilling',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Niche targeting',
        task_key: 'niche-targeting',
        ready: false,
        locked: true,
      },
    ]
  },
  {
    id: 'value-proposition',
    list: [
      {
        task_name: 'Unique selling proposition',
        task_key: 'unique-selling-proposition',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Key benefits and features',
        task_key: 'key-benefits-features',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Competitive differentiation',
        task_key: 'competitive-differentiation',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Value communication strategy',
        task_key: 'value-communication-strategy',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Emotional appeal',
        task_key: 'emotional-appeal',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Price-value positioning',
        task_key: 'price-value-positioning',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Brand positioning',
        task_key: 'brand-positioning',
        ready: false,
        locked: true,
      },
    ]
  },
  {
    id: 'branding',
    list: [
      {
        task_name: 'Customer demographics',
        task_key: 'customer-demographics',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Customer psychographics',
        task_key: 'customer-psychographics',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Market trends analysis',
        task_key: 'market-trends-analysis',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Competitor analysis',
        task_key: 'competitor-analysis',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Consumer behaviour research',
        task_key: 'consumer-behaviour-research',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Market Segmentation',
        task_key: 'market-segmentation',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Customer needs assessment',
        task_key: 'customer-needs-assessment',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Pricing research',
        task_key: 'pricing-research',
        ready: false,
        locked: true,
      },
    ]
  },
  {
    id: 'marketing-channels',
    list: [
      {
        task_name: 'Customer demographics',
        task_key: 'customer-demographics',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Customer psychographics',
        task_key: 'customer-psychographics',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Market trends analysis',
        task_key: 'market-trends-analysis',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Competitor analysis',
        task_key: 'competitor-analysis',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Consumer behaviour research',
        task_key: 'consumer-behaviour-research',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Market Segmentation',
        task_key: 'market-segmentation',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Customer needs assessment',
        task_key: 'customer-needs-assessment',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Pricing research',
        task_key: 'pricing-research',
        ready: false,
        locked: true,
      },
    ]
  },
  {
    id: 'content-strategy',
    list: [
      {
        task_name: 'Customer demographics',
        task_key: 'customer-demographics',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Customer psychographics',
        task_key: 'customer-psychographics',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Market trends analysis',
        task_key: 'market-trends-analysis',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Competitor analysis',
        task_key: 'competitor-analysis',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Consumer behaviour research',
        task_key: 'consumer-behaviour-research',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Market Segmentation',
        task_key: 'market-segmentation',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Customer needs assessment',
        task_key: 'customer-needs-assessment',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Pricing research',
        task_key: 'pricing-research',
        ready: false,
        locked: true,
      },
    ]
  },
]

export const business_card_list: GenerateCardList = [
  {
    id: 'executive-summary',
    list: [
      {
        task_name: 'Business concept',
        task_key: 'business-concept',
        ready: false,
      },
      {
        task_name: 'Mission statement',
        task_key: 'mission-statement',
        ready: false,
      },
      {
        task_name: 'Key objectives',
        task_key: 'key-objectives',
        ready: false,
      },
      {
        task_name: 'Financial needs',
        task_key: 'financial-needs',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Funding requests',
        task_key: 'funding-requests',
        ready: false,
        locked: true,
      },
    ]
  },
  {
    id: 'company-description',
    list: [
      {
        task_name: 'Business concept',
        task_key: 'business-concept',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Mission statement',
        task_key: 'mission-statement',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Key objectives',
        task_key: 'key-objectives',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Financial needs',
        task_key: 'financial-needs',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Funding requests',
        task_key: 'funding-requests',
        ready: false,
        locked: true,
      },
    ]
  },
  {
    id: 'market-research',
    list: [
      {
        task_name: 'Business concept',
        task_key: 'business-concept',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Mission statement',
        task_key: 'mission-statement',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Key objectives',
        task_key: 'key-objectives',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Financial needs',
        task_key: 'financial-needs',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Funding requests',
        task_key: 'funding-requests',
        ready: false,
        locked: true,
      },
    ]
  },
  {
    id: 'marketing-and-sales',
    list: [
      {
        task_name: 'Business concept',
        task_key: 'business-concept',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Mission statement',
        task_key: 'mission-statement',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Key objectives',
        task_key: 'key-objectives',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Financial needs',
        task_key: 'financial-needs',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Funding requests',
        task_key: 'funding-requests',
        ready: false,
        locked: true,
      },
    ]
  },
  {
    id: 'operations-management',
    list: [
      {
        task_name: 'Business concept',
        task_key: 'business-concept',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Mission statement',
        task_key: 'mission-statement',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Key objectives',
        task_key: 'key-objectives',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Financial needs',
        task_key: 'financial-needs',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Funding requests',
        task_key: 'funding-requests',
        ready: false,
        locked: true,
      },
    ]
  },
  {
    id: 'financial-projections',
    list: [
      {
        task_name: 'Business concept',
        task_key: 'business-concept',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Mission statement',
        task_key: 'mission-statement',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Key objectives',
        task_key: 'key-objectives',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Financial needs',
        task_key: 'financial-needs',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Funding requests',
        task_key: 'funding-requests',
        ready: false,
        locked: true,
      },
    ]
  },
]

export const legal_card_list: GenerateCardList = [
  {
    id: 'terms-of-service',
    list: [
      {
        task_name: 'User Obligations',
        task_key: 'user-obligations',
        ready: false,
      },
      {
        task_name: 'Acceptable User Policy',
        task_key: 'acceptable-user-policy',
        ready: false,
      },
      {
        task_name: 'Termination of Service',
        task_key: 'termination-of-service',
        ready: false,
      },
    ]
  },
  {
    id: 'privacy-policy',
    list: [
      {
        task_name: 'Data Collection Practices',
        task_key: 'data-collection-practices',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Data Usage and Sharing',
        task_key: 'data-usage-sharing',
        ready: false,
        locked: true,
      },
      {
        task_name: 'User Rights',
        task_key: 'user-rights',
        ready: false,
        locked: true,
      },
    ]
  },
  {
    id: 'non-disclosure-agreements',
    list: [
      {
        task_name: 'Mutual NDA',
        task_key: 'mutual-nda',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Unilateral NDA',
        task_key: 'unilateral-nda',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Non-Compete clauses',
        task_key: 'non-compete-clauses',
        ready: false,
        locked: true,
      },
    ]
  },
  {
    id: 'employment-agreements',
    list: [
      {
        task_name: 'Job Description',
        task_key: 'job-description',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Compensation and Benefits',
        task_key: 'compensation-and-benefits',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Confidentiality and non-compete clauses',
        task_key: 'confidentiality-non-compete-clauses',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Termination Conditions',
        task_key: 'termination-conditions',
        ready: false,
        locked: true,
      },
    ]
  },
  {
    id: 'intellectual-property-agreements',
    list: [
      {
        task_name: 'Trademark Registration Documents',
        task_key: 'trademark-reg-docs',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Patent applications',
        task_key: 'patent-apps',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Copyright Registration',
        task_key: 'copyright-reg',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Licensing Agreements',
        task_key: 'licensing-agreements',
        ready: false,
        locked: true,
      },
    ]
  },
  {
    id: 'shareholder-agreement',
    list: [
      {
        task_name: 'Rights and Obligations of Shareholders',
        task_key: 'rights-oblig-sh',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Procedures for Buying/Selling Shares',
        task_key: 'procedures-buy-sell-shares',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Dividend Policies',
        task_key: 'dividend-policies',
        ready: false,
        locked: true,
      },
      {
        task_name: 'Dispute Resolution Mechanisms',
        task_key: 'dispute-resolution',
        ready: false,
        locked: true,
      },
    ]
  },
]

export const industry_list: any = {
  advertising: {
    name: "Advertising",
    short_name: "Advert.",
    code: "ADV",
    bg_color: "#D25050"
  },
  agriculture: {
    name: "Agriculture",
    short_name: "Agri",
    code: "AGR",
    bg_color: "#C4A63B"
  },
  aerospace: {
    name: "Aerospace",
    short_name: "Space",
    code: "AEO",
    bg_color: "#8765CC"
  },
  construction: {
    name: "Construction",
    short_name: "Constr.",
    code: "CON",
bg_color: "#3EA3B3"
  },
  mining: {
    name: "Mining",
    short_name: "Mine",
    code: "MIN",
    bg_color: "#C4A63B"
  },
  entertainment: {
    name: "Entertainment",
    short_name: "Entermt.",
    code: "ENT",
    bg_color: "#3EA3B3"
  },
  education: {
    name: "Education",
    short_name: "Education",
    code: "EDU",
    bg_color: "#D25050"
  },
  manufacturing: {
    name: "Manufacturing",
    short_name: "Manuf.",
    code: "MAF",
    bg_color: "#C4A63B"
  },
  transportation: {
    name: "Transportation",
    short_name: "Trans",
    code: "TRN",
    bg_color: "#3EA3B3"
  },
  energy: {
    name: "Energy",
    short_name: "Energy",
    code: "EGY",
    bg_color: "#C4A63B"
  },
  hospitality: {
    name: "Hospitality",
    short_name: "Hospitality",
    code: "HOS",
    bg_color: "#8765CC"
  },
  telecommunication: {
    name: "Telecommunication",
    short_name: "Telecom",
    code: "TCM",
    bg_color: "#3EA3B3"
  },
  finance: {
    name: "Finance",
    short_name: "Finance",
    code: "FIN",
    bg_color: ""
  },
  information_communication: {
    name: "Information and Communication",
    short_name: "Infocom",
    code: "INFO",
    bg_color: "#3EA3B3"
  },
  real_estate: {
    name: "Real Estate",
    short_name: "R.Estate",
    code: "RES",
    bg_color: ""
  },
  retail: {
    name: "Retail",
    short_name: "Retail",
    code: "RET",
    bg_color: "#D25050"
  },
  fashion: {
    name: "Fashion",
    short_name: "Fashion",
    code: "FAS",
    bg_color: "#8765CC"
  },
  healthcare: {
    name: "Healthcare",
    short_name: "Health",
    code: "HLT",
    bg_color: "#D25050"
  },
  food_beverage: {
    name: "Food and Beverage",
    short_name: "Food",
    code: "FBV",
    bg_color: "#3EA3B3"
  },
  media_news: {
    name: "Media and News",
    short_name: "Media",
    code: "NEWS",
    bg_color: "#3EA3B3"
  },
  clothing: {
    name: "Clothing and Apparel",
    short_name: "Apparels",
    code: "CLO",
    bg_color: "#D25050"
  },
  commerce_shopping: {
    name: "Commerce and Shopping",
    short_name: "Commerce",
    code: "COMM",
    bg_color: "#C4A63B"
  },
  community_lifestyle: {
    name: "Community and Lifestyle",
    short_name: "Lifestyle",
    code: "LIFE",
    bg_color: "#C4A63B"
  },
  electronics: {
    name: "Consumer Electronics",
    short_name: "Electronics",
    code: "ELEC",
    bg_color: "#D25050"
  },
  consumer_goods: {
    name: "Consumer Goods",
    short_name: "Goods",
    code: "GOOD",
    bg_color: "#3EA3B3"
  },
  content_publishing: {
    name: "Content and Publishing",
    short_name: "Cont. Publ.",
    code: "PUBL.",
    bg_color: "#D25050"
  },
  data_analytics: {
    name: "Data and Analytics",
    short_name: "D. Analytics",
    code: "DA",
    bg_color: "#3EA3B3"
  },
  design: {
    name: "Design",
    short_name: "Design",
    code: "DES",
    bg_color: "#C4A63B"
  },
  events: {
    name: "Events",
    short_name: "Events",
    code: "EVE",
    bg_color: "#D25050"
  },
  financial_services: {
    name: "Financial Services",
    short_name: "Fin. Serv.",
    code: "FSERV",
    bg_color: "#3EA3B3"
  },
  gaming: {
    name: "Gaming",
    short_name: "Gaming",
    code: "GAME",
    bg_color: "#8765CC"
  },
  government_military: {
    name: "Government Military",
    short_name: "Military",
    code: "MIL",
    bg_color: "#3EA3B3"
  },
  hardware: {
    name: "Hardware",
    short_name: "Hardware",
    code: "HARDW",
    bg_color: "#D25050"
  },
  information: {
    name: "Information",
    short_name: "Info",
    code: "INFO",
    bg_color: "#8765CC"
  },
  admin_services: {
    name: "Administrative Services",
    short_name: "Admin. Serv.",
    code: "ASEV",
    bg_color: "#3EA3B3"
  },
  platforms: {
    name: "Platforms",
    short_name: "Platforms",
    code: "PLTF",
    bg_color: "#C4A63B"
  },
  privacy_security: {
    name: "Privacy and Security",
    short_name: "Privacy",
    code: "PRIV",
    bg_color: "#D25050"
  },
  sales_marketing: {
    name: "Sales and Marketing",
    short_name: "Admin. Serv.",
    code: "ASEV",
    bg_color: "#C4A63B"
  },
  science_engineering: {
    name: "Science and Engineering",
    short_name: "Sci.Engg.",
    code: "ENGG",
    bg_color: "#D25050"
  },
  professional_services: {
    name: "Professional Services",
    short_name: "Prof. Serv.",
    code: "PSEV",
    bg_color: "#3EA3B3"
  },
  payments: {
    name: "Payments",
    short_name: "Payment",
    code: "PAY",
    bg_color: "#D25050"
  },
  internet_services: {
    name: "Internet Services",
    short_name: "Inter. Serv.",
    code: "ISEV",
    bg_color: "#C4A63B"
  },
  messaging_telecomm: {
    name: "Messaging and Telecommunications",
    short_name: "Admin. Serv.",
    code: "ASEV",
    bg_color: "#C4A63B"
  },
  mobile: {
    name: "Mobile",
    short_name: "Mobile",
    code: "MOB",
    bg_color: "#D25050"
  },
  software: {
    name: "Software",
    short_name: "Software",
    code: "SFTW",
    bg_color: "#3EA3B3"
  },
  music_audio: {
    name: "Music and Audio",
    short_name: "Music",
    code: "MUS",
    bg_color: "#D25050"
  },
  travel_tourism: {
    name: "Travel and Tourism",
    short_name: "Travel",
    code: "TVL",
    bg_color: "#C4A63B"
  },
  video: {
    name: "Video",
    short_name: "Video",
    code: "VID",
    bg_color: "#3EA3B3"
  },
  sustainability: {
    name: "Sustainability",
    short_name: "Sustain.",
    code: "SUST",
    bg_color: "#C4A63B"
  },
  natural_resources: {
    name: "Natural Resources",
    short_name: "Nat. Res.",
    code: "NRES",
    bg_color: "#D25050"
  },
  navigation_mapping: {
    name: "Navigation and Mapping",
    short_name: "Maps",
    code: "MAPS",
    bg_color: "#C4A63B"
  },
  apps: {
    name: "Apps",
    short_name: "Apps",
    code: "APPS",
    bg_color: "#C4A63B"
  },
  artificial_intelligence: {
    name: "Artificial Intelligence",
    short_name: "AI",
    code: "AI",
    bg_color: "#D25050"
  },
  bio_technology: {
    name: "Bio Technology",
    short_name: "BioTech",
    code: "BIOT",
    bg_color: "#D25050"
  },
}

export const theme_colors: ThemeColorProps = [
  {
    id: 'accent',
    color_class: 'accent',
    color_code: '#8765CC',
  },
  {
    id: 'accent-blue',
    color_class: 'accent-blue',
    color_code: '#3EA3B3',
  },
  {
    id: 'accent-green',
    color_class: 'accent-green',
    color_code: '#4A9929',
  },
  {
    id: 'accent-orange',
    color_class: 'accent-orange',
    color_code: '#E27D52',
  },
  {
    id: 'accent-red',
    color_class: 'accent-red',
    color_code: '#D25050',
  },
  {
    id: 'accent-gold',
    color_class: 'accent-gold',
    color_code: '#C4A63B',
  },
]

export const accent_hover_colors: AccentHoverProps = {
  '#8765CC': '#693FBF',
  '#3EA3B3': '#5DB8C7',
  '#4A9929': '#5DC134',
  '#E27D52': '#DB5C26',
  '#D25050': '#BE3131',
  '#C4A63B': '#D0B862',
}