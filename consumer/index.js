console.log(": consumer ... ->");

import Kafka from "node-rdkafka";

const TOPICS = ["test", "kafka-docker"];

const consumer = new Kafka.KafkaConsumer(
  {
    "metadata.broker.list": "localhost:9092",
    "group.id": "kafka",
  },
  {}
);

consumer.connect();

consumer.on("ready", (data) => {
  console.log("consumer ready ✨");
  consumer.subscribe([...TOPICS]);
  consumer.consume();
});

consumer.on("data", (data) => {
  console.log("res :* ", JSON.parse(data.value));
  //   Log("recieved the message, value  :", data.value.data[0].toJSON());
});
