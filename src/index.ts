import type {  BooleanField } from "@prismicio/client";

type Test = {
  hello: BooleanField;
  world: boolean;
};

const test: Test = {
  hello: "true",
  world: "false",
};