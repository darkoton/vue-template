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
    template: path.join(
      root,
      "commands",
      "template-start",
      "TheComponents.vue"
    ),
  },
  {
    title: "TheTailwind.vue",
    path: path.join(root, "src", "views"),
    template: path.join(root, "commands", "template-start", "TheTailwind.vue"),
  },
  {
    title: "TheHome.vue",
    path: path.join(root, "src", "views"),
    template: path.join(root, "commands", "template-start", "TheHome.vue"),
  },
  {
    title: "TheHeader.vue",
    path: path.join(root, "src", "components"),
    template: path.join(root, "commands", "template-start", "TheHeader.vue"),
  },
  {
    title: "index.ts",
    path: path.join(root, "src", "router"),
    template: path.join(root, "commands", "template-clear", "index.ts"),
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

                  template();
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

async function template() {
  const allPromises = files.map((file) => {
    return new Promise((resolve, reject) => {
      const filePath = path.join(file.path, file.title);
      fs.access(filePath, constants.F_OK)
        .then(async () => {
          fs.unlink(filePath);
          console.log(clc.bgYellow.black(`File deleted: ${filePath}`));

          await copy(file.template, filePath);
          resolve();
        })
        .catch(async () => {
          console.log(clc.bgRed(`The file does not exist: ${filePath}`));
          await copy(file.template, filePath);
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
