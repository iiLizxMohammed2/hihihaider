exports.run = (client, message, args, tools) => {

  // This episode will cover purging messages from a channel.

  // First, we need to fetch the amount of messages a user wants to purge, this will be stored in args[0].
  if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge**');
  // This checks if args[0] is NOT a number, if not it runs the return statement which sends a message in chat.
  // We also need to check if the number is LESS THAN 100, since 100 is the max you can delete at once.
  if (args[0] > 100) return message.channel.send('**Please supply a number less than 100**');
  // This checks if args[0] is MORE THAN 100, if it is, it returns and sends a message.

  // Now, we can delete the messages
  message.channel.bulkDelete(args[0])
    .then(messages => message.channel.send(`**Successfully deleted \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({
      timeout: 10000
    }))) // This sends how many messages they deleted to chat, we also want to delete this message. This deletes the message after 10000 milliseconds.

}