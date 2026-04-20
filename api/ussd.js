const allowCors = require('./utils/cors');

// African's Talking USSD Webhook Handler
const handler = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).send('END Method Not Allowed');

  try {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;

    // text is a string of inputs separated by '*', e.g., '1*2'
    let response = '';
    
    // Default Home Menu
    if (text === '') {
      response = `CON *775# — RINDA Health
Murakaza neza kuri RINDA

1. Kwipima SIDA (HIV Test)
2. Kwiga (Learn)
3. Gutumiza Igikoresho (Order Kit)
4. Ivuriro rya Hafi (Nearest Clinic)
5. Ubujyanama (Counseling)`;
    } 
    // Option 1: HIV Test
    else if (text === '1') {
      response = `CON Kwipima SIDA
Kwipima Virusi itera SIDA

1. Gutumiza Igikoresho (Order kit)
2. Soma ibisubizo (How to read results)
0. Garuka (Back)`;
    } 
    // Option 2: Learn
    else if (text === '2') {
      response = `CON Kwiga — Ubumenyi
Ubumenyi bwo Kwirinda SIDA

1. Tangira Kwiga (Start learning)
0. Garuka (Back)`;
    } 
    // Option 3: Gutumiza Igikoresho (Order flow)
    else if (text === '3' || text === '1*1') {
      response = `CON Gutumiza Igikoresho

🔒 Nta mazina asabwa (No names)
📦 Ubuntu — Kubura ku giciro (Free)

1. Ohereza Segiteri (Send sector)
0. Garuka (Back)`;
    }
    // Option 4: Nearest Clinic
    else if (text === '4') {
      response = `END Ivuriro rya Hafi Yawe
📍 Kigali: CHUK — 0km
📍 Amajyepfo: Butare — 16km
📞 Inomero ya Buhere: 3456`;
    }
    // Option 5: Counseling
    else if (text === '5') {
      response = `CON Serivisi y'Ubujyanama

1. Saba Umujyanama (Request counselor)
0. Garuka (Back)`;
    }
    // Final Order Confirmation terminal node
    else if (text === '3*1' || text === '1*1*1') {
      const orderId = Math.floor(10000 + Math.random() * 90000);
      response = `END Igikoresho Cyatumijwe!
✅ Igikoresho cyawe cyatumijwe
🔢 Nomero: RND-${orderId}
📞 Tuzakuvugisha vuba`;
    }
    // Fallback Back navigation
    else if (text.endsWith('*0')) {
      // Re-trigger Home Menu (In reality, USSD routers handle state via the text payload array)
      response = `CON Murakaza neza kuri RINDA

1. Kwipima SIDA (HIV Test)
2. Kwiga (Learn)
3. Gutumiza Igikoresho (Order Kit)
4. Ivuriro rya Hafi (Clinic)
5. Ubujyanama (Counseling)`;
    }
    else {
      response = `END Invalid input. Please try again.`;
    }

    // Must return plain text
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(response);
    
  } catch (error) {
    console.error('USSD endpoint error:', error);
    res.setHeader('Content-Type', 'text/plain');
    res.status(500).send('END Server encountered an error. Try again later.');
  }
};

module.exports = allowCors(handler);
