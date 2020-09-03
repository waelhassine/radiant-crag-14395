const Nexmo = require('nexmo');
// Init Nexmo
const nexmo = new Nexmo(
  {
    apiKey: '22927f0c',
    apiSecret: 'WSlKXpE2kH2aBL6l',
  },
  { debug: true }
);
const sendSms = async (option) => {
    console.log(nexmo);
 await  nexmo.message.sendSms(
    '21658406264',
    option.number,
    option.text,
    { type: 'unicode' },
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        const { messages } = responseData;
        const {
          ['message-id']: id,
          ['to']: number,
          ['error-text']: error,
        } = messages[0];
        console.dir(responseData);
        // Get data from response
        const data = {
          id,
          number,
          error,
        };
        console.log(data);
      }
    }
  );
};

module.exports = sendSms;
