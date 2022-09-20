// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Lô hàng lúa giống',
      icon: HomeOutline,
      path: '/home',
      children: [
        {
          title: 'Thống kê',
          icon: DashboardIcon,
          path: '/dashboards/crm'
        },
        {
          title: 'Quản lý',
          icon: CreateIcon,
          path: '/dashboards/analytics'
        },
      ]
    },
    {
      title: 'Lô hàng vật tư',
      icon: HomeOutline,
      path: '/home',
      children: [
        {
          title: 'Thống kê',
          icon: DashboardIcon,
          path: '/dashboards/crm'
        },
        {
          title: 'Quản lý',
          icon: CreateIcon,
          path: '/dashboards/analytics'
        },
      ]
    },
    {
      title: 'Lô hàng lúa',
      icon: EditRoadIcon,
      path: '/second-page',
      children: [
        {
          title: 'Thống kê',
          icon: DashboardIcon,
          path: '/dashboards/crm'
        },
        {
          title: 'Quản lý',
          icon: CreateIcon,
          path: '/dashboards/analytics'
        },
      ]
    },
    {
      title: 'Lô hàng sản phẩm',
      icon: CardGiftcardIcon,
      path: '/second-page',
      children: [
        {
          title: 'Thống kê',
          icon: DashboardIcon,
          path: '/dashboards/crm'
        },
        {
          title: 'Quản lý',
          icon: CreateIcon,
          path: '/dashboards/analytics'
        },
      ]
    },
    {
      title: 'Giao dịch ',
      icon: PeopleIcon,
      path: '/second-page',
      children: [
        {
          title: 'Thống kê',
          icon: DashboardIcon,
          path: '/dashboards/crm'
        },
        {
          title: 'Quản lý',
          icon: CreateIcon,
          path: '/dashboards/analytics'
        },
      ]
    },
    {
      title: 'Tiêu chí',
      icon: ContentPasteIcon,
      path: '/second-page',
      children: [
        {
          title: 'Thống kê',
          icon: DashboardIcon,
          path: '/dashboards/crm'
        },
        {
          title: 'Quản lý',
          icon: CreateIcon,
          path: '/dashboards/analytics'
        },
      ]
    },
    {
      title: 'Hồ sơ',
      icon: PersonIcon,
      path: '/acl',
      action: 'read',
      subject: 'acl-page'
    }
  ]
}

export default navigation
