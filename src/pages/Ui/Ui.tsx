import { FC, useState } from "react";
import { Logo, Nav } from "../../entities";
import { Button, Input, Link } from "../../shared";

export const Ui: FC = (): JSX.Element => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <Logo />
      <div style={{ width: 300 }}>
        <Button type="primary" mt="1rem">
          подобрать программу
        </Button>
        <Button mt="1rem">показать все</Button>
        <Button mt="1rem"></Button>
      </div>
      <div style={{ width: 500, marginTop: "1rem" }}>
        <Input type="text" value={value} setValue={setValue} />
        <br />
        <br />
        <Input type="email" value={value} setValue={setValue} error />
        <br />
        <br />
        <Input type="tel" value={value} setValue={setValue} error />
        <br />
        <br />
        <Input
          type="textarea"
          value={value}
          setValue={setValue}
          error
          h="100px"
        />
      </div>
      <br />
      <br />
      <Nav />
      <br />
      <br />
      <Link up arrow>
        каталог slim
      </Link>
    </div>
  );
};
