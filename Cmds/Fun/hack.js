module.exports = async (context) => {
  try {
    const {
      client,
      message,
      text
    } = context;

    const from = message.from; // Get the sender's phone number
    const mek = message; // The message object itself, which you might want to use for quoting

    const steps = [
      '💻 *SILENT-SOBX-MD HACK STARTING...* 💻',
      '',
      '*Initializing hacking tools...* 🛠️',
      '*Connecting to remote servers...* 🌐',
      '',
      '```[██████████] 10%``` ⏳',
      '```[████████████████████] 20%``` ⏳',
      '```[██████████████████████████████] 30%``` ⏳',
      '```[████████████████████████████████████████] 40%``` ⏳',
      '```[██████████████████████████████████████████████████] 50%``` ⏳',
      '```[████████████████████████████████████████████████████████████] 60%``` ⏳',
      '```[██████████████████████████████████████████████████████████████████████] 70%``` ⏳',
      '```[████████████████████████████████████████████████████████████████████████████████] 80%``` ⏳',
      '```[██████████████████████████████████████████████████████████████████████████████████████████] 90%``` ⏳',
      '```[████████████████████████████████████████████████████████████████████████████████████████████████████] 100%``` ✅',
      '',
      '🔒 *System Breach: Successful!* 🔓',
      '🚀 *Command Execution: Complete!* 🎯',
      '',
      '*📡 Transmitting data...* 📤',
      '*🕵️‍♂️ Ensuring stealth...* 🤫',
      '*🔧 Finalizing operations...* 🏁',
      '*🔧 Keith is Getting Your All Data...* 🎁',
      '',
      '⚠️ *Note:* All actions are for demonstration purposes only.',
      '⚠️ *Reminder:* Ethical hacking is the only way to ensure security.',
      '⚠️ *Reminder:* Strong hacking is the only way to ensure security.',
      '',
      ' *👨‍💻 YOUR DATA HACK SUCCESSFULLY 👩‍💻☣*'
    ];

    // Loop through all the steps and send them
    for (const line of steps) {
      await client.sendMessage(from, { text: line }, { quoted: mek });
      await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
    }
  } catch (e) {
    console.log(e);
    client.sendMessage(from, { text: `❌ *Error!* ${e.message}` });
  }
};
