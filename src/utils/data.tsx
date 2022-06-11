import * as React from 'react'
import { FingerPrintIcon, NewspaperIcon, AnnotationIcon, PhoneOutgoingIcon, HomeIcon } from '@heroicons/react/outline'
import {
  FranciscoImage,
  NunoImage,
  TiagoImage,
  DanielGImage,
  DanielSImage,
  InesImage,
  MargaridaImage,
  JoaoImage,
  LeonorImage,
} from '../images/profile'

const navigation = [
  { title: 'Home', location: '/', icon: <HomeIcon className="mr-1.5 h-4 w-4" /> },
  { title: 'About', location: '/about', icon: <FingerPrintIcon className="mr-1.5 mt-0.5 h-4 w-4" /> },
  { title: 'Blog', location: '/blog', icon: <NewspaperIcon className="mr-1.5 h-4 w-4" /> },
]

const socials = [
  {
    shown: true,
    label: 'instagram',
    url: 'https://www.instagram.com/robin.lgp',
    svg: [
      'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
    ],
  },
  {
    shown: true,
    label: 'github',
    url: 'https://github.com/robin-lgp',
    svg: [
      'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
    ],
  },
  {
    shown: true,
    label: 'linkedin',
    url: 'https://www.linkedin.com/company/robin-lgp',
    svg: [
      'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
    ],
    viewBox: '-30 0 512 512',
  },
  {
    shown: true,
    label: 'linktree',
    url: 'https://linktr.ee/robin.lgp',
    svg: [
      'M8.92,2.44a1.06,1.06,0,0,0-1.86,0L.1,15.07A1,1,0,0,0,1,16.44h4.7v4.78a.9.9,0,0,0,.89.89H9.33a.91.91,0,0,0,.89-.89V16.44H8.92a1.05,1.05,0,0,1-1-.89A1,1,0,0,1,8,15.07l3.89-7h0Z',
      'M15.08,2.44a1.06,1.06,0,0,1,1.86,0l7,12.63A1,1,0,0,1,23,16.44H18.39v4.78a.9.9,0,0,1-.89.89H14.59a.9.9,0,0,1-.89-.89V16.44H15a1.05,1.05,0,0,0,1.06-.89,1,1,0,0,0-.08-.48L12.08,8h0Z',
    ],
  },
]

const team = [
  {
    name: 'Margarida Cosme',
    role: 'CEO, Project Owner',
    image: MargaridaImage,
    github: 'margaridacosme',
    linkedin: 'margarida-cosme-61040a13b',
  },
  {
    name: 'Francisco Gonçalves',
    role: 'CTO, Scrum Master',
    image: FranciscoImage,
    github: 'kiko-g',
    linkedin: 'kikogoncalves',
  },
  { name: 'Tiago Araújo', role: 'Scope Manager', image: TiagoImage, github: 'Guito14', linkedin: '' },
  {
    name: 'Inês Silva',
    role: 'Image and Marketing Director',
    image: InesImage,
    github: 'reluzita',
    linkedin: 'inesosilva',
  },
  {
    name: 'Daniel Gonçalves',
    role: 'Human Resources Director',
    image: DanielGImage,
    github: 'Esdeath-GK',
    linkedin: '',
  },
  { name: 'Nuno Santos', role: 'Test Manager', image: NunoImage, github: 'nunosanto', linkedin: '' },
  { name: 'Daniel Silva', role: 'Quality Manager', image: DanielSImage, github: 'DanielGSilva', linkedin: '' },
  {
    name: 'João Cardoso',
    role: 'Risk Manager',
    image: JoaoImage,
    github: 'joaoalc',
    linkedin: 'joão-cardoso-aa119a225',
  },
  { name: 'Leonor Gomes', role: 'CFO', image: LeonorImage, github: 'leonormgomes', linkedin: 'leonormgomes' },
]

export { navigation, socials, team }
