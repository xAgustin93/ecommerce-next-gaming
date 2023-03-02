import { Confirm as ConfirmSU } from "semantic-ui-react";

export function Confirm(props) {
  const { ...rest } = props;

  return <ConfirmSU className="confirm" size="mini" {...rest} />;
}
