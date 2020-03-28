import alice from '../../assets/alice.png';
import amyBulon from '../../assets/amy_bulon.png';
import dalonzo from '../../assets/dalonzo.png';
import frankCrew from '../../assets/frank_crew.png';
import jiaHeng from '../../assets/jia_heng.png';
import luYuhang from '../../assets/lu_yuhang.png';
import muzi from '../../assets/muzi.png';
import surfWorrall from '../../assets/surf_worrall.png';

export const starredMessageGroups = [
  {
    avatar: luYuhang,
    name: 'Lu Yuhang',
    timestamp: 'Now',
    message: {
      type: 'text',
      content: 'How is going? Ahang.',
      is_unread: true,
      sent_by: 'user_id'
    }
  },
  {
    avatar: muzi,
    name: 'Muzi',
    timestamp: '12 mins',
    message: {
      type: 'text',
      content: 'This is a new way to pay.☕️',
      is_unread: true,
      sent_by: 'user_id'
    }
  },
  {
    avatar: jiaHeng,
    name: 'Jia Heng',
    timestamp: '1hour',
    message: {
      type: 'text',
      content: 'There is something wrong.',
      is_unread: false,
      sent_by: 'user_id'
    }
  }
];

export const generalMessageGroups = [
  {
    avatar: amyBulon,
    name: 'Amy Bulon',
    timestamp: '10 mins',
    message: {
      type: 'phone_call',
      status: 'Missed Call',
      is_unread: true,
      sent_by: 'user_id'
    }
  },
  {
    avatar: surfWorrall,
    name: 'Surf Worrall',
    timestamp: '10:25am',
    message: {
      type: 'text',
      content: 'See you there, man.🙌🏿',
      is_unread: true,
      sent_by: 'user_id'
    }
  },
  {
    avatar: dalonzo,
    name: 'Dalonzo',
    timestamp: '8:45am',
    message: {
      type: 'voice',
      is_unread: true,
      sent_by: 'user_id'
    }
  },
  {
    avatar: frankCrew,
    name: 'Frank Crew',
    timestamp: 'Jan 25',
    message: {
      type: 'text',
      content: 'Tomorrow I will send you the...',
      is_unread: false,
      sent_by: 'user_id_me'
    }
  },
  {
    avatar: alice,
    name: 'Alice',
    timestamp: 'Jan 24',
    message: {
      type: 'text',
      content: 'Fine. You can go there.',
      is_unread: false,
      sent_by: 'user_id'
    }
  }
];
