import React from 'react';
import './style.css';
import teamInviteIcon from '../../../src/assets/team_invite.jpeg';
import newFriendRequestIcon from '../../../src/assets/new_friend_req.jpeg';
import levelUpIcon from '../../../src/assets/star.PNG';
import newFriendRequestIcon2 from '../../../src/assets/new_friend_req.jpeg';
import newAchievementUnlockIcon from '../../../src/assets/newAchivements.PNG';
import fiveDayStreakIcon from '../../../src/assets/streak_img.png';


const Notify = () => {
  const notifications = [
    { icon: teamInviteIcon, text: 'Team Invite' },
    { icon: newFriendRequestIcon, text: 'New Friend Request' },
    { icon: levelUpIcon, text: 'Level Up' },
    { icon: newFriendRequestIcon2, text: 'New Friend Request' },
    { icon: newAchievementUnlockIcon, text: 'New Achievement Unlock' },
    { icon: fiveDayStreakIcon, text: '5-day streak' },
  ];

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <div id="notification-list">
        {notifications.map((notification, index) => (
          <div className="notification-item" key={index}>
            <img src={notification.icon} alt={notification.text} />
            <p>{notification.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notify;
