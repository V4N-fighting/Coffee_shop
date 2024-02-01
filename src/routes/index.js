import Home from '~/pages/Home';
import Story from '~/pages/Story';
import Menu from '~/pages/Menu';
import Locations from '~/pages/Locations';
import Merchandise from '~/pages/Merchandise';
import Contact from '~/pages/Contact';

const publicRoute = [
    { path: '/', component: Home, name: 'HomePage' },
    { path: '/story', component: Story, name: 'Story' },
    { path: '/menu', component: Menu, name: 'Menu' },
    { path: '/locations', component: Locations, name: 'Locations' },
    { path: '/merchandise', component: Merchandise, name: 'Merchandise' },
    { path: '/contact', component: Contact, name: 'Contact' },
];

const privateRoute = [];

export { publicRoute, privateRoute };
