import React from 'react';
import Notification from './Notification';

const reservedNotifications = [
  {
    id : 1,
    message : "안녕하세요. 오늘 일정을 알려드립니다.",
  },
  {
    id : 2,
    message : "점심 식사 시간입니다.",
  },
  {
    id : 3,
    message : "이제 곧 미팅이 시작됩니다.",
  },
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       notifications: [],
      // 생성자에서는 앞으로 사용할 데이터를 state에 넣어서 초기화 합니다.
    };
  }

  componentDidMount() {
    // 생성자로 만든 빈배열
    const {notifications} = this.state; 

    //setInterval() 함수를 이용하여 reservedNotifications로 부터 알림데이터를 하나씩 가져와서 state에 있는 notifications 배열에 넣고 업데이트 하는것
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) { 
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({ // state를 업데이트하려면 반드시 setState()함수를 사용해야 함
          notifications : notifications,
        });
      }else {
        this.setState({
          notifications : [],
        });
        clearInterval(timer)
      }
    }, 1000);
  }

  render () {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return(
            <Notification 
              key={notification.id}
              id={notification.id}
              message = {notification.message} 

            />
          ) 
        })}
      </div>
    )
  }
}

export default NotificationList;