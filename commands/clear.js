import fs from "fs/promises";
import { constants } from "fs";
import path from "path";
import clc from "cli-color";
import readline from "readline";

const __dirname = path.resolve();

const root = __dirname;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const files = [
  {
    title: "TheComponents.vue",
    path: path.join(root, "src", "views"),
  },
  {
    title: "TheTailwind.vue",
    path: path.join(root, "src", "views"),
  },
  {
    title: "TheHome.vue",
    path: path.join(root, "src", "views"),
    update: path.join(root, "commands", "template-clear", "TheHome.vue"),
  },
  {
    title: "TheHeader.vue",
    path: path.join(root, "src", "components"),
    update: path.join(root, "commands", "template-clear", "TheHeader.vue"),
  },
  {
    title: "index.ts",
    path: path.join(root, "src", "router"),
    update: path.join(root, "commands", "template-clear", "index.ts"),
  },
];

rl.question(
  "Are you sure you want to start a command? Your files will be changed. 0/3 (y/n):",
  (answer) => {
    if (answer.toLowerCase() === "y" || answer.toLowerCase() === "yes") {
      rl.question(
        "Are you sure? template files can completely change your code. 1/3 (y/n):",
        (answer) => {
          if (answer.toLowerCase() === "y" || answer.toLowerCase() === "yes") {
            rl.question(
              "Your last consent to run the command. 2/3 (y/n):",
              (answer) => {
                if (
                  answer.toLowerCase() === "y" ||
                  answer.toLowerCase() === "yes"
                ) {
                  console.log("Executing a command...");

                  clear();
                } else {
                  console.log("You canceled the command.");
                }

                rl.close();
              }
            );
          } else {
            console.log("You canceled the command.");
            rl.close();
          }
        }
      );
    } else {
      console.log("You canceled the command.");
      rl.close();
    }
  }
);

async function clear() {
  const allPromises = files.map((file) => {
    return new Promise((resolve, reject) => {
      const filePath = path.join(file.path, file.title);
      fs.access(filePath, constants.F_OK)
        .then(async () => {
          fs.unlink(filePath);
          console.log(clc.bgYellow.black(`File deleted: ${filePath}`));

          if (file.update) {
            await copy(file.update, filePath);
          }
          resolve();
        })
        .catch(() => {
          console.log(clc.bgRed(`The file does not exist: ${filePath}`));
          resolve();
        });
    });
  });

  await Promise.all(allPromises);
  console.log(clc.green("your template is cleared."));
}

async function copy(src, dest) {
  await fs.copyFile(src, dest, constants.COPYFILE_EXCL);
  console.log(clc.bgBlue(`File updated: ${dest}`));
}
