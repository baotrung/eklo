import { connect, disconnect } from "mongoose";
import { UserExp } from "./user-exp";
import { v4 as newUid } from "uuid";

console.log("hello world");

const main = async () => {
  await connect("mongodb://localhost:27017", {
    user: "root",
    pass: "azerty",
    dbName: "eklo",
  });
  const anExp = new UserExp({
    id: newUid(),
    userName: "Lan",
    review: "hello world",
    avatarImgUrl: "/image/avatars/lan.png",
  });

  await anExp.save();

  const exps = await UserExp.find();

  console.log(exps);

  await disconnect();
};

main()
  .catch((err) => console.error(err))
  .finally(() => console.info("END"));
