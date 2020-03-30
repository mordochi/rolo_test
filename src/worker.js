const workercode = () => {
  // eslint-disable-next-line
  importScripts(
    'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js'
  );
  const MESSAGES_LENGTH = 10000;
  const generateFakeMsg = () => {
    const messageTypes = ['text', 'text', 'text', 'phone_call', 'voice'];

    const getRandomInt = max => {
      return Math.floor(Math.random() * Math.floor(max));
    };

    const timeSince = date => {
      const dateString = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });

      let seconds = Math.floor((new Date() - date) / 1000);
      let interval = Math.floor(seconds / 31536000);

      interval = Math.floor(seconds / 2592000);
      interval = Math.floor(seconds / 86400);

      if (interval > 1) {
        return dateString;
      }

      interval = Math.floor(seconds / 3600);

      if (interval >= 4 && interval < 24) {
        const timeString = date.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
        return timeString.toLowerCase().split(' ').join('');
      }

      if (interval >= 1 && interval < 4) {
        return interval + (interval === 1 ? ' hour' : ' hours');
      }

      interval = Math.floor(seconds / 60);

      if (interval >= 1) {
        return interval + (interval === 1 ? ' min' : ' mins');
      }

      if (seconds < 10) {
        return 'Now';
      }
      return Math.floor(seconds) + ' seconds';
    };

    let messages = [];

    for (let i = 0; i < MESSAGES_LENGTH; i++) {
      const type = messageTypes[getRandomInt(5)];

      let msgInfo;
      switch (type) {
        case 'text':
          msgInfo = {
            type,
            // eslint-disable-next-line
            content: faker.lorem.words()
          };
          break;
        case 'phone_call':
          msgInfo = {
            type,
            status: 'Missed Call'
          };
          break;
        case 'voice':
          msgInfo = {
            type
          };
          break;
        default:
          break;
      }

      const msg = {
        // eslint-disable-next-line
        avatar: faker.image.avatar(),
        // eslint-disable-next-line
        name: faker.name.findName(),
        // eslint-disable-next-line
        timestamp: getRandomInt(2) ? faker.date.recent() : faker.date.past(),
        message: {
          ...msgInfo,
          is_unread: getRandomInt(2) ? true : false,
          sent_by: `user_id_${i}`
        }
      };

      messages.push(msg);
    }

    messages.sort((a, b) => {
      return a.timestamp.getTime() - b.timestamp.getTime();
    });

    return messages.map(message => {
      message.timestamp = timeSince(message.timestamp);
      return message;
    });
  };
  const resultMessages = generateFakeMsg();
  let postCount = 1;
  const LENGTH_PER_POST = 40;

  onmessage = function (e) {
    if (postCount === MESSAGES_LENGTH / LENGTH_PER_POST) {
      return;
    }

    const result = {
      message: resultMessages.slice(
        0 + LENGTH_PER_POST * (postCount - 1),
        LENGTH_PER_POST * postCount
      ),
      length: MESSAGES_LENGTH / LENGTH_PER_POST - postCount
    };
    postMessage(result);
    postCount++;
  };
};

let code = workercode.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));
const blob = new Blob([code], { type: 'application/javascript' });
const worker_script = URL.createObjectURL(blob);

export default worker_script;
