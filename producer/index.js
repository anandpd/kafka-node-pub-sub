console.log(": producer ... -> \n");

import Kafka from "node-rdkafka";

function createStream({ withTopic }) {
  return Kafka.Producer.createWriteStream(
    {
      "metadata.broker.list": "localhost:9092",
    },
    {},
    {
      topic: withTopic,
    }
  );
}

function sendToQueue() {

  var success = createStream({ withTopic: "kafka-docker" }).write(
    Buffer.from(
      JSON.stringify({
        name: "anand",
        email: "anand@goomail.com",
        password: "abcabc",
      })
    )
  );
  console.log(success);
  success ? console.log("Message sent to consumer ✅") : console.log("Something went wrong !! ❌");
}

sendToQueue();
