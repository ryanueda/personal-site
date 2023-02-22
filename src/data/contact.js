import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faSpotify } from '@fortawesome/free-brands-svg-icons/faSpotify';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/ryanueda',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/ryanueda/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/ryan-ueda-teo-b32964212/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:ryanueda34@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://l.instagram.com/?u=https%3A%2F%2Fopen.spotify.com%2Fuser%2F21f7cyzy4qksgmloqjne7w6gq%3Fsi%3DMqq-nnGvQrC7XlDrlu69BA%26dl_branch%3D1&e=AT11T2W79z3eXIXAXqUX4GPU3WZ7l0LS6gmtdQ-dhlj0mv-KipwR_zOHYFdIhXIYZ63oY6eMRye49wTXfjUxVkOEXU-XqRoC9ODfvA',
    label: 'Spotify',
    icon: faSpotify,
  },
];

export default data;
