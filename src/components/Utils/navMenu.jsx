import DraftIcon from '../Icon/Draft';
import WalletIcon from '../Icon/Wallet';
import CommunicationIcon from '../Icon/Communication';
import InfoIcon from '../Icon/Info';
import CompanyIcon from '../Icon/Company';
import HomeIcon from '../Icon/Home';
import { Link } from 'react-router-dom';
const pathname = window.location.pathname;
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type
    };
}
const navMenu = [
    getItem(
        <Link className="nav-link" to={'/'}>
            Home
        </Link>,
        '1',
        <HomeIcon active={pathname === '/'} />
    ),
    getItem(
        <Link className="nav-link" to="/post-job">
            My Resume
        </Link>,
        '2',
        <DraftIcon active={pathname === '/post-job'} />
    ),
    getItem(
        <Link className="nav-link" to="/inbox">
            Inbox
        </Link>,
        '4',
        <CommunicationIcon active={pathname === '/inbox'} />
    ),
    getItem(
        <Link className="nav-link" to="/help">
            Help
        </Link>,
        '6',
        <InfoIcon active={pathname === '/help'} />
    )
];
export default navMenu;
