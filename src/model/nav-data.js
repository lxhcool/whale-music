import userIcon from '@/assets/images/user.svg';
import levelIcon from '@/assets/images/award.svg';
import setIcon from '@/assets/images/settings.svg';
import outIcon from '@/assets/images/power.svg';

export const navLinks = [
  {
    title: '发现音乐',
    link: '/'
  },
  {
    title: '排行榜',
    link: '/rank'
  },
  {
    title: '歌单',
    link: '/playlist'
  },
  {
    title: '歌手',
    link: '/singer'
  },
  {
    title: '视频',
    link: '/video'
  },
  {
    title: 'MV',
    link: '/mv'
  }
]

export const userSelects = [
  {
    title: '个人主页',
    link: '/mine',
    img: userIcon
  },
  {
    title: '我的等级',
    link: '/',
    img: levelIcon
  },
  {
    title: '个人设置',
    link: '/',
    img: setIcon
  },
  {
    title: '退出登录',
    link: '/',
    img: outIcon
  }
]