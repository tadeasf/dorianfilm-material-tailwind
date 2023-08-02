/** @format */

import { Card, Input, Button, Typography } from "@material-tailwind/react";

export function ContactUsForm() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Contact Us
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to send us a message.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          <Input size="lg" label="Email" />
          <Input type="textarea" size="lg" label="Message" />
        </div>
        <Button className="mt-6" fullWidth>
          Send
        </Button>
      </form>
    </Card>
  );
}
