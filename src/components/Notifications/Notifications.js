import React from 'react';
import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications size={20} color="#7159c1" />
      </Badge>
      <NotificationList visible>
        <Scroll>
          <Notification unread>
            <p> notification.content </p>
            <time>2 days</time>
            <button type="button" onClick={() => alert('ok')}>
              Mark as read
            </button>
          </Notification>
          <Notification>
            <p> notification.content </p>
            <time> 2 days </time>
            <button type="button" onClick={() => alert('ok')}>
              Mark as read
            </button>
          </Notification>
          <Notification>
            <p> notification.content </p>
            <time> 2 days </time>

            <button type="button" onClick={() => alert('ok')}>
              Mark as read
            </button>
          </Notification>
          <Notification unread>
            <p> notification.content </p>
            <time> 2 days </time>

            <button type="button" onClick={() => alert('ok')}>
              Mark as read
            </button>
          </Notification>
          <Notification unread>
            <p> notification.content </p>
            <time> 2 days </time>

            <button type="button" onClick={() => alert('ok')}>
              Mark as read
            </button>
          </Notification>
          <Notification unread>
            <p> notification.content </p>
            <time> 2 days </time>

            <button type="button" onClick={() => alert('ok')}>
              Mark as read
            </button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
